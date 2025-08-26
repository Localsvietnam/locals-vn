# Cursor Extensions Setup Script
Write-Host "Setting up Cursor extensions for Locals.vn development..." -ForegroundColor Green

# List of required extensions
$extensions = @(
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode", 
    "ms-vscode.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-css-peek",
    "ms-vscode.vscode-html-css-support",
    "ms-vscode.vscode-emmet",
    "ms-vscode.vscode-color-highlight",
    "ms-vscode.vscode-bracket-pair-colorizer-2"
)

Write-Host "Installing Cursor extensions..." -ForegroundColor Yellow

foreach ($extension in $extensions) {
    Write-Host "Installing: $extension" -ForegroundColor Cyan
    try {
        code --install-extension $extension
        Write-Host "  OK: $extension installed" -ForegroundColor Green
    }
    catch {
        Write-Host "  WARNING: Failed to install $extension" -ForegroundColor Yellow
        Write-Host "  You may need to install it manually from Cursor marketplace" -ForegroundColor Yellow
    }
}

# Create Cursor settings for the project
Write-Host "Creating Cursor project settings..." -ForegroundColor Yellow

$cursorProjectSettings = @"
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true,
    "**/build": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.next": true,
    "**/build": true
  }
}
"@

if (-not (Test-Path ".vscode")) {
    New-Item -ItemType Directory -Path ".vscode" | Out-Null
}

$cursorProjectSettings | Out-File -FilePath ".vscode/settings.json" -Encoding UTF8
Write-Host "  OK: Cursor project settings created" -ForegroundColor Green

# Create launch configuration for debugging
$launchConfig = @"
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/apps/frontend/node_modules/next/dist/bin/next",
      "args": ["dev"],
      "cwd": "\${workspaceFolder}/apps/frontend",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "\${workspaceFolder}/apps/frontend"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/apps/frontend/node_modules/next/dist/bin/next",
      "args": ["dev"],
      "cwd": "\${workspaceFolder}/apps/frontend",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
"@

$launchConfig | Out-File -FilePath ".vscode/launch.json" -Encoding UTF8
Write-Host "  OK: Debug configuration created" -ForegroundColor Green

Write-Host "`nCursor extensions setup completed!" -ForegroundColor Green
Write-Host "Restart Cursor to apply all settings and extensions." -ForegroundColor Yellow
