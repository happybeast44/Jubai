const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chemin vers le fichier de base de données JSON
const DB_PATH = path.join(__dirname, 'database.json');

// Fonction pour lire la base de données
const readDatabase = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erreur lors de la lecture de la base de données:', error);
    return { clients: [] };
  }
};

// Fonction pour écrire dans la base de données
const writeDatabase = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'écriture dans la base de données:', error);
    return false;
  }
};

// Mot de passe stocké côté serveur (en production, utiliser une vraie base de données avec hash)
const CORRECT_PASSWORD = 'Bestbuy1';

// Route POST - Authentification
app.post('/api/login', (req, res) => {
  const { password } = req.body;

  if (password === CORRECT_PASSWORD) {
    res.json({ success: true, message: 'Authentification réussie' });
  } else {
    res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
  }
});

// Route GET - Obtenir tous les clients
app.get('/api/clients', (req, res) => {
  const db = readDatabase();
  res.json(db.clients);
});

// Route GET - Obtenir un client par ID
app.get('/api/clients/:id', (req, res) => {
  const db = readDatabase();
  const client = db.clients.find(c => c.id === req.params.id);

  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ message: 'Client non trouvé' });
  }
});

// Route POST - Créer un nouveau client
app.post('/api/clients', (req, res) => {
  const db = readDatabase();
  const newClient = {
    id: Date.now().toString(),
    ...req.body,
    dateCreation: new Date().toISOString()
  };

  db.clients.push(newClient);

  if (writeDatabase(db)) {
    res.status(201).json(newClient);
  } else {
    res.status(500).json({ message: 'Erreur lors de la création du client' });
  }
});

// Route PUT - Mettre à jour un client
app.put('/api/clients/:id', (req, res) => {
  const db = readDatabase();
  const index = db.clients.findIndex(c => c.id === req.params.id);

  if (index !== -1) {
    db.clients[index] = {
      ...db.clients[index],
      ...req.body,
      id: req.params.id,
      dateModification: new Date().toISOString()
    };

    if (writeDatabase(db)) {
      res.json(db.clients[index]);
    } else {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du client' });
    }
  } else {
    res.status(404).json({ message: 'Client non trouvé' });
  }
});

// Route DELETE - Supprimer un client
app.delete('/api/clients/:id', (req, res) => {
  const db = readDatabase();
  const index = db.clients.findIndex(c => c.id === req.params.id);

  if (index !== -1) {
    db.clients.splice(index, 1);

    if (writeDatabase(db)) {
      res.json({ message: 'Client supprimé avec succès' });
    } else {
      res.status(500).json({ message: 'Erreur lors de la suppression du client' });
    }
  } else {
    res.status(404).json({ message: 'Client non trouvé' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
