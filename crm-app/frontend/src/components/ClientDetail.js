import React from 'react';
import './ClientDetail.css';

function ClientDetail({ client, onClose, onEdit, onDelete }) {
  if (!client) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Détails du client</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="detail-content">
          <div className="detail-section">
            <h3>Informations de base</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Nom complet:</span>
                <span className="detail-value">{client.nomComplet}</span>
              </div>
              {client.entreprise && (
                <div className="detail-item">
                  <span className="detail-label">Entreprise:</span>
                  <span className="detail-value">{client.entreprise}</span>
                </div>
              )}
              <div className="detail-item">
                <span className="detail-label">Contact principal:</span>
                <span className="detail-value">{client.contactPrincipal}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{client.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Canal d'entrée:</span>
                <span className="detail-value">{client.canalEntree}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Langue préférée:</span>
                <span className="detail-value">{client.languePreferee}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Type de client:</span>
                <span className="detail-value">{client.typeClient}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Objectif:</span>
                <span className="detail-value">{client.objectifClient}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Services et fournisseur</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Services souhaités:</span>
                <span className="detail-value">
                  {client.servicesSouhaites?.join(', ') || 'Aucun'}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Ancien fournisseur:</span>
                <span className="detail-value">{client.ancienFournisseur}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Éligible EPP:</span>
                <span className="detail-value">{client.eligibleEPP}</span>
              </div>
            </div>
          </div>

          {client.mobilite && (client.mobilite.nombreLignes || client.mobilite.appareils) && (
            <div className="detail-section">
              <h3>Informations mobilité</h3>
              <div className="detail-grid">
                {client.mobilite.nombreLignes && (
                  <div className="detail-item">
                    <span className="detail-label">Nombre de lignes:</span>
                    <span className="detail-value">{client.mobilite.nombreLignes}</span>
                  </div>
                )}
                {client.mobilite.appareils && (
                  <div className="detail-item">
                    <span className="detail-label">Appareils:</span>
                    <span className="detail-value">{client.mobilite.appareils}</span>
                  </div>
                )}
                {client.mobilite.forfait && (
                  <div className="detail-item">
                    <span className="detail-label">Forfait:</span>
                    <span className="detail-value">{client.mobilite.forfait}</span>
                  </div>
                )}
                {client.mobilite.dateEcheance && (
                  <div className="detail-item">
                    <span className="detail-label">Date d'échéance:</span>
                    <span className="detail-value">
                      {new Date(client.mobilite.dateEcheance).toLocaleDateString('fr-CA')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {client.residentiel && client.residentiel.adresse && (
            <div className="detail-section">
              <h3>Informations résidentiel</h3>
              <div className="detail-grid">
                <div className="detail-item full-width">
                  <span className="detail-label">Adresse:</span>
                  <span className="detail-value">{client.residentiel.adresse}</span>
                </div>
                {client.residentiel.vitesse && (
                  <div className="detail-item">
                    <span className="detail-label">Vitesse Internet:</span>
                    <span className="detail-value">{client.residentiel.vitesse}</span>
                  </div>
                )}
                {client.residentiel.tv && (
                  <div className="detail-item">
                    <span className="detail-label">TV:</span>
                    <span className="detail-value">{client.residentiel.tv}</span>
                  </div>
                )}
                {client.residentiel.telephonie && (
                  <div className="detail-item">
                    <span className="detail-label">Téléphonie:</span>
                    <span className="detail-value">{client.residentiel.telephonie}</span>
                  </div>
                )}
                {client.residentiel.installation && (
                  <div className="detail-item">
                    <span className="detail-label">Installation:</span>
                    <span className="detail-value">{client.residentiel.installation}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {client.promotions && (
            <div className="detail-section">
              <h3>Promotions et offres</h3>
              <p className="detail-text">{client.promotions}</p>
            </div>
          )}

          <div className="detail-section">
            <h3>Suivi et statut</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Statut:</span>
                <span className="detail-value statut-badge">{client.statut}</span>
              </div>
              {client.dates.premierContact && (
                <div className="detail-item">
                  <span className="detail-label">Premier contact:</span>
                  <span className="detail-value">
                    {new Date(client.dates.premierContact).toLocaleDateString('fr-CA')}
                  </span>
                </div>
              )}
              {client.dates.dernierSuivi && (
                <div className="detail-item">
                  <span className="detail-label">Dernier suivi:</span>
                  <span className="detail-value">
                    {new Date(client.dates.dernierSuivi).toLocaleDateString('fr-CA')}
                  </span>
                </div>
              )}
              {client.dates.prochainSuivi && (
                <div className="detail-item">
                  <span className="detail-label">Prochain suivi:</span>
                  <span className="detail-value">
                    {new Date(client.dates.prochainSuivi).toLocaleDateString('fr-CA')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {client.commentaires && (
            <div className="detail-section">
              <h3>Commentaires</h3>
              <p className="detail-text">{client.commentaires}</p>
            </div>
          )}
        </div>

        <div className="detail-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
          <button className="btn btn-edit" onClick={() => onEdit(client)}>
            Modifier
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(client.id)}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;
