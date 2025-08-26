# Locals.vn Setup Script
Write-Host "Setting up Locals.vn project..." -ForegroundColor Green

# Check if Node.js is installed
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "  OK: Node.js $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is available
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "  OK: npm $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: npm not found." -ForegroundColor Red
    exit 1
}

# Check project structure
Write-Host "Checking project structure..." -ForegroundColor Yellow
$requiredDirs = @("apps/frontend", "apps/backend", "prisma", "scripts")
$missingDirs = @()

foreach ($dir in $requiredDirs) {
    if (Test-Path $dir) {
        Write-Host "  OK: $dir" -ForegroundColor Green
    } else {
        Write-Host "  MISSING: $dir" -ForegroundColor Red
        $missingDirs += $dir
    }
}

if ($missingDirs.Count -gt 0) {
    Write-Host "  ERROR: Missing required directories. Please check project structure." -ForegroundColor Red
    Write-Host "  Missing: $($missingDirs -join ', ')" -ForegroundColor Red
    exit 1
}

# Install root dependencies
Write-Host "Installing root dependencies..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "  OK: Root dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Failed to install root dependencies" -ForegroundColor Red
    Write-Host "  Try running: npm install manually" -ForegroundColor Yellow
}

# Install frontend dependencies
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
try {
    Set-Location apps/frontend
    npm install
    Set-Location ../..
    Write-Host "  OK: Frontend dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Failed to install frontend dependencies" -ForegroundColor Red
    Write-Host "  Try running: Set-Location apps/frontend && npm install manually" -ForegroundColor Yellow
    Set-Location ../..
}

# Install backend dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
try {
    Set-Location apps/backend
    npm install
    Set-Location ../..
    Write-Host "  OK: Backend dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Failed to install backend dependencies" -ForegroundColor Red
    Write-Host "  Try running: Set-Location apps/backend && npm install manually" -ForegroundColor Yellow
    Set-Location ../..

    
}

# Generate Prisma client
Write-Host "Generating Prisma client..." -ForegroundColor Yellow
try {
    npx prisma generate
    Write-Host "  OK: Prisma client generated" -ForegroundColor Green
} catch {
    Write-Host "  WARNING: Failed to generate Prisma client" -ForegroundColor Yellow
    Write-Host "  This is normal if database is not set up yet" -ForegroundColor Yellow
    Write-Host "  Run: npx prisma generate manually after database setup" -ForegroundColor Yellow
}

# Check and create .env.example if missing
Write-Host "Checking .env.example..." -ForegroundColor Yellow
if (-not (Test-Path ".env.example")) {
    Write-Host "  Creating .env.example template..." -ForegroundColor Yellow
    @"
DATABASE_URL=postgresql://user:password@localhost:5432/localsvn?schema=public
JWT_SECRET=your-secret-here
NEXT_PUBLIC_API_URL=http://localhost:4000
"@ | Out-File -FilePath ".env.example" -Encoding UTF8
    Write-Host "  OK: .env.example created" -ForegroundColor Green
} else {
    Write-Host "  OK: .env.example exists" -ForegroundColor Green
}

# Check if .env exists
Write-Host "Checking environment file..." -ForegroundColor Yellow
if (Test-Path ".env") {
    Write-Host "  OK: .env file exists" -ForegroundColor Green
} else {
    Write-Host "  WARNING: .env file not found. Creating from template..." -ForegroundColor Yellow
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env" -ErrorAction SilentlyContinue
        if (Test-Path ".env") {
            Write-Host "  OK: .env file created from .env.example" -ForegroundColor Green
        } else {
            Write-Host "  ERROR: Could not create .env file" -ForegroundColor Red
        }
    } else {
        Write-Host "  WARNING: .env.example not found. Creating basic .env file..." -ForegroundColor Yellow
        @"
DATABASE_URL=postgresql://user:password@localhost:5432/localsvn?schema=public
JWT_SECRET=your-secret-here
NEXT_PUBLIC_API_URL=http://localhost:4000
"@ | Out-File -FilePath ".env" -Encoding UTF8
        Write-Host "  OK: Basic .env file created" -ForegroundColor Green
    }
}

# Final verification
Write-Host ""
Write-Host "Final verification..." -ForegroundColor Yellow

$verificationPassed = $true

# Check if node_modules exist (npm workspaces use root node_modules)
if (-not (Test-Path "node_modules")) {
    Write-Host "  WARNING: node_modules not found in root" -ForegroundColor Yellow
    $verificationPassed = $false
} else {
    Write-Host "  OK: Root node_modules found (npm workspaces)" -ForegroundColor Green
}

if (-not (Test-Path ".env")) {
    Write-Host "  WARNING: .env file not found" -ForegroundColor Yellow
    $verificationPassed = $false
}

if ($verificationPassed) {
    Write-Host "  OK: All verifications passed" -ForegroundColor Green
} else {
    Write-Host "  WARNING: Some verifications failed. Please check manually." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Setup completed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Install PostgreSQL or Docker Desktop" -ForegroundColor White
Write-Host "2. Update .env file with your database credentials" -ForegroundColor White
Write-Host "3. Run: npx prisma migrate dev --name init" -ForegroundColor White
Write-Host "4. Start development servers:" -ForegroundColor White
Write-Host "   - Frontend only: npm run dev:frontend" -ForegroundColor White
Write-Host "   - Backend only: npm run dev:backend:simple" -ForegroundColor White
Write-Host "   - Both: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Access URLs:" -ForegroundColor Cyan
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend: http://localhost:4000" -ForegroundColor White
Write-Host "  API Health: http://localhost:4000/health" -ForegroundColor White
