# 🏠 Guide : Utiliser votre CRM en local (PC + iPad)

## ✅ Prérequis

- ✅ PC Windows connecté au Wi-Fi
- ✅ iPad connecté au **même Wi-Fi**
- ✅ Node.js installé sur le PC

---

## 🚀 Lancement en 3 clics

### **Étape 1 : Lancer le CRM**

1. Double-cliquez sur le fichier : **`LANCER_CRM.bat`**
2. Deux fenêtres noires vont s'ouvrir
3. Attendez 10-15 secondes
4. Votre navigateur s'ouvrira automatiquement avec le CRM

### **Étape 2 : Trouver votre adresse IP**

1. Double-cliquez sur le fichier : **`VOIR_MON_IP.bat`**
2. Notez le numéro affiché (ex: `192.168.1.100`)

### **Étape 3 : Accéder depuis l'iPad**

1. Sur votre iPad, ouvrez **Safari**
2. Tapez : `http://192.168.1.100:3000`
   (Remplacez par votre IP)
3. Appuyez sur Entrée
4. Entrez le mot de passe : **`Bestbuy1`**
5. Utilisez votre CRM ! 🎉

---

## 🛑 Arrêter le CRM

Pour arrêter le CRM :
1. Fermez les 2 fenêtres noires (backend et frontend)
2. C'est tout !

---

## ⚠️ Problèmes courants

### **"Impossible d'accéder au site" sur l'iPad**

**Solution 1 : Vérifier le Wi-Fi**
- PC et iPad doivent être sur le **même Wi-Fi**
- Désactivez les données mobiles sur l'iPad

**Solution 2 : Autoriser le pare-feu**
1. Windows → Rechercher "Pare-feu"
2. "Autoriser une application"
3. Cochez "Node.js"
4. Cliquez OK

**Solution 3 : Vérifier l'adresse IP**
- Relancez `VOIR_MON_IP.bat` pour confirmer l'IP
- L'IP peut changer si vous redémarrez le PC

### **"ERR_CONNECTION_REFUSED"**

Le CRM n'est pas démarré :
- Relancez `LANCER_CRM.bat`
- Attendez 15 secondes
- Réessayez sur l'iPad

### **"Port 3000 already in use"**

Le CRM est déjà lancé :
- Fermez toutes les fenêtres noires
- Attendez 5 secondes
- Relancez `LANCER_CRM.bat`

---

## 📱 Ajouter un raccourci sur l'iPad

Pour accéder plus facilement :

1. Ouvrez Safari sur l'iPad
2. Allez sur votre CRM (`http://votre-ip:3000`)
3. Appuyez sur le bouton **Partager** (carré avec flèche)
4. Faites défiler et choisissez **"Sur l'écran d'accueil"**
5. Nommez-le "CRM" et appuyez sur **"Ajouter"**
6. Vous avez maintenant une icône CRM sur votre iPad ! 📱

---

## 💡 Conseils

- **Gardez l'adresse IP notée** quelque part (elle ne change pas souvent)
- **Laissez les fenêtres noires ouvertes** tant que vous utilisez le CRM
- **Ne fermez pas votre PC** pendant l'utilisation sur iPad
- **Utilisez uniquement sur votre Wi-Fi** (ne partagez pas l'URL)

---

## 🆘 Besoin d'aide ?

Si ça ne fonctionne toujours pas :
1. Vérifiez que les 2 appareils sont sur le même Wi-Fi
2. Redémarrez le PC et l'iPad
3. Désactivez temporairement le pare-feu Windows pour tester
