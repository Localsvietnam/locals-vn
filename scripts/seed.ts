import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sampleProducts = [
  {
    name: 'Áo thun nam cao cấp',
    description: 'Áo thun nam chất liệu cotton 100%, thoáng mát, dễ giặt. Phù hợp cho mọi dịp.',
    price: 299000,
    category: 'Thời trang nam',
    tags: ['áo thun', 'nam', 'cotton', 'thoáng mát'],
    imageUrls: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500'
    ]
  },
  {
    name: 'Điện thoại iPhone 15 Pro',
    description: 'iPhone 15 Pro với chip A17 Pro mạnh mẽ, camera 48MP, màn hình 6.1 inch Super Retina XDR.',
    price: 29990000,
    category: 'Điện tử',
    tags: ['iphone', 'smartphone', 'apple', 'camera'],
    imageUrls: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500'
    ]
  },
  {
    name: 'Laptop Dell XPS 13',
    description: 'Laptop Dell XPS 13 với thiết kế mỏng nhẹ, hiệu năng cao, màn hình InfinityEdge.',
    price: 25990000,
    category: 'Máy tính',
    tags: ['laptop', 'dell', 'xps', 'ultrabook'],
    imageUrls: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'
    ]
  },
  {
    name: 'Giày thể thao Nike Air Max',
    description: 'Giày thể thao Nike Air Max với công nghệ Air Max, đế cao su bền bỉ, phù hợp chạy bộ.',
    price: 2490000,
    category: 'Giày dép',
    tags: ['giày', 'nike', 'thể thao', 'chạy bộ'],
    imageUrls: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'
    ]
  },
  {
    name: 'Túi xách nữ thời trang',
    description: 'Túi xách nữ thiết kế hiện đại, chất liệu da cao cấp, nhiều ngăn tiện lợi.',
    price: 890000,
    category: 'Túi xách',
    tags: ['túi xách', 'nữ', 'thời trang', 'da'],
    imageUrls: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500'
    ]
  },
  {
    name: 'Đồng hồ thông minh Apple Watch',
    description: 'Apple Watch Series 9 với màn hình Always-On, theo dõi sức khỏe, kết nối iPhone.',
    price: 8990000,
    category: 'Đồng hồ',
    tags: ['apple watch', 'smartwatch', 'sức khỏe', 'iphone'],
    imageUrls: [
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    ]
  }
];

async function main() {
  console.log('Bắt đầu thêm dữ liệu mẫu...');

  // Xóa tất cả sản phẩm hiện có
  await prisma.product.deleteMany();
  console.log('Đã xóa dữ liệu cũ');

  // Thêm sản phẩm mẫu
  for (const product of sampleProducts) {
    await prisma.product.create({
      data: product
    });
    console.log(`Đã thêm sản phẩm: ${product.name}`);
  }

  console.log('Hoàn thành thêm dữ liệu mẫu!');
}

main()
  .catch((e) => {
    console.error('Lỗi:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
