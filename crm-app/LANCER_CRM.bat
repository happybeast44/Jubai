@echo off
echo ========================================
echo   Demarrage du CRM
echo ========================================
echo.

REM Verifier si les dependances backend sont installees
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

REM Verifier si les dependances frontend sont installees
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

echo ========================================
echo   1/2 - Demarrage du Backend
echo ========================================
echo.

cd /d "%~dp0backend"
start "CRM Backend" cmd /k "npm start"

echo Backend demarre !
echo.
echo Attendez 5 secondes...
timeout /t 5 /nobreak >nul

echo ========================================
echo   2/2 - Demarrage du Frontend
echo ========================================
echo.

cd /d "%~dp0frontend"
start "CRM Frontend" cmd /k "npm start"

echo.
echo ========================================
echo   CRM DEMARRE !
echo ========================================
echo.
echo SUR VOTRE PC :
echo - Acces via : http://localhost:3000
echo - Mot de passe : Bestbuy1
echo.
echo SUR VOTRE IPAD (meme Wi-Fi) :
echo 1. Utilisez VOIR_MON_IP.bat pour trouver l'IP de votre PC
echo 2. Sur l'iPad, ouvrez : http://VOTRE_IP:3000
echo.
echo IMPORTANT :
echo - Ne fermez PAS les 2 fenetres tant que vous utilisez le CRM
echo - Pour arreter le CRM, fermez les 2 fenetres
echo.
echo Pour acceder depuis le TRAVAIL (autre reseau) :
echo - Consultez GUIDE_NGROK_ACCES_DISTANT.md
echo.
echo ========================================
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
