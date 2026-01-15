@echo off
echo ========================================
echo   CRM avec Ngrok - Mode Production
echo ========================================
echo.

REM Verifier si les dependances sont installees
if not exist "%~dp0backend\node_modules\" (
    echo ATTENTION : Les dependances backend ne sont pas installees !
    echo.
    echo Voulez-vous les installer maintenant ?
    echo Cela prendra 2-5 minutes.
    echo.
    choice /C ON /M "Tapez O pour installer, N pour annuler"
    if errorlevel 2 (
        echo Installation annulee.
        pause
        exit
    )
    echo.
    echo Installation en cours...
    call "%~dp0INSTALLER_DEPENDANCES.bat"
    if %errorlevel% neq 0 (
        echo L'installation a echoue. Impossible de lancer le CRM.
        pause
        exit
    )
)

if not exist "%~dp0frontend\node_modules\" (
    echo ATTENTION : Les dependances frontend ne sont pas installees !
    echo.
    echo Installation en cours...
    call "%~dp0INSTALLER_DEPENDANCES.bat"
    if %errorlevel% neq 0 (
        echo L'installation a echoue. Impossible de lancer le CRM.
        pause
        exit
    )
)

REM Verifier que Ngrok est installe
if not exist "C:\ngrok\ngrok.exe" (
    echo ERREUR : Ngrok n'est pas installe !
    echo.
    echo Veuillez installer Ngrok :
    echo 1. Telecharger : https://ngrok.com/download
    echo 2. Extraire ngrok.exe dans C:\ngrok\
    echo 3. Configurer le token : ngrok config add-authtoken VOTRE_TOKEN
    echo.
    echo Consultez GUIDE_NGROK_ACCES_DISTANT.md pour plus de details.
    echo.
    pause
    exit
)

echo ========================================
echo   1/3 - Build du Frontend
echo ========================================
echo.
echo Construction du frontend en mode production...
echo Cela peut prendre 1-2 minutes...
echo.

cd /d "%~dp0frontend"
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ERREUR : Le build du frontend a echoue !
    pause
    exit
)

echo.
echo Frontend build avec succes !
echo.

echo ========================================
echo   2/3 - Demarrage du Backend
echo ========================================
echo.

cd /d "%~dp0backend"
start "CRM Backend + Frontend" cmd /k "npm start"

echo Backend demarre !
echo.
echo Attendez 5 secondes...
timeout /t 5 /nobreak >nul

echo ========================================
echo   3/3 - Demarrage du tunnel Ngrok
echo ========================================
echo.

start "Ngrok Tunnel" cmd /k "C:\ngrok\ngrok.exe http 5000"

echo.
echo ========================================
echo   CRM PRET AVEC ACCES DISTANT !
echo ========================================
echo.
echo INSTRUCTIONS :
echo.
echo 1. Une fenetre Ngrok va s'ouvrir
echo 2. Cherchez la ligne "Forwarding"
echo 3. Notez l'URL affichee (ex: https://abc123.ngrok-free.dev)
echo 4. Cette URL fonctionne :
echo    - Sur votre PC (meme URL)
echo    - Sur votre tablette/iPad (meme URL)
echo    - Depuis n'importe ou avec internet
echo.
echo 5. Ouvrez l'URL dans votre navigateur
echo 6. Cliquez "Visit Site" si Ngrok affiche un avertissement
echo 7. Entrez le mot de passe : Bestbuy1
echo.
echo IMPORTANT :
echo - Ne fermez PAS les 2 fenetres tant que vous utilisez le CRM
echo - L'URL Ngrok change a chaque redemarrage (version gratuite)
echo - Notez bien l'URL pour y acceder depuis vos appareils
echo - Le PC doit rester allume pour que l'URL fonctionne
echo.
echo ========================================
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
