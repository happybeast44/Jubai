from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(100), nullable=False)
    telephone = db.Column(db.String(20), nullable=False)
    courriel = db.Column(db.String(100))
    typeClient = db.Column(db.String(50))  # Résidentiel, Entreprise, etc.
    canalEntree = db.Column(db.String(50))  # Téléphone, En personne, Référence, etc.
    statut = db.Column(db.String(50), nullable=False, default='Prospect')  # Prospect, Client actif, Suivi, Perdu, etc.
    typeVente = db.Column(db.String(50))  # Nouvelle ligne, Upgrade, Accessoires, etc.
    servicesVoulus = db.Column(db.Text)  # Services demandés
    nombreLignes = db.Column(db.Integer, default=0)
    eligibleEPP = db.Column(db.Boolean, default=False)  # Éligible au programme EPP
    prochainSuivi = db.Column(db.Date)  # Date du prochain suivi
    notes = db.Column(db.Text)  # Notes additionnelles
    dateCreation = db.Column(db.DateTime, default=datetime.utcnow)
    dateModification = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        """Convert client to dictionary for JSON export"""
        return {
            'id': self.id,
            'nom': self.nom,
            'telephone': self.telephone,
            'courriel': self.courriel,
            'typeClient': self.typeClient,
            'canalEntree': self.canalEntree,
            'statut': self.statut,
            'typeVente': self.typeVente,
            'servicesVoulus': self.servicesVoulus,
            'nombreLignes': self.nombreLignes,
            'eligibleEPP': self.eligibleEPP,
            'prochainSuivi': self.prochainSuivi.isoformat() if self.prochainSuivi else None,
            'notes': self.notes,
            'dateCreation': self.dateCreation.isoformat() if self.dateCreation else None,
            'dateModification': self.dateModification.isoformat() if self.dateModification else None
        }
