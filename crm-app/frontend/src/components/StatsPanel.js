import React from 'react';
import './StatsPanel.css';

function StatsPanel({ clients }) {
  // Calculer les statistiques
  const totalClients = clients.length;

  const countByStatus = {
    prospect: clients.filter(c => c.statut === 'Prospect').length,
    reflexion: clients.filter(c => c.statut === 'En réflexion').length,
    pret: clients.filter(c => c.statut === 'Prêt à signer').length,
    finalise: clients.filter(c => c.statut === 'Finalisé').length,
    refuse: clients.filter(c => c.statut === 'Refusé').length
  };

  // Statistiques avancées
  const countPME = clients.filter(c => c.typeClient === 'PME').length;
  const countParticulier = clients.filter(c => c.typeClient === 'Particulier').length;

  const percentPME = totalClients > 0 ? ((countPME / totalClients) * 100).toFixed(1) : 0;
  const percentParticulier = totalClients > 0 ? ((countParticulier / totalClients) * 100).toFixed(1) : 0;

  const clientsActifs = countByStatus.prospect + countByStatus.reflexion + countByStatus.pret;
  const percentActifs = totalClients > 0 ? ((clientsActifs / totalClients) * 100).toFixed(1) : 0;

  const tauxConversion = totalClients > 0 ? ((countByStatus.finalise / totalClients) * 100).toFixed(1) : 0;

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h2>Tableau de bord</h2>
      </div>

      {/* Statistiques principales */}
      <div className="stats-grid">
        <div className="stat-card stat-total">
          <div className="stat-label">Total clients</div>
          <div className="stat-value">{totalClients}</div>
        </div>

        <div className="stat-card stat-prospect">
          <div className="stat-label">Prospects</div>
          <div className="stat-value">{countByStatus.prospect}</div>
        </div>

        <div className="stat-card stat-reflexion">
          <div className="stat-label">En réflexion</div>
          <div className="stat-value">{countByStatus.reflexion}</div>
        </div>

        <div className="stat-card stat-pret">
          <div className="stat-label">Prêts à signer</div>
          <div className="stat-value">{countByStatus.pret}</div>
        </div>

        <div className="stat-card stat-finalise">
          <div className="stat-label">Finalisés</div>
          <div className="stat-value">{countByStatus.finalise}</div>
        </div>

        <div className="stat-card stat-refuse">
          <div className="stat-label">Refusés</div>
          <div className="stat-value">{countByStatus.refuse}</div>
        </div>
      </div>

      {/* Résumé avancé */}
      <div className="stats-summary">
        <h3>Résumé client</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Clients PME</span>
            <span className="summary-value">{countPME} ({percentPME}%)</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Clients particuliers</span>
            <span className="summary-value">{countParticulier} ({percentParticulier}%)</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Clients actifs</span>
            <span className="summary-value">{clientsActifs} ({percentActifs}%)</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Taux de conversion</span>
            <span className="summary-value">{tauxConversion}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;
