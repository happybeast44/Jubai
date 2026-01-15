@echo off
echo ========================================
echo   Demarrage du CRM avec Ngrok
echo ========================================
echo.

REM Verifier si les dependances sont installees
if not exist "%~dp0backend\node_modules\" (
    echo ATTENTION : Les dependances ne sont pas installees !
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
echo   1/3 - Demarrage du Backend
echo ========================================
echo.

cd /d "%~dp0backend"
start "CRM Backend" cmd /k "npm start"

echo Backend demarre !
echo.
echo Attente 5 secondes...
timeout /t 5 /nobreak >nul

echo ========================================
echo   2/3 - Demarrage du Frontend
echo ========================================
echo.

cd /d "%~dp0frontend"
start "CRM Frontend" cmd /k "npm start"

echo Frontend demarre !
echo.
echo Attente 10 secondes...
timeout /t 10 /nobreak >nul

echo ========================================
echo   3/3 - Demarrage du tunnel Ngrok
echo ========================================
echo.

start "Ngrok Tunnel" cmd /k "C:\ngrok\ngrok.exe http 3000"

echo.
echo ========================================
echo   CRM PRET AVEC ACCES DISTANT !
echo ========================================
echo.
echo INSTRUCTIONS :
echo.
echo 1. Une fenetre Ngrok va s'ouvrir
echo 2. Cherchez la ligne "Forwarding"
echo 3. Notez l'URL affichee (ex: https://abc123.ngrok.io)
echo 4. Sur votre tablette/iPad :
echo    - Ouvrez Safari ou Chrome
echo    - Tapez l'URL Ngrok
echo    - Cliquez "Visit Site" si Ngrok affiche un avertissement
echo    - Entrez le mot de passe : Bestbuy1
echo.
echo SUR VOTRE PC :
echo - Accedez via : http://localhost:3000
echo.
echo DEPUIS N'IMPORTE OU :
echo - Utilisez l'URL Ngrok affichee dans la fenetre Ngrok
echo.
echo IMPORTANT :
echo - Ne fermez PAS les 3 fenetres tant que vous utilisez le CRM
echo - L'URL Ngrok change a chaque redemarrage (version gratuite)
echo - Notez bien l'URL pour y acceder depuis votre tablette
echo.
echo ========================================
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
