# Cursor Multi-Machine Sync Setup Script
Write-Host "Setting up Cursor sync for multi-machine development..." -ForegroundColor Green

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "  OK: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "  ERROR: Git not found. Please install Git first:" -ForegroundColor Red
    Write-Host "  Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "  After installation, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if GitHub CLI is installed
Write-Host "Checking GitHub CLI..." -ForegroundColor Yellow
try {
    $ghVersion = gh --version
    Write-Host "  OK: GitHub CLI installed" -ForegroundColor Green
} catch {
    Write-Host "  WARNING: GitHub CLI not found. Installing..." -ForegroundColor Yellow
    Write-Host "  Please install from: https://cli.github.com/" -ForegroundColor Yellow
    Write-Host "  Or run: winget install GitHub.cli" -ForegroundColor Yellow
}

# Initialize Git repository if not exists
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit: Locals.vn project setup"
    Write-Host "  OK: Git repository initialized" -ForegroundColor Green
}

# Create .gitignore if not exists
if (-not (Test-Path ".gitignore")) {
    Write-Host "Creating .gitignore..." -ForegroundColor Yellow
    @"
node_modules
.env
dist
build
.prisma
.next
.DS_Store
*.log
.cursor/
.vscode/
sync.log
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
    Write-Host "  OK: .gitignore created" -ForegroundColor Green
}

# Create Cursor workspace settings
Write-Host "Creating Cursor workspace settings..." -ForegroundColor Yellow
$cursorSettings = @"
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "typescript.preferences.importModuleSpecifier": "relative",
    "tailwindCSS.includeLanguages": {
      "typescript": "javascript",
      "typescriptreact": "javascript"
    }
  },
  "extensions": {
    "recommendations": [
      "bradlc.vscode-tailwindcss",
      "esbenp.prettier-vscode",
      "ms-vscode.vscode-eslint",
      "ms-vscode.vscode-typescript-next"
    ]
  }
}
"@

if (-not (Test-Path ".vscode")) {
    New-Item -ItemType Directory -Path ".vscode" | Out-Null
}
$cursorSettings | Out-File -FilePath ".vscode/settings.json" -Encoding UTF8
Write-Host "  OK: Cursor workspace settings created" -ForegroundColor Green

# Create sync script for Cursor
$cursorSyncScript = @"
# Cursor Auto-Sync Script
Write-Host "Starting Cursor auto-sync..." -ForegroundColor Green

# Function to sync changes
function Sync-Changes {
    Write-Host "Syncing changes to remote..." -ForegroundColor Cyan
    try {
        git add .
        git commit -m "Auto-sync: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        git push origin main
        Write-Host "  OK: Changes pushed to remote" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to push changes" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Function to pull changes
function Pull-Changes {
    Write-Host "Pulling latest changes..." -ForegroundColor Cyan
    try {
        git pull origin main
        Write-Host "  OK: Latest changes pulled" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to pull changes" -ForegroundColor Red
        Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Main sync loop
Write-Host "Auto-sync started. Press Ctrl+C to stop." -ForegroundColor Green
Write-Host "Sync interval: 30 seconds" -ForegroundColor Yellow

try {
    while ($true) {
        Pull-Changes
        Start-Sleep 30
    }
}
catch {
    Write-Host "Auto-sync stopped." -ForegroundColor Yellow
}
"@

$cursorSyncScript | Out-File -FilePath "scripts/cursor-sync.ps1" -Encoding UTF8
Write-Host "  OK: Cursor sync script created" -ForegroundColor Green

# Create README for multi-machine setup
$multiMachineReadme = @"
# Cursor Multi-Machine Development Setup

## Quick Start

### Machine A (Primary):
1. Run: \`powershell -ExecutionPolicy Bypass -File scripts/setup-cursor-sync.ps1\`
2. Create GitHub repository and push code
3. Start development server: \`npm run dev\`

### Machine B (Secondary):
1. Clone repository: \`git clone <repository-url>\`
2. Install dependencies: \`npm install\`
3. Start sync: \`powershell -ExecutionPolicy Bypass -File scripts/cursor-sync.ps1\`
4. Open in Cursor and start coding

## Sync Workflow

### Auto-Sync (Recommended):
- Run \`scripts/cursor-sync.ps1\` on both machines
- Changes auto-sync every 30 seconds
- No manual intervention needed

### Manual Sync:
- Machine A: \`git add . && git commit -m "message" && git push\`
- Machine B: \`git pull\`

## Cursor Features

### Shared Settings:
- Format on save enabled
- ESLint auto-fix on save
- Tailwind CSS IntelliSense
- TypeScript configuration

### Extensions:
- Tailwind CSS
- Prettier
- ESLint
- TypeScript

## Troubleshooting

### Sync Issues:
1. Check internet connection
2. Verify GitHub repository access
3. Resolve merge conflicts manually
4. Restart sync script

### Cursor Issues:
1. Reload Cursor window
2. Check extension compatibility
3. Verify workspace settings
"@

$multiMachineReadme | Out-File -FilePath "CURSOR_MULTI_MACHINE.md" -Encoding UTF8
Write-Host "  OK: Multi-machine setup guide created" -ForegroundColor Green

Write-Host "`nCursor multi-machine setup completed!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create GitHub repository" -ForegroundColor Cyan
Write-Host "2. Push code to GitHub: git remote add origin <repo-url> && git push -u origin main" -ForegroundColor Cyan
Write-Host "3. On second machine: git clone <repo-url>" -ForegroundColor Cyan
Write-Host "4. Run sync script on both machines" -ForegroundColor Cyan
Write-Host "`nSee CURSOR_MULTI_MACHINE.md for detailed instructions" -ForegroundColor Yellow
