import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const About: NextPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div className="min-h-screen relative" style={{ backgroundColor: '#FFFAF0' }}>
      {/* Vietnamese Brocade Pattern Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          /* Base fabric texture with depth - reduced by 40% */
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
          /* Weave intersection lines with 3D depth */
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
          ),
          /* Fiber fuzz effect - tiny hair-like threads */
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 0.3px,
            rgba(255, 250, 240, 0.4) 0.3px,
            rgba(255, 250, 240, 0.4) 0.6px,
            transparent 0.6px,
            transparent 0.9px,
            rgba(255, 250, 240, 0.3) 0.9px,
            rgba(255, 250, 240, 0.3) 1.2px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 0.3px,
            rgba(255, 250, 240, 0.4) 0.3px,
            rgba(255, 250, 240, 0.4) 0.6px,
            transparent 0.6px,
            transparent 0.9px,
            rgba(255, 250, 240, 0.3) 0.9px,
            rgba(255, 250, 240, 0.3) 1.2px
          ),
          /* Micro fiber texture */
          repeating-linear-gradient(
            30deg,
            transparent,
            transparent 0.6px,
            rgba(255, 250, 240, 0.2) 0.6px,
            rgba(255, 250, 240, 0.2) 0.9px
          ),
          repeating-linear-gradient(
            -30deg,
            transparent,
            transparent 0.6px,
            rgba(255, 250, 240, 0.2) 0.6px,
            rgba(255, 250, 240, 0.2) 0.9px
          ),
          /* 3D shadow effects for depth */
          radial-gradient(
            circle at 15% 15%,
            rgba(0, 0, 0, 0.08) 0px,
            transparent 2.7px
          ),
          radial-gradient(
            circle at 85% 85%,
            rgba(0, 0, 0, 0.08) 0px,
            transparent 2.7px
          ),
          radial-gradient(
            circle at 15% 85%,
            rgba(0, 0, 0, 0.08) 0px,
            transparent 2.7px
          ),
          radial-gradient(
            circle at 85% 15%,
            rgba(0, 0, 0, 0.08) 0px,
            transparent 2.7px
          ),
          /* Highlight effects for 3D texture */
          radial-gradient(
            circle at 25% 25%,
            rgba(255, 255, 255, 0.2) 0px,
            transparent 1.8px
          ),
          radial-gradient(
            circle at 75% 75%,
            rgba(255, 255, 255, 0.2) 0px,
            transparent 1.8px
          ),
          radial-gradient(
            circle at 25% 75%,
            rgba(255, 255, 255, 0.2) 0px,
            transparent 1.8px
          ),
          radial-gradient(
            circle at 75% 25%,
            rgba(255, 255, 255, 0.2) 0px,
            transparent 1.8px
          ),
          /* Subtle noise texture for realism */
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 1.8px,
            rgba(255, 250, 240, 0.15) 1.8px,
            rgba(255, 250, 240, 0.15) 2.7px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1.8px,
            rgba(255, 250, 240, 0.15) 1.8px,
            rgba(255, 250, 240, 0.15) 2.7px
          ),
          /* Ambient occlusion for depth */
          radial-gradient(
            ellipse at center,
            transparent 0px,
            rgba(0, 0, 0, 0.02) 90px,
            rgba(0, 0, 0, 0.05) 180px
          )
        `,
        backgroundSize: '7.2px 7.2px, 7.2px 7.2px, 7.2px 7.2px, 7.2px 7.2px, 1.2px 1.2px, 1.2px 1.2px, 1.8px 1.8px, 1.8px 1.8px, 7.2px 7.2px, 7.2px 7.2px, 3.6px 3.6px, 3.6px 3.6px, 360px 360px',
        zIndex: 0,
        pointerEvents: 'none'
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
              <a href="/about" className="text-black font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
                Về <span className="text-red-600">Locals.vn</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chúng tôi là cầu nối giữa văn hóa truyền thống Việt Nam và thế giới hiện đại, 
                mang đến những sản phẩm chất lượng cao phản ánh tinh hoa của đất nước hình chữ S.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Locals.vn được thành lập với tình yêu sâu sắc dành cho văn hóa Việt Nam. 
                  Chúng tôi tin rằng mỗi sản phẩm đều chứa đựng một câu chuyện, một kỷ niệm, 
                  và một phần linh hồn của dân tộc Việt.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Từ những làng nghề truyền thống đến những sáng tạo hiện đại, 
                  chúng tôi kết nối những nghệ nhân tài hoa với những người yêu mến văn hóa Việt Nam 
                  trên khắp thế giới.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">500+</div>
                    <div className="text-sm text-gray-600">Sản phẩm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">50+</div>
                    <div className="text-sm text-gray-600">Làng nghề</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">10K+</div>
                    <div className="text-sm text-gray-600">Khách hàng</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl p-8">
                  <img
                    src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                    alt="Văn hóa Việt Nam"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
              <p className="text-gray-600 text-lg">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tình yêu văn hóa</h3>
                <p className="text-gray-600">
                  Chúng tôi yêu mến và tôn trọng văn hóa truyền thống Việt Nam, 
                  luôn nỗ lực bảo tồn và phát huy những giá trị quý báu.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chất lượng cao</h3>
                <p className="text-gray-600">
                  Mỗi sản phẩm đều được chọn lọc kỹ lưỡng, đảm bảo chất lượng 
                  và tính thẩm mỹ cao nhất cho khách hàng.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cộng đồng</h3>
                <p className="text-gray-600">
                  Chúng tôi xây dựng cộng đồng yêu mến văn hóa Việt Nam, 
                  kết nối mọi người từ khắp nơi trên thế giới.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ của chúng tôi</h2>
              <p className="text-gray-600 text-lg">Những con người đam mê văn hóa Việt Nam</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Nguyễn Văn An", role: "Founder & CEO", image: "https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg" },
                { name: "Trần Thị Bình", role: "Creative Director", image: "https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg" },
                { name: "Lê Văn Cường", role: "Product Manager", image: "https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg" },
                { name: "Phạm Thị Dung", role: "Marketing Lead", image: "https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-16 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hãy liên hệ với chúng tôi</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Bạn có câu hỏi hoặc muốn tìm hiểu thêm về Locals.vn? 
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                Liên hệ ngay
              </a>
              <a href="/" className="bg-transparent text-black px-8 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition-colors font-semibold">
                Khám phá sản phẩm
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
