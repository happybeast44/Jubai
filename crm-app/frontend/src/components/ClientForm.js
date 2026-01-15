import React, { useState, useEffect } from 'react';
import './ClientForm.css';

function ClientForm({ client, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nomComplet: '',
    entreprise: '',
    contactPrincipal: '',
    email: '',
    canalEntree: 'Téléphone',
    languePreferee: 'Français',
    typeClient: 'Particulier',
    objectifClient: '',
    servicesSouhaites: [],
    ancienFournisseur: '',
    eligibleEPP: 'Non',
    mobilite: {
      nombreLignes: '',
      appareils: '',
      forfait: '',
      dateEcheance: ''
    },
    residentiel: {
      adresse: '',
      vitesse: '',
      tv: '',
      telephonie: '',
      installation: ''
    },
    promotions: '',
    statut: 'Prospect',
    dates: {
      premierContact: new Date().toISOString().split('T')[0],
      dernierSuivi: '',
      prochainSuivi: ''
    },
    commentaires: ''
  });

  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => {
      const services = prev.servicesSouhaites || [];
      if (services.includes(service)) {
        return {
          ...prev,
          servicesSouhaites: services.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          servicesSouhaites: [...services, service]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nomComplet || !formData.contactPrincipal || !formData.email) {
      alert('Veuillez remplir au moins le nom, le contact et l\'email');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{client ? '✏️ Modifier le client' : '➕ Ajouter un nouveau client'}</h2>
          <button className="close-btn" onClick={onCancel}>✖</button>
        </div>

        <form onSubmit={handleSubmit} className="client-form">
          <div className="form-section">
            <h3>Informations de base</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Nom complet *</label>
                <input
                  type="text"
                  name="nomComplet"
                  value={formData.nomComplet}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Entreprise (si PME)</label>
                <input
                  type="text"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contact principal *</label>
                <input
                  type="tel"
                  name="contactPrincipal"
                  value={formData.contactPrincipal}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Canal d'entrée</label>
                <select name="canalEntree" value={formData.canalEntree} onChange={handleChange}>
                  <option value="Téléphone">Téléphone</option>
                  <option value="Site web">Site web</option>
                  <option value="En magasin">En magasin</option>
                  <option value="Référence">Référence</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label>Langue préférée</label>
                <select name="languePreferee" value={formData.languePreferee} onChange={handleChange}>
                  <option value="Français">Français</option>
                  <option value="Anglais">Anglais</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Type de client</label>
                <select name="typeClient" value={formData.typeClient} onChange={handleChange}>
                  <option value="Particulier">Particulier</option>
                  <option value="PME">PME</option>
                </select>
              </div>
              <div className="form-group">
                <label>Objectif du client</label>
                <input
                  type="text"
                  name="objectifClient"
                  value={formData.objectifClient}
                  onChange={handleChange}
                  placeholder="Ex: Réduire les coûts"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Services et fournisseur</h3>
            <div className="form-group">
              <label>Services souhaités</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.servicesSouhaites?.includes('Mobilité')}
                    onChange={() => handleServiceChange('Mobilité')}
                  />
                  Mobilité
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.servicesSouhaites?.includes('Internet')}
                    onChange={() => handleServiceChange('Internet')}
                  />
                  Internet
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.servicesSouhaites?.includes('TV')}
                    onChange={() => handleServiceChange('TV')}
                  />
                  TV
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.servicesSouhaites?.includes('Téléphonie')}
                    onChange={() => handleServiceChange('Téléphonie')}
                  />
                  Téléphonie
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Ancien fournisseur</label>
                <input
                  type="text"
                  name="ancienFournisseur"
                  value={formData.ancienFournisseur}
                  onChange={handleChange}
                  placeholder="Ex: Bell, Vidéotron, Rogers"
                />
              </div>
              <div className="form-group">
                <label>Éligible EPP</label>
                <select name="eligibleEPP" value={formData.eligibleEPP} onChange={handleChange}>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Informations mobilité</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre de lignes</label>
                <input
                  type="number"
                  value={formData.mobilite.nombreLignes}
                  onChange={(e) => handleNestedChange('mobilite', 'nombreLignes', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Appareils</label>
                <input
                  type="text"
                  value={formData.mobilite.appareils}
                  onChange={(e) => handleNestedChange('mobilite', 'appareils', e.target.value)}
                  placeholder="Ex: iPhone 13, Samsung Galaxy"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Forfait</label>
                <input
                  type="text"
                  value={formData.mobilite.forfait}
                  onChange={(e) => handleNestedChange('mobilite', 'forfait', e.target.value)}
                  placeholder="Ex: 20 GB"
                />
              </div>
              <div className="form-group">
                <label>Date d'échéance</label>
                <input
                  type="date"
                  value={formData.mobilite.dateEcheance}
                  onChange={(e) => handleNestedChange('mobilite', 'dateEcheance', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Informations résidentiel</h3>
            <div className="form-group">
              <label>Adresse</label>
              <input
                type="text"
                value={formData.residentiel.adresse}
                onChange={(e) => handleNestedChange('residentiel', 'adresse', e.target.value)}
                placeholder="Adresse complète"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Vitesse Internet</label>
                <input
                  type="text"
                  value={formData.residentiel.vitesse}
                  onChange={(e) => handleNestedChange('residentiel', 'vitesse', e.target.value)}
                  placeholder="Ex: 100 Mbps"
                />
              </div>
              <div className="form-group">
                <label>TV</label>
                <input
                  type="text"
                  value={formData.residentiel.tv}
                  onChange={(e) => handleNestedChange('residentiel', 'tv', e.target.value)}
                  placeholder="Ex: Oui - Package Premium"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Téléphonie</label>
                <input
                  type="text"
                  value={formData.residentiel.telephonie}
                  onChange={(e) => handleNestedChange('residentiel', 'telephonie', e.target.value)}
                  placeholder="Ex: Oui"
                />
              </div>
              <div className="form-group">
                <label>Installation</label>
                <input
                  type="text"
                  value={formData.residentiel.installation}
                  onChange={(e) => handleNestedChange('residentiel', 'installation', e.target.value)}
                  placeholder="Ex: À domicile, Commercial"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Suivi et statut</h3>
            <div className="form-group">
              <label>Promotions et offres</label>
              <textarea
                name="promotions"
                value={formData.promotions}
                onChange={handleChange}
                rows="2"
                placeholder="Décrivez les promotions offertes"
              />
            </div>

            <div className="form-group">
              <label>Statut</label>
              <select name="statut" value={formData.statut} onChange={handleChange}>
                <option value="Prospect">Prospect</option>
                <option value="En réflexion">En réflexion</option>
                <option value="Prêt à signer">Prêt à signer</option>
                <option value="Finalisé">Finalisé</option>
                <option value="Refusé">Refusé</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Premier contact</label>
                <input
                  type="date"
                  value={formData.dates.premierContact}
                  onChange={(e) => handleNestedChange('dates', 'premierContact', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Dernier suivi</label>
                <input
                  type="date"
                  value={formData.dates.dernierSuivi}
                  onChange={(e) => handleNestedChange('dates', 'dernierSuivi', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Prochain suivi</label>
              <input
                type="date"
                value={formData.dates.prochainSuivi}
                onChange={(e) => handleNestedChange('dates', 'prochainSuivi', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Commentaires personnels</label>
              <textarea
                name="commentaires"
                value={formData.commentaires}
                onChange={handleChange}
                rows="4"
                placeholder="Notes, observations, etc."
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Annuler
            </button>
            <button type="submit" className="btn btn-primary">
              {client ? 'Mettre à jour' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientForm;
