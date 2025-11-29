@echo off
echo ==========================================
echo      NyayaSahayak Mobile Updater
echo ==========================================
echo.

echo [1/3] Building Web Assets...
call npm run build
if %errorlevel% neq 0 (
    echo Build Failed!
    pause
    exit /b %errorlevel%
)

echo.
echo [2/3] Syncing with Android...
call npx cap sync
if %errorlevel% neq 0 (
    echo Sync Failed! Make sure you are in the project root.
    pause
    exit /b %errorlevel%
)

echo.
echo [3/3] Opening Android Studio...
echo (Please go to Build > Build APK once it opens)
call npx cap open android

echo.
echo ==========================================
echo      Ready for APK Build!
echo ==========================================
pause
