// apps/frontend/pages/index.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // State for managing product display for each category
  const [displayedProducts, setDisplayedProducts] = useState({
    thucPham: 6,
    giaVi: 6,
    doThuCong: 6,
    quaTang: 6
  });

  // Mock data for products in each category
  const productsData = {
    thucPham: [
      { id: 1, name: "Sản phẩm 1", price: "150,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 2, name: "Sản phẩm 2", price: "250,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 3, name: "Sản phẩm 3", price: "350,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 4, name: "Sản phẩm 4", price: "180,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 5, name: "Sản phẩm 5", price: "220,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 6, name: "Sản phẩm 6", price: "280,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 7, name: "Sản phẩm 7", price: "320,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 8, name: "Sản phẩm 8", price: "190,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 9, name: "Sản phẩm 9", price: "410,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 10, name: "Sản phẩm 10", price: "270,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 11, name: "Sản phẩm 11", price: "330,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 12, name: "Sản phẩm 12", price: "240,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 13, name: "Sản phẩm 13", price: "380,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 14, name: "Sản phẩm 14", price: "210,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 15, name: "Sản phẩm 15", price: "460,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 16, name: "Sản phẩm 16", price: "290,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 17, name: "Sản phẩm 17", price: "340,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm này" },
      { id: 18, name: "Sản phẩm 18", price: "260,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm này" }
    ],
    giaVi: [
      { id: 1, name: "Gia vị 1", price: "450,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 2, name: "Gia vị 2", price: "380,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 3, name: "Gia vị 3", price: "520,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 4, name: "Gia vị 4", price: "650,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 5, name: "Gia vị 5", price: "420,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 6, name: "Gia vị 6", price: "380,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 7, name: "Gia vị 7", price: "580,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 8, name: "Gia vị 8", price: "490,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 9, name: "Gia vị 9", price: "340,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 10, name: "Gia vị 10", price: "720,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 11, name: "Gia vị 11", price: "410,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 12, name: "Gia vị 12", price: "560,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 13, name: "Gia vị 13", price: "390,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 14, name: "Gia vị 14", price: "680,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 15, name: "Gia vị 15", price: "470,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 16, name: "Gia vị 16", price: "530,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 17, name: "Gia vị 17", price: "360,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về gia vị này" },
      { id: 18, name: "Gia vị 18", price: "610,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về gia vị này" }
    ],
    doThuCong: [
      { id: 1, name: "Đồ thủ công 1", price: "320,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 2, name: "Đồ thủ công 2", price: "280,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 3, name: "Đồ thủ công 3", price: "450,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 4, name: "Đồ thủ công 4", price: "380,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 5, name: "Đồ thủ công 5", price: "520,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 6, name: "Đồ thủ công 6", price: "420,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 7, name: "Đồ thủ công 7", price: "580,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 8, name: "Đồ thủ công 8", price: "340,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 9, name: "Đồ thủ công 9", price: "490,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 10, name: "Đồ thủ công 10", price: "360,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 11, name: "Đồ thủ công 11", price: "640,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 12, name: "Đồ thủ công 12", price: "410,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 13, name: "Đồ thủ công 13", price: "550,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 14, name: "Đồ thủ công 14", price: "380,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 15, name: "Đồ thủ công 15", price: "670,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 16, name: "Đồ thủ công 16", price: "430,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 17, name: "Đồ thủ công 17", price: "590,000₫", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg", description: "Mô tả ngắn về sản phẩm thủ công" },
      { id: 18, name: "Đồ thủ công 18", price: "370,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về sản phẩm thủ công" }
    ],
    quaTang: [
      { id: 1, name: "Quà tặng 1", price: "750,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 2, name: "Quà tặng 2", price: "680,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 3, name: "Quà tặng 3", price: "820,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 4, name: "Quà tặng 4", price: "950,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 5, name: "Quà tặng 5", price: "720,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 6, name: "Quà tặng 6", price: "880,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 7, name: "Quà tặng 7", price: "1,200,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 8, name: "Quà tặng 8", price: "650,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 9, name: "Quà tặng 9", price: "1,050,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 10, name: "Quà tặng 10", price: "780,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 11, name: "Quà tặng 11", price: "920,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 12, name: "Quà tặng 12", price: "1,350,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 13, name: "Quà tặng 13", price: "690,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 14, name: "Quà tặng 14", price: "1,180,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 15, name: "Quà tặng 15", price: "810,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 16, name: "Quà tặng 16", price: "1,050,000₫", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 17, name: "Quà tặng 17", price: "740,000₫", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg", description: "Mô tả ngắn về quà tặng văn hóa" },
      { id: 18, name: "Quà tặng 18", price: "1,420,000₫", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg", description: "Mô tả ngắn về quà tặng văn hóa" }
    ]
  };

  // Function to handle "Xem thêm" button click
  const handleLoadMore = (category: keyof typeof productsData) => {
    setDisplayedProducts(prev => ({
      ...prev,
      [category]: Math.min(prev[category] + 12, productsData[category].length)
    }));
  };

  // Scroll effect for navigation menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Function to render product grid for a category
  const renderProductGrid = (category: keyof typeof productsData, categoryName: string) => {
    const products = productsData[category].slice(0, displayedProducts[category]);
    const hasMoreProducts = displayedProducts[category] < productsData[category].length;

    return (
      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {categoryName}
          </h2>
          <p className="text-gray-600">
            Hiển thị {displayedProducts[category]} / {productsData[category].length} sản phẩm
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition-colors">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {hasMoreProducts && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => handleLoadMore(category)}
              className="bg-transparent text-black px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors font-medium"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FFFAF0' }}>
      {/* Vietnamese Brocade Pattern Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 0.9px,
            rgba(255, 250, 240, 0.99) 0.9px,
            rgba(255, 250, 240, 0.99) 1.8px,
            transparent 1.8px,
            transparent 2.7px,
            rgba(255, 250, 240, 0.95) 2.7px,
            rgba(255, 250, 240, 0.95) 3.6px,
            transparent 3.6px,
            transparent 4.5px,
            rgba(255, 250, 240, 0.85) 4.5px,
            rgba(255, 250, 240, 0.85) 5.4px,
            transparent 5.4px,
            transparent 6.3px,
            rgba(255, 250, 240, 0.75) 6.3px,
            rgba(255, 250, 240, 0.75) 7.2px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 0.9px,
            rgba(255, 250, 240, 0.99) 0.9px,
            rgba(255, 250, 240, 0.99) 1.8px,
            transparent 1.8px,
            transparent 2.7px,
            rgba(255, 250, 240, 0.95) 2.7px,
            rgba(255, 250, 240, 0.95) 3.6px,
            transparent 3.6px,
            transparent 4.5px,
            rgba(255, 250, 240, 0.85) 4.5px,
            rgba(255, 250, 240, 0.85) 5.4px,
            transparent 5.4px,
            transparent 6.3px,
            rgba(255, 250, 240, 0.75) 6.3px,
            rgba(255, 250, 240, 0.75) 7.2px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2.7px,
            rgba(200, 180, 160, 0.4) 2.7px,
            rgba(200, 180, 160, 0.4) 3.6px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2.7px,
            rgba(200, 180, 160, 0.4) 2.7px,
            rgba(200, 180, 160, 0.4) 3.6px
          )
        `
      }}></div>

      {/* Navigation Bar */}
       <nav className={`bg-[#FFFAF0] shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
         isVisible ? 'translate-y-0' : '-translate-y-full'
       }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
             <div className="flex items-center w-1/4">
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-bold text-gray-900">Locals.vn</h1>
              </a>
            </div>

            {/* Search Bar - Centered */}
             <div className="hidden md:flex items-center justify-center w-1/2">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-4 pr-12 py-2 border border-black rounded-full focus:outline-none focus:border-black bg-white"
                />
                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links + Shopping Cart */}
             <div className="hidden md:flex items-center justify-end space-x-4 w-1/4">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sản phẩm
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Về chúng tôi
              </a>
              <a href="#" className="relative text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>

            {/* Mobile menu button and cart */}
            <div className="md:hidden flex items-center space-x-2">
              <a href="#" className="relative text-gray-700 hover:text-gray-900 p-2 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </a>
              <button className="text-gray-700 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative z-10 pt-16">
        {/* Mobile Search Bar */}
        <div className="md:hidden p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full pl-4 pr-12 py-3 border border-black rounded-full focus:outline-none focus:border-black bg-white"
            />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Tinh hoa <span className="text-red-600">đất Việt</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Khám phá vẻ đẹp văn hóa truyền thống Việt Nam qua những sản phẩm tinh tế, 
                mang đậm bản sắc dân tộc và được chế tác bởi những nghệ nhân tài hoa.
                </p>
      </div>
            </div>
          </div>
          
        {/* Danh sách Section */}
        <div className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Column - Filter - Sticky */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-20" style={{ height: 'fit-content' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Bộ lọc
                  </h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Danh mục
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-gray-700">Thực phẩm</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-gray-700">Đồ uống</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-gray-700">Gia vị</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-gray-700">Đồ handmade</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Price Filter */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Giá
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">Dưới 100k</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">100k - 500k</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="price" className="mr-3" />
                        <span className="text-gray-700">Trên 500k</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Đánh giá
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <div className="flex">
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                        </div>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <div className="flex">
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-300">★</span>
                        </div>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="mr-3" />
                        <div className="flex">
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-300">★</span>
                          <span className="text-gray-300">★</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Clear Filter Button */}
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Xóa bộ lọc
                  </button>
                </div>
              </div>
              
              {/* Right Column - Products */}
              <div className="lg:col-span-3">
                {renderProductGrid('thucPham', 'Thực phẩm')}
                {renderProductGrid('giaVi', 'Gia vị')}
                {renderProductGrid('doThuCong', 'Đồ thủ công')}
                {renderProductGrid('quaTang', 'Quà tặng văn hóa')}
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tin tức & Sự kiện</h2>
              <p className="text-gray-600 text-lg">Cập nhật những tin tức mới nhất về văn hóa Việt Nam</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Item 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                    alt="Tin tức 1"
                    className="w-full h-full object-cover"
                  />
                 </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Văn hóa</span>
                    <span className="mx-2">•</span>
                    <span>2 giờ trước</span>
               </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Khám phá ẩm thực truyền thống Việt Nam
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tìm hiểu về những món ăn truyền thống độc đáo và cách chế biến tinh tế của ẩm thực Việt Nam...
                  </p>
                  <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                    Đọc thêm →
                  </a>
             </div>
           </div>

              {/* News Item 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                    alt="Tin tức 2"
                    className="w-full h-full object-cover"
                  />
         </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Sự kiện</span>
                    <span className="mx-2">•</span>
                    <span>1 ngày trước</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Lễ hội mùa xuân tại Hà Nội
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Khám phá không khí lễ hội mùa xuân sôi động và những hoạt động văn hóa đặc sắc tại thủ đô...
                  </p>
                  <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                    Đọc thêm →
                  </a>
       </div>
     </div>
     
              {/* News Item 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                    alt="Tin tức 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Du lịch</span>
                    <span className="mx-2">•</span>
                    <span>3 ngày trước</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Những địa điểm du lịch nổi tiếng Việt Nam
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Giới thiệu những địa điểm du lịch đẹp nhất Việt Nam và những trải nghiệm độc đáo cho du khách...
                  </p>
                  <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                    Đọc thêm →
                  </a>
                </div>
              </div>
            </div>

            {/* View All News Button */}
            <div className="text-center mt-12">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                Xem tất cả tin tức
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
