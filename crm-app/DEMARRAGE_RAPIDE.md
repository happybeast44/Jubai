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

### 🌐 **Accès DISTANT (depuis n'importe où)**
- ✅ Accès depuis **travail, maison, déplacement**
- ✅ Fonctionne sur **n'importe quel réseau internet**
- ✅ Sécurisé (HTTPS + mot de passe)
- ⚠️ Nécessite installation de **Ngrok** (une seule fois)
- ⚠️ URL change à chaque lancement (version gratuite)

👉 **Utilisez :** `LANCER_CRM_NGROK.bat`
👉 **Guide complet :** `GUIDE_NGROK_ACCES_DISTANT.md`

---

## 📋 Résumé des fichiers disponibles

| Fichier | Description |
|---------|-------------|
| **LANCER_CRM.bat** | Lance le CRM pour accès local (même Wi-Fi) |
| **LANCER_CRM_NGROK.bat** | Lance le CRM avec accès distant (n'importe où) |
| **VOIR_MON_IP.bat** | Affiche l'adresse IP de votre PC (pour accès local) |
| **GUIDE_UTILISATION_LOCALE.md** | Guide complet : accès local Wi-Fi |
| **GUIDE_NGROK_ACCES_DISTANT.md** | Guide complet : accès distant avec Ngrok |

---

## 🎯 Recommandation pour vous

**Vous utilisez votre tablette au travail et votre PC à la maison ?**

👉 **Utilisez la méthode NGROK (accès distant)**

Pourquoi ?
- Vous pourrez accéder au CRM depuis votre tablette au travail
- Vous pourrez accéder depuis votre PC à la maison
- Vous pourrez accéder depuis n'importe où avec internet
- Vous n'avez besoin que de l'URL Ngrok

**Étapes simples :**
1. Installer Ngrok (une seule fois) - voir `GUIDE_NGROK_ACCES_DISTANT.md`
2. Lancer `LANCER_CRM_NGROK.bat` sur votre PC
3. Noter l'URL Ngrok affichée
4. Ouvrir cette URL sur votre tablette au travail
5. Profiter de votre CRM !

---

## ⚙️ Configuration initiale (première utilisation)

### Pour accès LOCAL :
✅ Aucune configuration nécessaire - lancez directement `LANCER_CRM.bat`

### Pour accès DISTANT (Ngrok) :
1. Télécharger Ngrok : https://ngrok.com/download
2. Extraire `ngrok.exe` dans `C:\ngrok\`
3. Créer un compte gratuit : https://dashboard.ngrok.com/signup
4. Copier votre token d'authentification
5. Configurer : `ngrok config add-authtoken VOTRE_TOKEN`
6. Lancer `LANCER_CRM_NGROK.bat`

Voir `GUIDE_NGROK_ACCES_DISTANT.md` pour les détails.

---

## 🆘 Aide rapide

### Le CRM ne démarre pas ?
- Vérifiez que Node.js est installé
- Vérifiez que vous êtes dans le bon dossier
- Fermez toutes les fenêtres et réessayez

### Impossible d'accéder depuis l'iPad (local) ?
- PC et iPad sur le **même Wi-Fi** ?
- Pare-feu Windows autorise Node.js ?
- IP correcte ? Utilisez `VOIR_MON_IP.bat`

### Impossible d'accéder depuis la tablette (Ngrok) ?
- CRM lancé avec `LANCER_CRM_NGROK.bat` ?
- Les 3 fenêtres sont ouvertes ?
- URL Ngrok correcte ?
- Cliquez "Visit Site" si Ngrok affiche un avertissement

---

## 📞 Mot de passe du CRM

**Mot de passe :** `Bestbuy1`

Utilisez ce mot de passe pour vous connecter au CRM, que vous utilisiez l'accès local ou distant.

---

## ✅ Prêt à démarrer !

Choisissez votre méthode et suivez le guide correspondant. Bonne utilisation !
