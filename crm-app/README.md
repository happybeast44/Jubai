# 📋 CRM Simple - Guide d'utilisation

Un CRM (Customer Relationship Management) simple et complet pour gérer vos clients.

## 🎯 Qu'est-ce que c'est ?

Ce CRM vous permet de :
- ✅ Ajouter de nouveaux clients
- ✅ Voir la liste de tous vos clients
- ✅ Modifier les informations d'un client
- ✅ Supprimer un client
- ✅ Rechercher des clients
- ✅ Filtrer par statut et type de client
- ✅ Suivre toutes les informations importantes (mobilité, résidentiel, promotions, etc.)

## 📦 Ce dont vous avez besoin

Avant de commencer, vous devez installer ces programmes sur votre ordinateur :

### 1. Node.js (pour faire fonctionner l'application)
- Allez sur : https://nodejs.org/
- Téléchargez la version LTS (recommandée)
- Installez-la en suivant les instructions
- Pour vérifier que c'est bien installé, ouvrez un terminal/invite de commande et tapez :
  ```
  node --version
  ```
  Vous devriez voir un numéro de version (ex: v18.17.0)

### 2. Un éditeur de code (optionnel mais recommandé)
- Visual Studio Code : https://code.visualstudio.com/
- C'est gratuit et facile à utiliser

## 🚀 Installation du CRM

### Étape 1 : Ouvrir un terminal

**Sur Windows :**
- Appuyez sur `Windows + R`
- Tapez `cmd` et appuyez sur Entrée

**Sur Mac :**
- Appuyez sur `Cmd + Espace`
- Tapez `Terminal` et appuyez sur Entrée

**Sur Linux :**
- Appuyez sur `Ctrl + Alt + T`

### Étape 2 : Naviguer vers le dossier du CRM

Dans le terminal, tapez :
```bash
cd chemin/vers/Jubai/crm-app
```

**Exemple :** Si le dossier est sur votre bureau :
- Windows : `cd C:\Users\VotreNom\Desktop\Jubai\crm-app`
- Mac/Linux : `cd ~/Desktop/Jubai/crm-app`

### Étape 3 : Installer le backend

1. Allez dans le dossier backend :
   ```bash
   cd backend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```
   ⏳ Patientez quelques minutes... Des fichiers vont se télécharger.

3. Une fois terminé, vous verrez un message de succès.

### Étape 4 : Installer le frontend

1. Retournez au dossier principal :
   ```bash
   cd ..
   ```

2. Allez dans le dossier frontend :
   ```bash
   cd frontend
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```
   ⏳ Patientez quelques minutes... Des fichiers vont se télécharger.

## 🎮 Lancer l'application

Vous devez ouvrir **DEUX** fenêtres de terminal (une pour le backend, une pour le frontend).

### Terminal 1 - Démarrer le backend (serveur)

1. Dans la première fenêtre de terminal :
   ```bash
   cd chemin/vers/Jubai/crm-app/backend
   npm start
   ```

2. Vous devriez voir :
   ```
   🚀 Serveur démarré sur http://localhost:5000
   ```

3. **NE FERMEZ PAS cette fenêtre !** Le serveur doit rester actif.

### Terminal 2 - Démarrer le frontend (interface)

1. Ouvrez une **nouvelle** fenêtre de terminal

2. Dans cette deuxième fenêtre :
   ```bash
   cd chemin/vers/Jubai/crm-app/frontend
   npm start
   ```

3. Patientez quelques secondes...

4. Votre navigateur devrait s'ouvrir automatiquement sur : `http://localhost:3000`

5. Si ce n'est pas le cas, ouvrez votre navigateur et allez à : `http://localhost:3000`

## 🎉 C'est prêt !

Vous devriez maintenant voir votre CRM avec :
- Un titre "CRM Simple"
- Un bouton "Ajouter un client"
- Des filtres de recherche
- 5 clients de démonstration déjà présents

## 📖 Comment utiliser le CRM

### Voir la liste des clients
- La liste s'affiche automatiquement sur la page d'accueil
- Chaque carte montre les informations principales du client

### Ajouter un nouveau client
1. Cliquez sur le bouton "➕ Ajouter un client"
2. Remplissez le formulaire (au minimum : nom, contact, email)
3. Cliquez sur "Ajouter"

### Voir les détails d'un client
- Cliquez sur le nom du client OU
- Cliquez sur le bouton "👁️ Voir détails"

### Modifier un client
1. Cliquez sur le bouton "✏️ Modifier" sur la carte du client
2. Modifiez les informations
3. Cliquez sur "Mettre à jour"

### Supprimer un client
1. Cliquez sur le bouton "🗑️ Supprimer"
2. Confirmez la suppression

### Rechercher des clients
- Utilisez la barre de recherche (🔍) pour chercher par :
  - Nom
  - Entreprise
  - Email
  - Numéro de téléphone

### Filtrer les clients
- Utilisez les menus déroulants pour filtrer par :
  - **Statut :** Prospect, En réflexion, Prêt à signer, Finalisé, Refusé
  - **Type :** Particulier, PME

## 🗄️ Où sont stockées les données ?

Toutes vos données sont dans le fichier :
```
crm-app/backend/database.json
```

Ce fichier contient tous vos clients au format JSON. Vous pouvez :
- Le sauvegarder pour faire une copie
- Le partager avec d'autres personnes
- Le modifier directement (si vous savez ce que vous faites)

**⚠️ ATTENTION :** Ne supprimez pas ce fichier, sinon vous perdrez tous vos clients !

## 🛑 Arrêter l'application

Pour arrêter l'application :
1. Allez dans chaque fenêtre de terminal
2. Appuyez sur `Ctrl + C` (Windows/Linux) ou `Cmd + C` (Mac)
3. Confirmez l'arrêt si demandé

## 🔧 Problèmes courants

### Le navigateur ne s'ouvre pas automatiquement
- Ouvrez manuellement votre navigateur
- Allez à : `http://localhost:3000`

### "Erreur lors du chargement des clients"
- Vérifiez que le backend (serveur) est bien démarré dans le premier terminal
- Vous devriez voir : "🚀 Serveur démarré sur http://localhost:5000"

### "Port 3000 already in use"
- Le port 3000 est déjà utilisé par une autre application
- Fermez l'autre application ou
- Le terminal vous proposera d'utiliser un autre port (tapez `Y` pour oui)

### "npm: command not found"
- Node.js n'est pas installé correctement
- Réinstallez Node.js depuis https://nodejs.org/

## 📱 Structure de l'application

```
crm-app/
├── backend/               # Serveur (API)
│   ├── server.js         # Code du serveur
│   ├── database.json     # Base de données (vos clients)
│   └── package.json      # Dépendances du backend
│
└── frontend/             # Interface utilisateur
    ├── src/
    │   ├── App.js        # Application principale
    │   ├── components/   # Composants React
    │   │   ├── ClientList.js      # Liste des clients
    │   │   ├── ClientForm.js      # Formulaire d'ajout/modification
    │   │   └── ClientDetail.js    # Détails d'un client
    │   └── index.js      # Point d'entrée
    └── package.json      # Dépendances du frontend
```

## 🆘 Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est bien installé
2. Vérifiez que les deux terminaux (backend et frontend) sont actifs
3. Redémarrez l'application
4. Vérifiez que vous êtes dans les bons dossiers

## 🎓 Pour aller plus loin

Une fois que vous êtes à l'aise avec l'application, vous pouvez :
- Modifier les couleurs dans les fichiers CSS
- Ajouter de nouveaux champs dans le formulaire
- Personnaliser les statuts et les filtres
- Exporter vos données en Excel (nécessite du code supplémentaire)

## ✨ Technologies utilisées

- **Frontend :** React (bibliothèque JavaScript pour l'interface)
- **Backend :** Node.js + Express (serveur web)
- **Base de données :** JSON (fichier local)
- **Style :** CSS pur (pas de framework)

---

**Bon travail avec votre CRM ! 🚀**
