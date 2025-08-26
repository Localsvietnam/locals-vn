# 🔧 Hướng dẫn sửa lỗi Locals.vn

## 🚨 Lỗi thường gặp và cách khắc phục

### 1. Lỗi "yarn is not recognized"

**Nguyên nhân**: Script đang sử dụng yarn nhưng yarn không được cài đặt.

**Giải pháp**: 
- Đã sửa trong `package.json` để sử dụng npm thay vì yarn
- Chạy: `npm run dev:frontend` và `npm run dev:backend:simple`

### 2. Lỗi TypeScript với Prisma

**Nguyên nhân**: Prisma client chưa được generate đúng cách.

**Giải pháp**:
```bash
# Xóa và regenerate Prisma client
Remove-Item -Recurse -Force node_modules/.prisma -ErrorAction SilentlyContinue
npx prisma generate
```

### 3. Lỗi "Port already in use"

**Nguyên nhân**: Port 3000 hoặc 4000 đã được sử dụng bởi process khác.

**Giải pháp**:
```bash
# Kiểm tra process đang sử dụng port
netstat -ano | findstr :4000

# Kill process (thay PID bằng PID thực tế)
taskkill /PID <PID> /F
```

### 4. Backend không khởi động được

**Giải pháp**:
- Sử dụng backend đơn giản: `npm run dev:backend:simple`
- Backend này không cần database, chỉ trả về dữ liệu mẫu

### 5. Frontend không load được

**Giải pháp**:
```bash
# Kiểm tra frontend
npm run dev:frontend

# Nếu port 3000 bị chiếm, frontend sẽ tự động chuyển sang port 3001
```

## 🛠️ Scripts hữu ích

### Kiểm tra trạng thái dự án
```bash
npm run check
```

### Khởi động toàn bộ dự án
```bash
npm run start-all
```

### Setup ban đầu
```bash
# Chạy setup script
powershell -ExecutionPolicy Bypass -File setup.ps1

# Hoặc thủ công
npm install
npx prisma generate
```

## 🔄 Quy trình khởi động an toàn

1. **Kiểm tra ports**:
   ```bash
   npm run check
   ```

2. **Kill processes cũ** (nếu cần):
   ```bash
   # Tìm PID
   netstat -ano | findstr :4000
   
   # Kill process
   taskkill /PID <PID> /F
   ```

3. **Khởi động servers**:
   ```bash
   # Cách 1: Khởi động riêng lẻ
   npm run dev:frontend
   npm run dev:backend:simple
   
   # Cách 2: Khởi động tất cả
   npm run start-all
   ```

## 📊 Trạng thái servers

### Frontend
- **URL**: http://localhost:3000 (hoặc 3001 nếu 3000 bị chiếm)
- **Status**: ✅ Hoạt động tốt
- **Features**: Trang chủ, trang sản phẩm, responsive design

### Backend (Simple)
- **URL**: http://localhost:4000
- **Health Check**: http://localhost:4000/health
- **API Products**: http://localhost:4000/api/products
- **Status**: ✅ Hoạt động với dữ liệu mẫu

### Backend (Full - cần database)
- **Status**: ⚠️ Cần setup database
- **Setup**: `npx prisma migrate dev --name init`

## 🎯 Truy cập ứng dụng

1. **Frontend**: http://localhost:3000
2. **Backend API**: http://localhost:4000
3. **API Health**: http://localhost:4000/health
4. **API Products**: http://localhost:4000/api/products

## 🔧 Các lệnh hữu ích

```bash
# Kiểm tra trạng thái
npm run check

# Khởi động toàn bộ
npm run start-all

# Khởi động riêng lẻ
npm run dev:frontend
npm run dev:backend:simple

# Build cho production
npm run build

# Tối ưu cho production
npm run optimize
```

## 📞 Hỗ trợ

Nếu gặp lỗi khác, hãy:
1. Chạy `npm run check` để kiểm tra trạng thái
2. Kiểm tra logs trong terminal
3. Đảm bảo Node.js và npm đã được cài đặt
4. Thử khởi động lại với `npm run start-all`
