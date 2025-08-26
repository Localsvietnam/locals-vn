@echo off
echo Starting Locals.vn Application...
echo.

REM Check if PostgreSQL is running
echo Checking PostgreSQL service...
sc query postgresql-x64-17 | find "RUNNING" >nul
if errorlevel 1 (
    echo Starting PostgreSQL service...
    net start postgresql-x64-17
    timeout /t 3 /nobreak >nul
)

REM Kill existing processes on ports 3000 and 4000
echo Checking port availability...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4000') do taskkill /f /pid %%a >nul 2>&1

REM Clear Next.js cache
echo Clearing Next.js cache...
if exist "apps\frontend\.next" rmdir /s /q "apps\frontend\.next"

REM Start backend
echo Starting backend server...
start "Backend Server" cmd /k "node apps\backend\src\app-simple.js"

REM Wait a moment
timeout /t 3 /nobreak >nul

REM Start frontend
echo Starting frontend server...
start "Frontend Server" cmd /k "cd apps\frontend && npm run dev"

REM Wait for servers to start
echo Waiting for servers to start...
timeout /t 5 /nobreak >nul

echo.
echo Locals.vn Application Started!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:4000
echo API: http://localhost:4000/api/products
echo.
pause
