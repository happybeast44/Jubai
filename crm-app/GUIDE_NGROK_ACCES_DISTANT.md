# 🌐 Guide : Accéder à votre CRM depuis n'importe où avec Ngrok

## ✅ Prérequis

- ✅ PC Windows avec Node.js installé
- ✅ Connexion internet sur le PC
- ✅ Tablette/iPad avec connexion internet (peut être sur un autre réseau)

---

## 📥 Installation de Ngrok (une seule fois)

### **Étape 1 : Télécharger Ngrok**

1. Allez sur : **https://ngrok.com/download**
2. Cliquez sur **"Download for Windows"**
3. Extrayez le fichier ZIP téléchargé
4. Copiez le fichier **`ngrok.exe`** dans le dossier : **`C:\ngrok\`**
   (Créez le dossier `C:\ngrok\` s'il n'existe pas)

### **Étape 2 : Créer un compte Ngrok gratuit**

1. Allez sur : **https://dashboard.ngrok.com/signup**
2. Créez un compte gratuit (avec email ou Google)
3. Une fois connecté, allez sur : **https://dashboard.ngrok.com/get-started/your-authtoken**
4. Copiez votre **token d'authentification** (une longue chaîne de caractères)

### **Étape 3 : Configurer Ngrok**

1. Ouvrez **l'Invite de commandes** (CMD)
2. Tapez : `cd C:\ngrok`
3. Tapez : `ngrok config add-authtoken VOTRE_TOKEN`
   (Remplacez VOTRE_TOKEN par le token copié à l'étape 2)
4. Appuyez sur Entrée

✅ **Ngrok est maintenant installé et configuré !**

---

## 🚀 Utilisation quotidienne (après installation)

### **Lancer votre CRM avec accès distant**

1. Double-cliquez sur le fichier : **`LANCER_CRM_NGROK.bat`**
2. Trois fenêtres vont s'ouvrir :
   - Backend (serveur)
   - Frontend (interface)
   - Ngrok (tunnel)
3. Attendez **15-20 secondes**
4. Une fenêtre Ngrok affichera une URL comme :
   ```
   Forwarding: https://abc123.ngrok.io -> http://localhost:3000
   ```

### **Accéder depuis votre tablette/iPad**

1. Notez l'URL affichée (ex: `https://abc123.ngrok.io`)
2. Sur votre tablette, ouvrez **Safari** ou **Chrome**
3. Tapez l'URL Ngrok (ex: `https://abc123.ngrok.io`)
4. **IMPORTANT** : Cliquez sur **"Visit Site"** si Ngrok affiche un avertissement
5. Entrez le mot de passe : **`Bestbuy1`**
6. Utilisez votre CRM ! 🎉

---

## 🛑 Arrêter le CRM

Pour arrêter le CRM :
1. Fermez les 3 fenêtres (Backend, Frontend, Ngrok)
2. C'est tout !

---

## ⚠️ Informations importantes

### **🔒 Sécurité**

- ✅ L'URL Ngrok est **sécurisée** (HTTPS)
- ✅ Votre CRM est **protégé par mot de passe**
- ⚠️ Ne partagez **jamais** votre URL Ngrok publiquement
- ⚠️ L'URL change **à chaque lancement** (version gratuite)

### **🆓 Limites du compte gratuit Ngrok**

- ✅ Accès illimité depuis n'importe où
- ✅ HTTPS sécurisé
- ⚠️ URL change à chaque redémarrage
- ⚠️ Ngrok affiche un avertissement avant d'accéder (cliquez "Visit Site")
- ⚠️ Maximum 20 connexions simultanées (largement suffisant)

### **💡 URL qui change ?**

L'URL Ngrok change à chaque fois que vous relancez le CRM. C'est normal avec la version gratuite.

**Solutions :**
1. **Notez la nouvelle URL à chaque lancement**
2. **Envoyez-vous l'URL par email/SMS** pour l'avoir sur votre tablette
3. **Gardez le CRM allumé toute la journée** (l'URL reste la même)
4. **Version payante Ngrok** (8$/mois) = URL fixe personnalisée

---

## 📱 Ajouter un raccourci sur iPad (après chaque lancement)

1. Ouvrez Safari sur l'iPad
2. Allez sur votre URL Ngrok (ex: `https://abc123.ngrok.io`)
3. Cliquez sur "Visit Site" si nécessaire
4. Appuyez sur le bouton **Partager** (carré avec flèche)
5. Choisissez **"Sur l'écran d'accueil"**
6. Nommez-le "CRM" et appuyez sur **"Ajouter"**
7. Vous avez maintenant une icône CRM sur votre iPad

Note : Vous devrez refaire cette manipulation à chaque nouveau lancement car l'URL change.

---

## 🔄 Workflow typique

**Le matin au travail :**
1. Lancez `LANCER_CRM_NGROK.bat` sur votre PC à la maison
2. Notez l'URL Ngrok affichée
3. Envoyez-vous cette URL par email ou SMS
4. Sur votre tablette au travail, ouvrez l'URL
5. Travaillez sur votre CRM toute la journée

**Le soir :**
1. Fermez les 3 fenêtres sur votre PC
2. Ou laissez-les ouvertes pour le lendemain (même URL)

---

## ⚠️ Problèmes courants

### **"This site can't be reached" ou "ERR_CONNECTION_REFUSED"**

Le CRM n'est pas démarré sur votre PC :
- Vérifiez que `LANCER_CRM_NGROK.bat` est lancé sur votre PC
- Vérifiez que les 3 fenêtres sont ouvertes
- Relancez si nécessaire

### **Ngrok affiche "Tunnel not found"**

Votre session Ngrok a expiré (après 2h d'inactivité) :
- Fermez tout et relancez `LANCER_CRM_NGROK.bat`
- Notez la nouvelle URL

### **"Failed to validate your authtoken"**

Le token Ngrok n'est pas configuré :
- Répétez l'Étape 3 de l'installation
- Vérifiez que vous avez copié le token complet

### **Le PC doit rester allumé ?**

**OUI** - Le PC qui exécute le CRM doit rester allumé et connecté à internet :
- Le PC héberge votre CRM
- Ngrok crée un tunnel vers votre PC
- Si vous éteignez le PC, le CRM n'est plus accessible

**Astuce :** Configurez votre PC pour qu'il ne se mette pas en veille :
1. Paramètres Windows → Système → Alimentation et batterie
2. Écran et mise en veille → "Jamais"

---

## 💰 Passer à Ngrok payant (optionnel)

Si vous voulez une URL fixe qui ne change jamais :

1. Allez sur : **https://dashboard.ngrok.com/billing**
2. Souscrivez au plan "Personal" (8$/mois)
3. Vous aurez une URL fixe comme : `https://moncrm.ngrok.io`
4. Plus besoin de noter l'URL à chaque fois !

---

## 🆘 Besoin d'aide ?

Si ça ne fonctionne toujours pas :
1. Vérifiez que Ngrok est installé dans `C:\ngrok\`
2. Vérifiez que le token est configuré
3. Vérifiez que votre PC a accès à internet
4. Essayez de redémarrer votre PC
5. Vérifiez que les ports 3000 et 5000 ne sont pas bloqués par un pare-feu

---

## 📊 Comparaison : Wi-Fi local vs Ngrok

| Critère | Wi-Fi local | Ngrok |
|---------|-------------|-------|
| **Coût** | Gratuit | Gratuit (URL change) ou 8$/mois (URL fixe) |
| **Accès distant** | ❌ Non | ✅ Oui |
| **Configuration** | Simple | Moyenne |
| **Sécurité** | Réseau privé | HTTPS + Mot de passe |
| **PC allumé ?** | Oui | Oui |
| **URL fixe** | Oui (IP locale) | Non (gratuit) / Oui (payant) |

---

## ✅ Vous êtes prêt !

Vous pouvez maintenant accéder à votre CRM depuis :
- ✅ Votre tablette au travail
- ✅ Votre PC à la maison
- ✅ Votre téléphone
- ✅ N'importe où avec internet

Lancez simplement `LANCER_CRM_NGROK.bat` et notez l'URL affichée !
