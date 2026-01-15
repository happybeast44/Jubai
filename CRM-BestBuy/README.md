# CRM Best Buy Express

Application CRM complète développée avec Flask et SQLite pour la gestion des clients de Best Buy Express.

## Fonctionnalités

### Gestion des Clients
- **Ajouter** un nouveau client avec toutes les informations requises
- **Modifier** les informations d'un client existant
- **Supprimer** un client de la base de données
- **Visualiser** les détails complets d'un client

### Recherche et Filtrage
- **Recherche** par nom, téléphone ou courriel
- **Filtrer** par statut (Prospect, Client actif, Suivi, Perdu)
- **Filtrer** par type de vente (Nouvelle ligne, Upgrade, Accessoires, Renouvellement)

### Statistiques et Rapports
- Nombre total de clients
- Distribution par statut
- Distribution par type de vente
- Total des lignes téléphoniques
- Nombre de clients éligibles EPP

### Fonctionnalités Avancées
- **Rappels du jour** : Liste des clients à suivre aujourd'hui
- **Export JSON** : Exportation complète de la base de données
- Interface responsive avec Tailwind CSS

## Champs de la Base de Données

Chaque client contient les informations suivantes :
- **nom** : Nom du client (requis)
- **téléphone** : Numéro de téléphone (requis)
- **courriel** : Adresse courriel
- **typeClient** : Résidentiel, Entreprise, PME
- **canalEntree** : Téléphone, En personne, Référence, Site web, Réseaux sociaux
- **statut** : Prospect, Client actif, Suivi, Perdu (requis)
- **typeVente** : Nouvelle ligne, Upgrade, Accessoires, Renouvellement
- **servicesVoulus** : Description des services demandés
- **nombreLignes** : Nombre de lignes téléphoniques
- **eligibleEPP** : Éligibilité au programme EPP (booléen)
- **prochainSuivi** : Date du prochain suivi
- **notes** : Notes additionnelles

## Installation

1. Installer les dépendances :
```bash
pip3 install -r requirements.txt
```

2. Lancer l'application :
```bash
python3 app.py
```

3. Accéder à l'application dans votre navigateur :
```
http://127.0.0.1:5000
```

## Structure du Projet

```
CRM-BestBuy/
├── app.py              # Application Flask principale
├── models.py           # Modèles de base de données
├── requirements.txt    # Dépendances Python
├── templates/
│   └── index.html      # Interface web
└── static/             # Fichiers statiques (vide pour l'instant)
```

## Technologies Utilisées

- **Flask 3.0.0** : Framework web Python
- **Flask-SQLAlchemy 3.1.1** : ORM pour la base de données
- **SQLite** : Base de données légère
- **Tailwind CSS** : Framework CSS pour l'interface
- **JavaScript** : Interactivité côté client

## Utilisation

### Ajouter un Client
1. Cliquer sur le bouton "+ Ajouter Client"
2. Remplir le formulaire avec les informations du client
3. Cliquer sur "Enregistrer"

### Modifier un Client
1. Cliquer sur "Modifier" dans la ligne du client
2. Modifier les informations dans le formulaire
3. Cliquer sur "Enregistrer"

### Supprimer un Client
1. Cliquer sur "Supprimer" dans la ligne du client
2. Confirmer la suppression

### Voir les Rappels du Jour
1. Cliquer sur "Rappels du Jour" dans la barre d'actions
2. Une fenêtre s'ouvrira avec la liste des clients à suivre aujourd'hui

### Exporter les Données
1. Cliquer sur "Exporter JSON" dans la barre d'actions
2. Le fichier JSON sera téléchargé automatiquement

## Notes de Développement

- La base de données SQLite est créée automatiquement au premier lancement
- L'application fonctionne en mode debug pour le développement
- Pour la production, utilisez un serveur WSGI comme Gunicorn
- Les données sont stockées dans `instance/crm.db`

## Support

Pour toute question ou problème, veuillez créer une issue sur le dépôt GitHub.
