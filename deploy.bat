@echo off
echo ==========================================
echo      NyayaSahayak Web Deployer
echo ==========================================
echo.
echo This will push your latest changes to GitHub.
echo Vercel will then automatically update your live website.
echo.

set /p commitMsg="Enter a description of your changes: "

echo.
echo [1/3] Adding files...
git add .

echo.
echo [2/3] Committing changes...
git commit -m "%commitMsg%"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ==========================================
echo      Success! 🚀
echo      Your app is updating on Vercel...
echo ==========================================
pause
