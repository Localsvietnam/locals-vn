@echo off
title Locals.vn Quick Start
echo Starting Locals.vn in background...

REM Kill existing processes
taskkill /f /im node.exe >nul 2>&1

REM Start backend in minimized window
start /min "Backend" cmd /c "cd /d %~dp0 && node apps\backend\src\app-simple.js"

REM Wait 3 seconds
timeout /t 3 /nobreak >nul

REM Start frontend in minimized window  
start /min "Frontend" cmd /c "cd /d %~dp0\apps\frontend && npm run dev"

REM Wait 5 seconds
timeout /t 5 /nobreak >nul

REM Open browser automatically
start http://localhost:3000

echo.
echo Locals.vn started successfully!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:4000
echo.
echo Press any key to close this window...
pause >nul
