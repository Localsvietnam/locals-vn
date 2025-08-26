const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const sampleProducts = [
  {
    name: 'Áo thun Locals.vn',
    description: 'Áo thun chất liệu cotton cao cấp với logo Locals.vn',
    price: 299000,
    category: 'Thời trang',
    tags: ['áo thun', 'cotton', 'locals'],
    imageUrls: ['https://example.com/ao-thun-1.jpg', 'https://example.com/ao-thun-2.jpg']
  },
  {
    name: 'Túi xách địa phương',
    description: 'Túi xách thủ công mỹ nghệ từ làng nghề truyền thống',
    price: 450000,
    category: 'Túi xách',
    tags: ['thủ công', 'mỹ nghệ', 'truyền thống'],
    imageUrls: ['https://example.com/tui-xach-1.jpg']
  },
  {
    name: 'Nước mắm truyền thống',
    description: 'Nước mắm cốt 40 độ đạm từ Phú Quốc',
    price: 150000,
    category: 'Thực phẩm',
    tags: ['nước mắm', 'phú quốc', 'truyền thống'],
    imageUrls: ['https://example.com/nuoc-mam-1.jpg', 'https://example.com/nuoc-mam-2.jpg']
  },
  {
    name: 'Gốm sứ Bát Tràng',
    description: 'Bộ ấm chén gốm sứ Bát Tràng thủ công',
    price: 800000,
    category: 'Gốm sứ',
    tags: ['gốm sứ', 'bát tràng', 'thủ công'],
    imageUrls: ['https://example.com/gom-su-1.jpg']
  },
  {
    name: 'Cà phê Tây Nguyên',
    description: 'Cà phê Robusta rang mộc từ Tây Nguyên',
    price: 120000,
    category: 'Cà phê',
    tags: ['cà phê', 'tây nguyên', 'robusta'],
    imageUrls: ['https://example.com/ca-phe-1.jpg']
  }
];

async function main() {
  console.log('🌱 Starting database seeding...');

  try {
    // Clear existing products
    console.log('🗑️ Clearing existing products...');
    await prisma.product.deleteMany({});

    // Create sample products
    console.log('📦 Creating sample products...');
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      });
      console.log(`✅ Created product: ${product.name}`);
    }

    console.log('🎉 Database seeding completed successfully!');
    console.log(`📊 Created ${sampleProducts.length} products`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
