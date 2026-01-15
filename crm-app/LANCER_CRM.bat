@echo off
echo ========================================
echo   Demarrage du CRM Backend
echo ========================================
echo.

cd /d "%~dp0backend"
start cmd /k "npm start"

echo Backend demarre !
echo.
echo Attendez 5 secondes...
timeout /t 5 /nobreak >nul

echo ========================================
echo   Demarrage du CRM Frontend
echo ========================================
echo.

cd /d "%~dp0frontend"
start cmd /k "npm start"

echo.
echo ========================================
echo   CRM DEMARRE !
echo ========================================
echo.
echo Sur votre PC : http://localhost:3000
echo.
echo Sur votre iPad :
echo 1. Trouvez votre IP : ipconfig
echo 2. Utilisez : http://VOTRE_IP:3000
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
