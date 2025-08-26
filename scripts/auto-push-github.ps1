# Auto Push to GitHub Script
Write-Host "Starting automatic GitHub push process..." -ForegroundColor Green

# Function to check if Git is installed
function Test-GitInstalled {
    try {
        $gitVersion = git --version 2>$null
        if ($gitVersion) {
            Write-Host "  OK: Git is installed" -ForegroundColor Green
            return $true
        }
    }
    catch {
        Write-Host "  Git not found" -ForegroundColor Yellow
        return $false
    }
    return $false
}

# Function to install Git using winget
function Install-Git {
    Write-Host "Installing Git using winget..." -ForegroundColor Yellow
    try {
        winget install --id Git.Git -e --source winget
        Write-Host "  OK: Git installed successfully" -ForegroundColor Green
        Write-Host "  Please restart PowerShell and run this script again" -ForegroundColor Yellow
        return $true
    }
    catch {
        Write-Host "  ERROR: Failed to install Git via winget" -ForegroundColor Red
        Write-Host "  Please install Git manually from: https://git-scm.com/download/win" -ForegroundColor Yellow
        return $false
    }
}

# Function to setup Git repository
function Setup-GitRepository {
    Write-Host "Setting up Git repository..." -ForegroundColor Yellow
    
    # Initialize Git repository if not exists
    if (-not (Test-Path ".git")) {
        Write-Host "  Initializing Git repository..." -ForegroundColor Cyan
        git init
    }
    
    # Configure Git user
    Write-Host "  Configuring Git user..." -ForegroundColor Cyan
    git config user.name "Locals Vietnam"
    git config user.email "info@locals.vn"
    
    # Add all files
    Write-Host "  Adding files to Git..." -ForegroundColor Cyan
    git add .
    
    # Check if there are changes to commit
    $status = git status --porcelain
    if ($status) {
        Write-Host "  Committing changes..." -ForegroundColor Cyan
        git commit -m "Initial commit: Locals.vn e-commerce platform setup"
        Write-Host "  OK: Changes committed" -ForegroundColor Green
    } else {
        Write-Host "  No changes to commit" -ForegroundColor Yellow
    }
}

# Function to push to GitHub
function Push-ToGitHub {
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    
    $repoUrl = "https://github.com/Localsvietnam/locals-vn.git"
    
    # Check if remote exists
    $remotes = git remote -v
    if ($remotes -match "origin") {
        Write-Host "  Remote origin already exists" -ForegroundColor Yellow
    } else {
        Write-Host "  Adding remote origin..." -ForegroundColor Cyan
        git remote add origin $repoUrl
    }
    
    # Push to GitHub
    Write-Host "  Pushing to GitHub..." -ForegroundColor Cyan
    try {
        git push -u origin main
        Write-Host "  OK: Code pushed to GitHub successfully!" -ForegroundColor Green
        Write-Host "  Repository: $repoUrl" -ForegroundColor Cyan
        return $true
    }
    catch {
        Write-Host "  ERROR: Failed to push to GitHub" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "  Please check your GitHub credentials and repository access" -ForegroundColor Yellow
        return $false
    }
}

# Main execution
Write-Host "Step 1: Checking Git installation..." -ForegroundColor Yellow
if (-not (Test-GitInstalled)) {
    Write-Host "Step 2: Installing Git..." -ForegroundColor Yellow
    if (Install-Git) {
        Write-Host "Git installation completed. Please restart PowerShell and run this script again." -ForegroundColor Green
        exit 0
    } else {
        Write-Host "Failed to install Git. Please install manually." -ForegroundColor Red
        exit 1
    }
}

Write-Host "Step 3: Setting up Git repository..." -ForegroundColor Yellow
Setup-GitRepository

Write-Host "Step 4: Pushing to GitHub..." -ForegroundColor Yellow
if (Push-ToGitHub) {
    Write-Host "`n🎉 SUCCESS: Code has been pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/Localsvietnam/locals-vn" -ForegroundColor Cyan
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Verify code on GitHub" -ForegroundColor Cyan
    Write-Host "2. Setup multi-machine development" -ForegroundColor Cyan
    Write-Host "3. Run: powershell -ExecutionPolicy Bypass -File scripts/cursor-sync.ps1" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ FAILED: Could not push to GitHub" -ForegroundColor Red
    Write-Host "Please check your GitHub credentials and try again" -ForegroundColor Yellow
}
