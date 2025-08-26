import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Lấy danh sách tất cả sản phẩm
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm' });
  }
});

// Lấy chi tiết một sản phẩm
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id }
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin sản phẩm' });
  }
});

// Tạo sản phẩm mới
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, tags, imageUrls } = req.body;
    
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        tags: tags || [],
        imageUrls: imageUrls || []
      }
    });
    
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tạo sản phẩm' });
  }
});

// Cập nhật sản phẩm
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, tags, imageUrls } = req.body;
    
    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price: parseFloat(price),
        category,
        tags: tags || [],
        imageUrls: imageUrls || []
      }
    });
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật sản phẩm' });
  }
});

// Xóa sản phẩm
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id }
    });
    
    res.json({ message: 'Đã xóa sản phẩm thành công' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa sản phẩm' });
  }
});

export default router;
