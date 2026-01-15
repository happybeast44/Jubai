from flask import Flask, render_template, request, jsonify, redirect, url_for
from models import db, Client
from datetime import datetime, date
from sqlalchemy import or_, func
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crm.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'bestbuy-crm-secret-key'

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    """Page principale avec liste des clients"""
    # Paramètres de filtrage
    statut_filter = request.args.get('statut', '')
    type_vente_filter = request.args.get('typeVente', '')
    search_query = request.args.get('search', '')

    # Query de base
    query = Client.query

    # Appliquer les filtres
    if statut_filter:
        query = query.filter(Client.statut == statut_filter)
    if type_vente_filter:
        query = query.filter(Client.typeVente == type_vente_filter)
    if search_query:
        search_pattern = f'%{search_query}%'
        query = query.filter(
            or_(
                Client.nom.like(search_pattern),
                Client.telephone.like(search_pattern),
                Client.courriel.like(search_pattern)
            )
        )

    clients = query.order_by(Client.dateModification.desc()).all()

    # Obtenir les valeurs uniques pour les filtres
    statuts = db.session.query(Client.statut).distinct().all()
    types_vente = db.session.query(Client.typeVente).distinct().filter(Client.typeVente.isnot(None)).all()

    return render_template('index.html',
                         clients=clients,
                         statuts=[s[0] for s in statuts if s[0]],
                         types_vente=[t[0] for t in types_vente if t[0]],
                         current_statut=statut_filter,
                         current_type_vente=type_vente_filter,
                         search_query=search_query)

@app.route('/client/add', methods=['POST'])
def add_client():
    """Ajouter un nouveau client"""
    try:
        data = request.form

        # Convertir la date si présente
        prochain_suivi = None
        if data.get('prochainSuivi'):
            prochain_suivi = datetime.strptime(data.get('prochainSuivi'), '%Y-%m-%d').date()

        client = Client(
            nom=data.get('nom'),
            telephone=data.get('telephone'),
            courriel=data.get('courriel'),
            typeClient=data.get('typeClient'),
            canalEntree=data.get('canalEntree'),
            statut=data.get('statut', 'Prospect'),
            typeVente=data.get('typeVente'),
            servicesVoulus=data.get('servicesVoulus'),
            nombreLignes=int(data.get('nombreLignes', 0)),
            eligibleEPP=data.get('eligibleEPP') == 'on',
            prochainSuivi=prochain_suivi,
            notes=data.get('notes')
        )

        db.session.add(client)
        db.session.commit()

        return jsonify({'success': True, 'message': 'Client ajouté avec succès'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 400

@app.route('/client/<int:client_id>', methods=['GET'])
def get_client(client_id):
    """Obtenir les détails d'un client"""
    client = Client.query.get_or_404(client_id)
    return jsonify(client.to_dict())

@app.route('/client/<int:client_id>/update', methods=['POST'])
def update_client(client_id):
    """Modifier un client existant"""
    try:
        client = Client.query.get_or_404(client_id)
        data = request.form

        client.nom = data.get('nom', client.nom)
        client.telephone = data.get('telephone', client.telephone)
        client.courriel = data.get('courriel', client.courriel)
        client.typeClient = data.get('typeClient', client.typeClient)
        client.canalEntree = data.get('canalEntree', client.canalEntree)
        client.statut = data.get('statut', client.statut)
        client.typeVente = data.get('typeVente', client.typeVente)
        client.servicesVoulus = data.get('servicesVoulus', client.servicesVoulus)
        client.nombreLignes = int(data.get('nombreLignes', client.nombreLignes))
        client.eligibleEPP = data.get('eligibleEPP') == 'on'
        client.notes = data.get('notes', client.notes)

        # Mettre à jour la date de prochain suivi
        if data.get('prochainSuivi'):
            client.prochainSuivi = datetime.strptime(data.get('prochainSuivi'), '%Y-%m-%d').date()

        client.dateModification = datetime.utcnow()

        db.session.commit()

        return jsonify({'success': True, 'message': 'Client modifié avec succès'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 400

@app.route('/client/<int:client_id>/delete', methods=['POST'])
def delete_client(client_id):
    """Supprimer un client"""
    try:
        client = Client.query.get_or_404(client_id)
        db.session.delete(client)
        db.session.commit()

        return jsonify({'success': True, 'message': 'Client supprimé avec succès'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 400

@app.route('/statistiques')
def statistiques():
    """Obtenir les statistiques du CRM"""
    stats = {
        'total_clients': Client.query.count(),
        'par_statut': {},
        'par_type_vente': {},
        'par_type_client': {},
        'total_lignes': db.session.query(func.sum(Client.nombreLignes)).scalar() or 0,
        'eligible_epp': Client.query.filter(Client.eligibleEPP == True).count()
    }

    # Statistiques par statut
    statuts = db.session.query(Client.statut, func.count(Client.id)).group_by(Client.statut).all()
    stats['par_statut'] = {statut: count for statut, count in statuts if statut}

    # Statistiques par type de vente
    types_vente = db.session.query(Client.typeVente, func.count(Client.id)).group_by(Client.typeVente).all()
    stats['par_type_vente'] = {type_v: count for type_v, count in types_vente if type_v}

    # Statistiques par type de client
    types_client = db.session.query(Client.typeClient, func.count(Client.id)).group_by(Client.typeClient).all()
    stats['par_type_client'] = {type_c: count for type_c, count in types_client if type_c}

    return jsonify(stats)

@app.route('/rappels')
def rappels_du_jour():
    """Obtenir les clients à suivre aujourd'hui"""
    today = date.today()
    clients = Client.query.filter(Client.prochainSuivi == today).all()

    return jsonify({
        'date': today.isoformat(),
        'count': len(clients),
        'clients': [client.to_dict() for client in clients]
    })

@app.route('/export')
def export_json():
    """Exporter tous les clients en JSON"""
    clients = Client.query.all()
    clients_data = [client.to_dict() for client in clients]

    return jsonify({
        'export_date': datetime.utcnow().isoformat(),
        'total_clients': len(clients_data),
        'clients': clients_data
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
