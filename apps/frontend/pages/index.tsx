// apps/frontend/pages/index.tsx
import { NextPage } from 'next';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const image = "https://i.ibb.co/7BgVtZP/Viet-4.png";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down & past 50px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        
        {/* Single Image Section */}
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-8 mt-0">
          {/* Text Content Above Image */}
          <div className="flex justify-center mb-8">
            <div style={{
              textAlign: 'center'
            }}>
              <h1 style={{
                color: 'black',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 0 16px 0',
                lineHeight: '1.2',
                textAlign: 'center'
              }}>
                LOCALS.VN
              </h1>
              <h2 style={{
                color: 'black',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 0 24px 0',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                Tinh hoa đất Việt
              </h2>
              <p style={{
                color: 'black',
                fontSize: '16px',
                fontWeight: 'normal',
                margin: '0 auto',
                lineHeight: '1.6',
                textAlign: 'center',
                width: '900px'
              }}>
                  Locals.vn là một cửa hàng trực tuyến bán các sản phẩm độc đáo từ Việt Nam, được thiết kế để mang đến cho khách hàng những trải nghiệm độc đáo và thú vị. Nơi bạn khám phá không chỉ sản phẩm, dịch vụ mà còn là tinh hoa và tâm hồn.
                </p>
            </div>
          </div>
          
          <div className="flex justify-center mb-20">
            {/* Test Frame - Simple Black Border */}
            <div style={{
              border: '20px solid red',
              padding: '60px',
              backgroundColor: 'yellow',
              margin: '40px',
              transform: 'scale(0.9)',
              transformOrigin: 'center'
            }}>
              <h1 style={{color: 'black', fontSize: '24px', margin: '0 0 20px 0'}}>TEST FRAME</h1>
              <img 
                src={image} 
                alt="Product Image" 
                className="max-w-md h-auto object-cover scale-[2.6]"
                style={{
                  border: '1px solid black'
                }}
              />
            </div>
          </div>
          
          {/* Three Panels Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-0">
            <div className="flex justify-center">
              <div className="w-full max-w-6xl">
                {/* Top Section */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-left">
                    <h2 style={{
                      color: 'black',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      margin: '0'
                    }}>
                      Khám phá
                    </h2>
                  </div>
                  <div className="text-right">
                    <p style={{
                      color: 'black',
                      fontSize: '14px',
                      fontWeight: 'normal',
                      margin: '0 0 4px 0'
                    }}>
                      TAG US @LOCALS.VN
                    </p>
                    <p style={{
                      color: 'black',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      margin: '0'
                    }}>
                      RECOMMENDATIONS
                    </p>
                  </div>
                </div>
                
                {/* Three Panels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Panel 1 - Instant Noodles */}
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg" 
                        alt="Instant Noodles"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Cup Noodles
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Quick and delicious instant noodles
                    </p>
                  </div>
                  
                  {/* Panel 2 - Ramen Bowl */}
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg" 
                        alt="Fresh Ramen"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Fresh Ramen
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Authentic ramen with fresh ingredients
                    </p>
                  </div>
                  
                  {/* Panel 3 - Gourmet Experience */}
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg" 
                        alt="Gourmet Experience"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Gourmet Experience
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Premium dining experience
                    </p>
                  </div>
                </div>
                
                {/* Xem thêm Button */}
                <div className="flex justify-center mt-8">
                  <button style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    padding: '8px 24px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: '1px solid black',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Section - Nổi bật */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 -mt-8">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              {/* Section Title */}
              <div className="text-center mb-6">
                <h1 style={{
                  color: 'black',
                  fontSize: '24px',
                  fontWeight: 'normal',
                  margin: '0',
                  textAlign: 'center'
                }}>
                </h1>
              </div>
              
              <div className="mb-6">
                <h2 style={{
                  color: 'black',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: '0 0 8px 0',
                  textAlign: 'left'
                }}>
                  Nổi bật
                </h2>
                <p style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  margin: '0',
                  textAlign: 'left'
                }}>
                  Hiển thị 6 sản phẩm nổi bật
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product 1 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                  <a href="/product-detail">
                    <div style={{
                      height: '200px',
                      backgroundColor: '#f3f4f6',
                      position: 'relative'
                    }}>
                      <img 
                        src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                        alt="Product 1"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        margin: '0 0 8px 0'
                      }}>
                        Cup Noodles
                      </h3>
                      <p style={{
                        color: '#6b7280',
                        fontSize: '14px',
                        margin: '0 0 12px 0',
                        lineHeight: '1.4'
                      }}>
                        Mô tả ngắn về sản phẩm này
                      </p>
                      <div className="flex justify-between items-center">
                        <span style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold'
                        }}>
                          150.000đ
                        </span>
                        <button 
                          onClick={(e) => e.preventDefault()}
                          style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
                
                {/* Product 2 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                      alt="Product 2"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Sản phẩm 2
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      Mô tả ngắn về sản phẩm này
                    </p>
                    <div className="flex justify-between items-center">
                      <span style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        250.000đ
                      </span>
                      <button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 3 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                      alt="Product 3"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Sản phẩm 3
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      Mô tả ngắn về sản phẩm này
                    </p>
                    <div className="flex justify-between items-center">
                      <span style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        350.000đ
                      </span>
                      <button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 4 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                      alt="Product 4"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Sản phẩm 4
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      Mô tả ngắn về sản phẩm này
                    </p>
                    <div className="flex justify-between items-center">
                      <span style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        180.000đ
                      </span>
                      <button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 5 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                      alt="Product 5"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Sản phẩm 5
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      Mô tả ngắn về sản phẩm này
                    </p>
                    <div className="flex justify-between items-center">
                      <span style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        220.000đ
                      </span>
                      <button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Product 6 */}
                <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                  <div style={{
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    position: 'relative'
                  }}>
                    <img 
                      src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                      alt="Product 6"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 style={{
                      color: 'black',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0'
                    }}>
                      Sản phẩm 6
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      margin: '0 0 12px 0',
                      lineHeight: '1.4'
                    }}>
                      Mô tả ngắn về sản phẩm này
                    </p>
                    <div className="flex justify-between items-center">
                      <span style={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                        280.000đ
                      </span>
                      <button style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer'
                      }}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Xem thêm Button */}
              <div className="flex justify-center mt-8">
                <button style={{
                  backgroundColor: 'transparent',
                  color: 'black',
                  padding: '8px 24px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid black',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Danh sách Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Column - Filter - Sticky across both sections */}
                <div className="lg:col-span-1">
                  <div className="bg-transparent p-6 pl-0 sticky top-4" style={{ height: 'fit-content', position: 'sticky', top: '80px', zIndex: 10 }}>
                    <h3 style={{
                      color: 'black',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      margin: '0 0 20px 0'
                    }}>
                      Bộ lọc
                    </h3>
                    
                    {/* Category Filter */}
                    <div className="mb-6">
                      <h4 style={{
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 12px 0'
                      }}>
                        Danh mục
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Thực phẩm</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Đồ uống</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Gia vị</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Đồ handmade</span>
                        </label>
                      </div>
                    </div>
                    
                    {/* Price Filter */}
                    <div className="mb-6">
                      <h4 style={{
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 12px 0'
                      }}>
                        Giá
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                          <input type="radio" name="price2" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Dưới 100k</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="radio" name="price2" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>100k - 500k</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="radio" name="price2" className="mr-3" />
                          <span style={{color: '#6b7280', fontSize: '14px'}}>Trên 500k</span>
                        </label>
                      </div>
                    </div>
                    
                    {/* Rating Filter */}
                    <div className="mb-6">
                      <h4 style={{
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '0 0 12px 0'
                      }}>
                        Đánh giá
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <div className="flex">
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <div className="flex">
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: '#d1d5db', fontSize: '16px'}}>★</span>
                          </div>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="checkbox" className="mr-3" />
                          <div className="flex">
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: 'black', fontSize: '16px'}}>★</span>
                            <span style={{color: '#d1d5db', fontSize: '16px'}}>★</span>
                            <span style={{color: '#d1d5db', fontSize: '16px'}}>★</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    {/* Clear Filter Button */}
                    <button style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid black',
                      cursor: 'pointer',
                      width: '100%'
                    }}>
                      Xóa bộ lọc
                    </button>
                  </div>
                </div>
                
                {/* Right Column - Products */}
                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <h2 style={{
                      color: 'black',
                      fontSize: '28px',
                      fontWeight: 'bold',
                      margin: '0 0 8px 0',
                      textAlign: 'left'
                    }}>
                      Thực phẩm
                    </h2>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '16px',
                      margin: '0',
                      textAlign: 'left'
                    }}>
                      Hiển thị 6 sản phẩm
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.ibb.co/xSL3Vmft/Viet.png"
                          alt="Product 1"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 1
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            150.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 2 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                          alt="Product 2"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 2
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            250.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 3 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                          alt="Product 3"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 3
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            350.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 4 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                          alt="Product 4"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 4
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            180.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 5 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                          alt="Product 5"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 5
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            220.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product 6 */}
                    <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                      <div style={{
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        position: 'relative'
                      }}>
                        <img 
                          src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                          alt="Product 6"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 style={{
                          color: 'black',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          margin: '0 0 8px 0'
                        }}>
                          Sản phẩm 6
                        </h3>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: '0 0 12px 0',
                          lineHeight: '1.4'
                        }}>
                          Mô tả ngắn về sản phẩm này
                        </p>
                        <div className="flex justify-between items-center">
                          <span style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            280.000đ
                          </span>
                          <button style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500',
                            border: 'none',
                            cursor: 'pointer'
                          }}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Xem thêm Button */}
                  <div className="flex justify-center mt-8">
                    <button style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                      padding: '8px 24px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid black',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}>
                      Xem thêm
                    </button>
                  </div>
                  
                  {/* Quà tặng văn hóa và lưu niệm Section */}
                  <div className="mt-16">
                    <div className="mb-6">
                      <h2 style={{
                        color: 'black',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 0 8px 0',
                        textAlign: 'left'
                      }}>
                        Quà tặng văn hóa và lưu niệm
                      </h2>
                      <p style={{
                        color: '#6b7280',
                        fontSize: '16px',
                        margin: '0',
                        textAlign: 'left'
                      }}>
                        Hiển thị 6 sản phẩm
                      </p>
                    </div>
                    
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Product 1 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg"
                            alt="Product 1"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 1
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              450.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 2 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 2"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 2
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              380.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 3 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                            alt="Product 3"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 3
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              520.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 4 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg"
                            alt="Product 4"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 4
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              650.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 5 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 5"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 5
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              420.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 6 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                            alt="Product 6"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 6
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              580.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Xem thêm Button */}
                    <div className="flex justify-center mt-8">
                      <button style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: '8px 24px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid black',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        Xem thêm
                      </button>
                    </div>
                  </div>
                  
                  {/* Quà tặng thời trang và phụ kiện Section */}
                  <div className="mt-16">
                    <div className="mb-6">
                      <h2 style={{
                        color: 'black',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 0 8px 0',
                        textAlign: 'left'
                      }}>
                        Quà tặng thời trang và phụ kiện
                      </h2>
                      <p style={{
                        color: '#6b7280',
                        fontSize: '16px',
                        margin: '0',
                        textAlign: 'left'
                      }}>
                        Hiển thị 6 sản phẩm
                      </p>
                    </div>
                    
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Product 1 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                            alt="Product 1"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 1
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              320.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 2 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 2"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 2
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              280.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 3 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                            alt="Product 3"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 3
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              450.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 4 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg"
                            alt="Product 4"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 4
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              380.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 5 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                            alt="Product 5"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 5
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              520.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 6 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 6"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 6
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              290.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Xem thêm Button */}
                    <div className="flex justify-center mt-8">
                      <button style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: '8px 24px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid black',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        Xem thêm
                      </button>
                    </div>
                  </div>
                  
                  {/* Sản phẩm nông sản và thảo dược Section */}
                  <div className="mt-16">
                    <div className="mb-6">
                      <h2 style={{
                        color: 'black',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 0 8px 0',
                        textAlign: 'left'
                      }}>
                        Sản phẩm nông sản và thảo dược
                      </h2>
                      <p style={{
                        color: '#6b7280',
                        fontSize: '16px',
                        margin: '0',
                        textAlign: 'left'
                      }}>
                        Hiển thị 6 sản phẩm
                      </p>
                    </div>
                    
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Product 1 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg"
                            alt="Product 1"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 1
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              180.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 2 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 2"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 2
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              220.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 3 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/df/8c/d0/df8cd089300e67cb25e9851e6dc853ce.jpg"
                            alt="Product 3"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 3
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              350.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 4 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/5d/0d/a2/5d0da2f3b50ad5ae86ca15938d4d4a03.jpg"
                            alt="Product 4"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 4
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              280.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 5 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/1200x/3f/97/30/3f97300e7d44f51f30364c155c332643.jpg"
                            alt="Product 5"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 5
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              420.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product 6 */}
                      <div className="bg-transparent rounded-lg shadow-sm border border-black overflow-hidden">
                        <div style={{
                          height: '200px',
                          backgroundColor: '#f3f4f6',
                          position: 'relative'
                        }}>
                          <img 
                            src="https://i.pinimg.com/736x/ed/11/fd/ed11fd437a36ff32f4792e792add9ac8.jpg"
                            alt="Product 6"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: '0 0 8px 0'
                          }}>
                            Sản phẩm 6
                          </h3>
                          <p style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            margin: '0 0 12px 0',
                            lineHeight: '1.4'
                          }}>
                            Mô tả ngắn về sản phẩm này
                          </p>
                          <div className="flex justify-between items-center">
                            <span style={{
                              color: 'black',
                              fontSize: '18px',
                              fontWeight: 'bold'
                            }}>
                              380.000đ
                            </span>
                            <button style={{
                              backgroundColor: 'black',
                              color: 'white',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer'
                            }}>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Xem thêm Button */}
                    <div className="flex justify-center mt-8">
                      <button style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: '8px 24px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid black',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
  );
};

export default Home;
