import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import ClientDetail from './components/ClientDetail';
import StatsPanel from './components/StatsPanel';
import Login from './components/Login';

const API_URL = 'http://localhost:5000/api/clients';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatut, setFilterStatut] = useState('');
  const [filterType, setFilterType] = useState('');
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setClients(data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des clients:', error);
      setLoading(false);
      alert('Erreur lors du chargement des clients. Vérifiez que le serveur est démarré.');
    }
  }, []);

  // Charger tous les clients au démarrage
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  // Filtrer les clients quand les filtres changent
  useEffect(() => {
    filterClients();
  }, [filterClients]);

  const filterClients = useCallback(() => {
    let filtered = [...clients];

    // Filtre de recherche
    if (searchTerm) {
      filtered = filtered.filter(client =>
        client.nomComplet.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.entreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.contactPrincipal.includes(searchTerm)
      );
    }

    // Filtre par statut
    if (filterStatut) {
      filtered = filtered.filter(client => client.statut === filterStatut);
    }

    // Filtre par type
    if (filterType) {
      filtered = filtered.filter(client => client.typeClient === filterType);
    }

    setFilteredClients(filtered);
  }, [clients, searchTerm, filterStatut, filterType]);

  const handleAddClient = async (clientData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData)
      });

      if (response.ok) {
        await fetchClients();
        setIsFormOpen(false);
        alert('Client ajouté avec succès !');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du client:', error);
      alert('Erreur lors de l\'ajout du client');
    }
  };

  const handleUpdateClient = async (clientData) => {
    try {
      const response = await fetch(`${API_URL}/${clientData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData)
      });

      if (response.ok) {
        await fetchClients();
        setIsFormOpen(false);
        setSelectedClient(null);
        alert('Client modifié avec succès !');
      }
    } catch (error) {
      console.error('Erreur lors de la modification du client:', error);
      alert('Erreur lors de la modification du client');
    }
  };

  const handleDeleteClient = async (clientId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      try {
        const response = await fetch(`${API_URL}/${clientId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          await fetchClients();
          setIsDetailOpen(false);
          setSelectedClient(null);
          alert('Client supprimé avec succès !');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du client:', error);
        alert('Erreur lors de la suppression du client');
      }
    }
  };

  const openAddForm = () => {
    setSelectedClient(null);
    setIsFormOpen(true);
  };

  const openEditForm = (client) => {
    setSelectedClient(client);
    setIsFormOpen(true);
    setIsDetailOpen(false);
  };

  const openClientDetail = (client) => {
    setSelectedClient(client);
    setIsDetailOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedClient(null);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    setSelectedClient(null);
  };

  // Afficher la page de connexion si non authentifié
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRM</h1>
      </header>

      <main className="App-main">
        {/* Statistiques */}
        {!loading && <StatsPanel clients={clients} />}

        {/* Barre de contrôles */}
        <div className="controls">
          <button className="btn btn-primary" onClick={openAddForm}>
            Ajouter un client
          </button>

          <div className="filters">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />

            <select
              value={filterStatut}
              onChange={(e) => setFilterStatut(e.target.value)}
              className="filter-select"
            >
              <option value="">Tous les statuts</option>
              <option value="Prospect">Prospect</option>
              <option value="En réflexion">En réflexion</option>
              <option value="Prêt à signer">Prêt à signer</option>
              <option value="Finalisé">Finalisé</option>
              <option value="Refusé">Refusé</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="">Tous les types</option>
              <option value="Particulier">Particulier</option>
              <option value="PME">PME</option>
            </select>
          </div>
        </div>

        {/* Liste des clients */}
        {loading ? (
          <div className="loading">Chargement des clients...</div>
        ) : (
          <ClientList
            clients={filteredClients}
            onClientClick={openClientDetail}
            onEditClient={openEditForm}
            onDeleteClient={handleDeleteClient}
          />
        )}

        {/* Formulaire d'ajout/modification */}
        {isFormOpen && (
          <ClientForm
            client={selectedClient}
            onSave={selectedClient ? handleUpdateClient : handleAddClient}
            onCancel={closeForm}
          />
        )}

        {/* Détail du client */}
        {isDetailOpen && (
          <ClientDetail
            client={selectedClient}
            onClose={closeDetail}
            onEdit={openEditForm}
            onDelete={handleDeleteClient}
          />
        )}
      </main>
    </div>
  );
}

export default App;
