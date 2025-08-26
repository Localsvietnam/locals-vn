import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Locals.vn</h3>
            <p className="text-gray-300 text-sm">
              Tinh hoa đất Việt - Nơi kết nối văn hóa và chất lượng
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Liên hệ</h4>
            <p className="text-gray-300 text-sm mb-2">
              Email: info@locals.vn
            </p>
            <p className="text-gray-300 text-sm mb-2">
              Điện thoại: +84 123 456 789
            </p>
            <p className="text-gray-300 text-sm">
              Địa chỉ: Hà Nội, Việt Nam
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Locals.vn. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
