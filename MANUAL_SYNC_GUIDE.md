# Manual Sync Guide - Locals.vn

## 🎯 **Multi-Machine Development (Manual Control)**

### **Không có auto-startup, không can thiệp sâu vào máy**

## **📋 Cách sử dụng:**

### **Máy A (Primary):**
```powershell
# 1. Mở Cursor và code bình thường
# 2. Khi muốn sync, chạy:
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1

# 3. Chọn option 3 để push changes
```

### **Máy B (Secondary):**
```powershell
# 1. Clone repository
git clone https://github.com/Localsvietnam/locals-vn.git
cd locals-vn

# 2. Cài đặt dependencies
npm install
cd apps/frontend && npm install && cd ../..
cd apps/backend && npm install && cd ../..

# 3. Khi muốn sync, chạy:
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1

# 4. Chọn option 2 để pull changes
```

## **🔄 Manual Sync Options:**

### **Option 1: Check Status**
- Kiểm tra trạng thái local và remote
- Xem có changes nào chưa commit không
- Xem có updates từ remote không

### **Option 2: Pull Latest Changes**
- Lấy code mới nhất từ GitHub
- Dùng khi máy B muốn sync từ máy A

### **Option 3: Push Local Changes**
- Đẩy code local lên GitHub
- Dùng khi máy A muốn share code cho máy B

### **Option 4: Sync Both Ways**
- Pull và push trong một lần
- Dùng để đồng bộ hoàn toàn

## **⚡ Ưu điểm của Manual Sync:**

- ✅ **Không tự động khởi động server**
- ✅ **Không can thiệp sâu vào máy**
- ✅ **Người dùng kiểm soát hoàn toàn**
- ✅ **Không có background processes**
- ✅ **An toàn cho hệ thống**

## **🚀 Workflow hàng ngày:**

### **Khi code xong:**
```powershell
# Máy A: Push changes
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1
# Chọn option 3
```

### **Khi muốn lấy code mới:**
```powershell
# Máy B: Pull changes
powershell -ExecutionPolicy Bypass -File scripts/manual-sync.ps1
# Chọn option 2
```

## **🔧 Khởi động server (khi cần):**
```powershell
# Chỉ khi muốn chạy server
npm run dev
```

## **📝 Lưu ý:**
- **Không có auto-startup**
- **Không có background processes**
- **Chỉ sync khi bạn muốn**
- **Server chỉ chạy khi bạn khởi động**
- **An toàn 100% cho máy**

**Repository: https://github.com/Localsvietnam/locals-vn**
