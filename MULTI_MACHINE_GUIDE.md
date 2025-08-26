# Multi-Machine Development Guide - Locals.vn

## 🎯 **Real-Time Code Sync Between Machines**

### **Auto-sync system for seamless development across multiple machines**

## **📋 Setup Instructions:**

### **Máy A (Primary - Code & Push):**
```powershell
# 1. Clone repository (if not already done)
git clone https://github.com/Localsvietnam/locals-vn.git
cd locals-vn

# 2. Install dependencies
npm install
cd apps/frontend && npm install && cd ../..
cd apps/backend && npm install && cd ../..

# 3. Code normally in Cursor
# 4. When done coding, push changes:
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1
# Choose option 3 to push changes
```

### **Máy B (Secondary - Auto-Pull):**
```powershell
# 1. Clone repository
git clone https://github.com/Localsvietnam/locals-vn.git
cd locals-vn

# 2. Install dependencies
npm install
cd apps/frontend && npm install && cd ../..
cd apps/backend && npm install && cd ../..

# 3. Start auto-pull (runs in background)
powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1
```

## **🔄 Available Scripts:**

### **`scripts/auto-pull.ps1`** - Auto-sync from remote
- ✅ **Automatically pulls** changes every 30 seconds
- ✅ **Stashes local changes** to avoid conflicts
- ✅ **Shows sync status** and recent commits
- ✅ **Runs in background** - set and forget
- ✅ **Safe for system** - no auto-startup

### **`scripts/manual-sync.ps1`** - Manual sync control
- 📋 **Check status** - see what's changed
- 📥 **Pull changes** - get latest from remote
- 📤 **Push changes** - send local changes to remote
- 🔄 **Sync both ways** - complete synchronization

### **`scripts/check-sync.ps1`** - Quick status check
- ⚡ **Fast status check** - see sync state
- 📊 **Current commit** - what version you're on
- 📝 **Local changes** - what you've modified
- 🔄 **Remote status** - behind/ahead count

## **🚀 Workflow:**

### **Daily Development:**
1. **Máy A**: Code in Cursor → Push when done
2. **Máy B**: Auto-pull running → Always up to date
3. **Switch machines**: Code seamlessly continues

### **When to use each script:**

#### **Máy A (Primary):**
```powershell
# After coding session
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1
# Choose option 3 to push changes
```

#### **Máy B (Secondary):**
```powershell
# Start auto-pull once, runs continuously
powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1

# Check status anytime
powershell -ExecutionPolicy Bypass -File scripts/check-sync.ps1
```

## **⚡ Features:**

### **Auto-Pull Benefits:**
- ✅ **Real-time sync** - changes appear in 30 seconds
- ✅ **Conflict prevention** - stashes local changes
- ✅ **Background operation** - doesn't interrupt work
- ✅ **Status monitoring** - shows what's happening
- ✅ **Safe operation** - no system interference

### **Manual Sync Benefits:**
- ✅ **Full control** - you decide when to sync
- ✅ **Conflict resolution** - handle conflicts manually
- ✅ **Selective sync** - choose what to push/pull
- ✅ **Status overview** - see everything at once

## **🔧 Server Management:**

### **Start server (when needed):**
```powershell
npm run dev
```

### **Stop auto-pull:**
```powershell
# Press Ctrl+C in the auto-pull window
# Or close the PowerShell window
```

## **📝 Best Practices:**

1. **Máy A**: Always push after coding session
2. **Máy B**: Keep auto-pull running
3. **Both**: Use check-sync to verify status
4. **Conflicts**: Resolve manually if they occur
5. **Server**: Start only when needed

## **🛡️ Safety Features:**

- ✅ **No auto-startup** - server only runs when you start it
- ✅ **No system interference** - only syncs code
- ✅ **Conflict protection** - stashes local changes
- ✅ **Manual control** - you control all operations
- ✅ **Status visibility** - always know what's happening

## **📊 Monitoring:**

### **Check sync status:**
```powershell
powershell -ExecutionPolicy Bypass -File scripts/check-sync.ps1
```

### **View recent commits:**
```powershell
git log --oneline -10
```

### **Check local changes:**
```powershell
git status
```

**Repository: https://github.com/Localsvietnam/locals-vn**

---

## **🎉 Ready for Multi-Machine Development!**

Your setup is now complete for seamless development across multiple machines with real-time code synchronization.
