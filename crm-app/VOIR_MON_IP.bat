@echo off
echo ========================================
echo   ADRESSE IP DE VOTRE PC
echo ========================================
echo.
echo Cherchez "Adresse IPv4" ci-dessous :
echo.
ipconfig | findstr /i "IPv4"
echo.
echo ========================================
echo   UTILISATION
echo ========================================
echo.
echo Sur votre iPad, ouvrez Safari et tapez :
echo http://VOTRE_IP:3000
echo.
echo Remplacez VOTRE_IP par le numero ci-dessus
echo Exemple : http://192.168.1.100:3000
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
