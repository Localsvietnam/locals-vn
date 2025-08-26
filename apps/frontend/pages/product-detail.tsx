// apps/frontend/pages/product-detail.tsx
import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const ProductDetail: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const productImages = [
    "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg",
    "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg",
    "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg",
    "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg",
    "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
  ];

  // Swipe functionality
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setSelectedImage((prev) => (prev + 1) % productImages.length);
    }
    if (isRightSwipe) {
      setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`bg-[#FFFAF0] shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center w-1/4">
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src="/images/locals-logo.png"
                  alt="Locals Logo"
                  width={144}
                  height={48}
                  className="h-10 w-auto"
                />
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

        {/* Background Gradient Section */}
        <div className="relative h-[650px] bg-gradient-to-b from-[#765410] to-white">
          {/* Main Product Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
            <div className="bg-white rounded-[10px]">
              {/* Main Product Image - Full Section Width */}
              <div
                className="w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded-t-[10px] relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={productImages[selectedImage]}
                  alt="Cup Noodles"
                  className="w-full h-full object-cover"
                />
                
                {/* Image Foot Gradient Layer */}
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white via-white/90 via-white/70 via-white/50 via-white/30 via-white/15 to-transparent"></div>
                
                {/* Thumbnail Images - Overlay on Main Image */}
                <div className="absolute bottom-4 left-8 right-4">
                  <div className="flex space-x-3">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 shadow-lg ${
                          selectedImage === index ? 'border-red-500' : 'border-white'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                  {/* Left Column - Product Information (Aligned with thumbnails) */}
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Cup Noodles
                      </h1>
                      <p className="text-gray-600 text-lg">
                        Mô tả ngắn về sản phẩm này
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Price and Add to Cart */}
                  <div className="relative z-20">
                    {/* Price - Single unit price */}
                    <div className="text-4xl font-bold text-gray-900 text-right -mt-32 mb-12">
                      150.000₫
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex justify-end mt-2">
                      <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold w-[36%]">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mô tả sản phẩm</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-gray-700 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p className="text-gray-700 mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Thành phần</h2>
            
            <p className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            {/* Specifications Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Thương hiệu</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Nutriboost (Việt Nam)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Sản xuất tại</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Việt Nam</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Loại sữa</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Sữa trái cây</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Hương vị</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Dâu</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Thành phần</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Sữa từ New Zealand</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Đặc điểm nổi bật</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Không chất bảo quản, không chất tạo màu</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Dung tích</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1 lít</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Đóng gói</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">Dạng lốc 6 chai</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Sử dụng</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      Lắc đều trước khi uống, ngon hơn khi uống lạnh, bảo quản lạnh và sử dụng trong vòng 24h sau khi mở nắp
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sản phẩm liên quan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={`https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg`}
                    alt={`Related Product ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Sản phẩm liên quan {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">Mô tả ngắn về sản phẩm liên quan</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{(150000 + item * 10000).toLocaleString('vi-VN')}₫</span>
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors">
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
