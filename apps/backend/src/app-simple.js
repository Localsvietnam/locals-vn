// apps/backend/src/app-simple.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

// Simple products endpoint
app.get('/api/products', (req, res) => {
  const mockProducts = [
    {
      id: '1',
      name: 'Áo thun nam cao cấp',
      description: 'Áo thun nam chất liệu cotton 100%',
      price: 299000,
      category: 'Thời trang nam',
      tags: ['áo thun', 'nam', 'cotton'],
      imageUrls: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'iPhone 15 Pro',
      description: 'iPhone 15 Pro với chip A17 Pro mạnh mẽ',
      price: 29990000,
      category: 'Điện tử',
      tags: ['iphone', 'smartphone', 'apple'],
      imageUrls: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '3',
      name: 'Nước mắm Phú Quốc',
      description: 'Nước mắm cốt 40 độ đạm từ Phú Quốc',
      price: 150000,
      category: 'Thực phẩm',
      tags: ['nước mắm', 'phú quốc', 'truyền thống'],
      imageUrls: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];
  
  res.json(mockProducts);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});
