@echo off
echo ========================================
echo   Installation des dependances du CRM
echo ========================================
echo.
echo Cette operation peut prendre 2-5 minutes.
echo Veuillez patienter...
echo.

echo ========================================
echo   1/2 - Installation Backend
echo ========================================
echo.

cd /d "%~dp0backend"
echo Installation des modules backend (express, cors, body-parser)...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERREUR : L'installation du backend a echoue !
    echo Verifiez que Node.js est installe correctement.
    pause
    exit /b 1
)

echo.
echo Backend installe avec succes !
echo.

echo ========================================
echo   2/2 - Installation Frontend
echo ========================================
echo.

cd /d "%~dp0frontend"
echo Installation des modules frontend (react, react-scripts, etc.)...
echo Cette etape peut prendre plusieurs minutes...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERREUR : L'installation du frontend a echoue !
    echo Verifiez que Node.js est installe correctement.
    pause
    exit /b 1
)

echo.
echo Frontend installe avec succes !
echo.

echo ========================================
echo   INSTALLATION TERMINEE !
echo ========================================
echo.
echo Toutes les dependances ont ete installees avec succes.
echo Vous pouvez maintenant lancer votre CRM avec LANCER_CRM.bat
echo.
pause
