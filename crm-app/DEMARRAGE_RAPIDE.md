# 🚀 Démarrage Rapide - CRM

## Quelle méthode choisir ?

### 🏠 **Accès LOCAL uniquement (PC + iPad sur même Wi-Fi)**
- ✅ **Gratuit** et simple
- ✅ Pas de configuration supplémentaire
- ❌ Fonctionne **uniquement sur votre réseau Wi-Fi local**
- ❌ Ne fonctionne **pas** depuis le travail, en déplacement, etc.

👉 **Utilisez :** `LANCER_CRM.bat`
👉 **Guide complet :** `GUIDE_UTILISATION_LOCALE.md`

---

### 🌐 **Accès DISTANT (depuis n'importe où) - RECOMMANDÉ**
- ✅ Accès depuis **travail, maison, déplacement**
- ✅ Fonctionne sur **n'importe quel réseau internet**
- ✅ **Une seule URL** pour tout (frontend + backend)
- ✅ Sécurisé (HTTPS + mot de passe)
- ⚠️ Nécessite installation de **Ngrok** (une seule fois)
- ⚠️ URL change à chaque lancement (version gratuite)

👉 **Utilisez :** `LANCER_CRM_NGROK_PRODUCTION.bat`
👉 **Guide complet :** `GUIDE_NGROK_ACCES_DISTANT.md`

---

## 📋 Résumé des fichiers disponibles

| Fichier | Description |
|---------|-------------|
| **LANCER_CRM.bat** | Lance le CRM pour accès local (même Wi-Fi) |
| **LANCER_CRM_NGROK_PRODUCTION.bat** | Lance le CRM avec accès distant - **RECOMMANDÉ** |
| **INSTALLER_DEPENDANCES.bat** | Installe les dépendances Node.js (à faire une seule fois) |
| **VOIR_MON_IP.bat** | Affiche l'adresse IP de votre PC (pour accès local) |
| **GUIDE_UTILISATION_LOCALE.md** | Guide complet : accès local Wi-Fi |
| **GUIDE_NGROK_ACCES_DISTANT.md** | Guide complet : accès distant avec Ngrok |

---

## 🎯 Recommandation pour vous

**Vous utilisez votre tablette au travail et votre PC à la maison ?**

👉 **Utilisez `LANCER_CRM_NGROK_PRODUCTION.bat` (accès distant)**

Pourquoi ?
- **Une seule URL** pour accéder au CRM complet
- Fonctionne depuis votre tablette au travail
- Fonctionne depuis votre PC à la maison
- Fonctionne depuis n'importe où avec internet
- Plus simple et plus fiable

**Étapes simples :**
1. Installer Ngrok (une seule fois) - voir ci-dessous
2. Lancer `LANCER_CRM_NGROK_PRODUCTION.bat`
3. Attendre 1-2 minutes (build du frontend)
4. Noter l'URL Ngrok affichée (ex: `https://abc123.ngrok-free.dev`)
5. Ouvrir cette URL sur n'importe quel appareil
6. Profiter de votre CRM !

---

## ⚙️ Configuration initiale (première utilisation)

### **Étape 1 : Installer les dépendances Node.js**

**Obligatoire - À faire une seule fois**

1. Double-cliquez sur `INSTALLER_DEPENDANCES.bat`
2. Attendez 2-5 minutes que tout s'installe
3. C'est fait !

### **Étape 2 : Pour accès DISTANT - Installer Ngrok**

**Si vous voulez accéder depuis le travail, en déplacement, etc.**

1. Téléchargez Ngrok : **https://ngrok.com/download**
2. Extrayez le fichier ZIP
3. Copiez `ngrok.exe` dans `C:\ngrok\` (créez le dossier s'il n'existe pas)
4. Créez un compte gratuit : **https://dashboard.ngrok.com/signup**
5. Copiez votre token sur : **https://dashboard.ngrok.com/get-started/your-authtoken**
6. Ouvrez PowerShell et tapez :
   ```
   cd C:\ngrok
   .\ngrok config add-authtoken VOTRE_TOKEN
   ```
7. C'est fait !

---

## 🚀 Lancement quotidien

### **Pour accès DISTANT (recommandé) :**

1. Double-cliquez sur `LANCER_CRM_NGROK_PRODUCTION.bat`
2. Attendez 1-2 minutes (build + démarrage)
3. Notez l'URL Ngrok affichée dans la fenêtre Ngrok
4. Ouvrez cette URL sur n'importe quel appareil
5. Cliquez "Visit Site" si Ngrok affiche un avertissement
6. Entrez le mot de passe : `Bestbuy1`

### **Pour accès LOCAL uniquement :**

1. Double-cliquez sur `LANCER_CRM.bat`
2. Le navigateur s'ouvre sur `http://localhost:3000`
3. Entrez le mot de passe : `Bestbuy1`

---

## 🆘 Aide rapide

### Le CRM ne démarre pas ?
- Avez-vous installé les dépendances ? → Lancez `INSTALLER_DEPENDANCES.bat`
- Vérifiez que Node.js est installé
- Fermez toutes les fenêtres et réessayez

### "Cannot find module 'express'" ou "react-scripts not found" ?
- Vous n'avez pas installé les dépendances
- Lancez `INSTALLER_DEPENDANCES.bat`

### Impossible d'accéder depuis la tablette (Ngrok) ?
- CRM lancé avec `LANCER_CRM_NGROK_PRODUCTION.bat` ?
- Les 2 fenêtres sont ouvertes (Backend + Ngrok) ?
- URL Ngrok correcte ?
- Cliquez "Visit Site" si Ngrok affiche un avertissement

### L'URL Ngrok change à chaque fois ?
- C'est normal avec la version gratuite de Ngrok
- Notez la nouvelle URL à chaque lancement
- Ou gardez le CRM allumé toute la journée (l'URL reste la même)
- Ou passez à la version payante Ngrok (8$/mois) pour une URL fixe

### Le PC doit rester allumé ?
- **OUI** - Le PC héberge votre CRM
- Si vous éteignez le PC, l'URL Ngrok ne fonctionne plus
- Configurez Windows pour qu'il ne se mette pas en veille

---

## 📞 Mot de passe du CRM

**Mot de passe :** `Bestbuy1`

Utilisez ce mot de passe pour vous connecter au CRM, que vous utilisiez l'accès local ou distant.

---

## ✅ Prêt à démarrer !

1. Installez les dépendances : `INSTALLER_DEPENDANCES.bat`
2. Si accès distant : Installez Ngrok (voir ci-dessus)
3. Lancez `LANCER_CRM_NGROK_PRODUCTION.bat`
4. Profitez de votre CRM ! 🎉
