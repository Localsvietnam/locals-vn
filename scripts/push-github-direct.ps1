# Direct GitHub Push Script
Write-Host "Starting direct GitHub push process..." -ForegroundColor Green

# Set Git path
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Function to run Git commands
function Invoke-GitCommand {
    param([string]$Arguments)
    try {
        $result = & $gitPath $Arguments.Split(' ')
        return $result
    }
    catch {
        Write-Host "  ERROR: Git command failed" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        return $null
    }
}

# Function to setup Git repository
function Setup-GitRepository {
    Write-Host "Setting up Git repository..." -ForegroundColor Yellow
    
    # Initialize Git repository if not exists
    if (-not (Test-Path ".git")) {
        Write-Host "  Initializing Git repository..." -ForegroundColor Cyan
        Invoke-GitCommand "init"
    }
    
    # Configure Git user
    Write-Host "  Configuring Git user..." -ForegroundColor Cyan
    Invoke-GitCommand "config user.name `"Locals Vietnam`""
    Invoke-GitCommand "config user.email `"info@locals.vn`""
    
    # Add all files
    Write-Host "  Adding files to Git..." -ForegroundColor Cyan
    Invoke-GitCommand "add ."
    
    # Check if there are changes to commit
    $status = Invoke-GitCommand "status --porcelain"
    if ($status) {
        Write-Host "  Committing changes..." -ForegroundColor Cyan
        Invoke-GitCommand "commit -m `"Initial commit: Locals.vn e-commerce platform setup`""
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
    $remotes = Invoke-GitCommand "remote -v"
    if ($remotes -match "origin") {
        Write-Host "  Remote origin already exists" -ForegroundColor Yellow
    } else {
        Write-Host "  Adding remote origin..." -ForegroundColor Cyan
        Invoke-GitCommand "remote add origin $repoUrl"
    }
    
    # Push to GitHub
    Write-Host "  Pushing to GitHub..." -ForegroundColor Cyan
    try {
        Invoke-GitCommand "push -u origin main"
        Write-Host "  OK: Code pushed to GitHub successfully!" -ForegroundColor Green
        Write-Host "  Repository: $repoUrl" -ForegroundColor Cyan
        return $true
    }
    catch {
        Write-Host "  ERROR: Failed to push to GitHub" -ForegroundColor Red
        Write-Host "  Please check your GitHub credentials and repository access" -ForegroundColor Yellow
        return $false
    }
}

# Main execution
Write-Host "Step 1: Verifying Git installation..." -ForegroundColor Yellow
$gitVersion = Invoke-GitCommand "--version"
if ($gitVersion) {
    Write-Host "  OK: $gitVersion" -ForegroundColor Green
} else {
    Write-Host "  ERROR: Git not found" -ForegroundColor Red
    exit 1
}

Write-Host "Step 2: Setting up Git repository..." -ForegroundColor Yellow
Setup-GitRepository

Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
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
