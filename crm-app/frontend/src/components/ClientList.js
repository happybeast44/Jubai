import React from 'react';
import './ClientList.css';

function ClientList({ clients, onClientClick, onEditClient, onDeleteClient }) {
  const getStatutColor = (statut) => {
    switch (statut) {
      case 'Prospect':
        return '#3498db';
      case 'En réflexion':
        return '#f39c12';
      case 'Prêt à signer':
        return '#2ecc71';
      case 'Finalisé':
        return '#27ae60';
      case 'Refusé':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  if (clients.length === 0) {
    return (
      <div className="no-clients">
        <p>Aucun client trouvé</p>
        <p>Utilisez le bouton "Ajouter un client" pour commencer</p>
      </div>
    );
  }

  return (
    <div className="client-list">
      <div className="client-count">
        {clients.length} client{clients.length > 1 ? 's' : ''} trouvé{clients.length > 1 ? 's' : ''}
      </div>

      <div className="clients-grid">
        {clients.map(client => (
          <div key={client.id} className="client-card">
            <div className="client-card-header">
              <h3 onClick={() => onClientClick(client)} className="client-name">
                {client.nomComplet}
              </h3>
              <span
                className="client-statut"
                style={{ backgroundColor: getStatutColor(client.statut) }}
              >
                {client.statut}
              </span>
            </div>

            <div className="client-card-body">
              {client.entreprise && (
                <p className="client-info">
                  <strong>🏢 Entreprise:</strong> {client.entreprise}
                </p>
              )}
              <p className="client-info">
                <strong>👤 Type:</strong> {client.typeClient}
              </p>
              <p className="client-info">
                <strong>📞 Contact:</strong> {client.contactPrincipal}
              </p>
              <p className="client-info">
                <strong>📧 Email:</strong> {client.email}
              </p>
              <p className="client-info">
                <strong>🎯 Objectif:</strong> {client.objectifClient}
              </p>
              {client.dates.prochainSuivi && (
                <p className="client-info">
                  <strong>📅 Prochain suivi:</strong> {new Date(client.dates.prochainSuivi).toLocaleDateString('fr-CA')}
                </p>
              )}
            </div>

            <div className="client-card-actions">
              <button
                className="btn btn-secondary"
                onClick={() => onClientClick(client)}
              >
                👁️ Voir détails
              </button>
              <button
                className="btn btn-edit"
                onClick={() => onEditClient(client)}
              >
                ✏️ Modifier
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteClient(client.id)}
              >
                🗑️ Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientList;
