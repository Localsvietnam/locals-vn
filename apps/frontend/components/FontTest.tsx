// apps/frontend/components/FontTest.tsx
import React from 'react';

const FontTest: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-50 max-w-md">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Font Test Panel</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Logo Font (Bahianita/iCielBC/Playfair Display)</h4>
          <p className="font-logo text-2xl text-viet-red">🌾 Locals.vn</p>
          <p className="font-logo text-lg text-viet-red">Tấm lòng địa phương</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Heading Font (Comfortaa/Coolvetica/Montserrat)</h4>
          <p className="font-heading text-xl text-text-viet">Mỗi sản phẩm là một câu chuyện</p>
          <p className="font-heading text-lg text-text-viet">Danh mục nổi bật</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Body Font (Patrick Hand)</h4>
          <p className="font-body text-base text-text-secondary">
            Từ những nguyên liệu mộc mạc, Locals.vn kể những câu chuyện về vùng đất, con người và văn hóa Việt Nam.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Journey Text (Playwrite AR Guides)</h4>
          <p className="font-journey text-base text-viet-red">
            Hành trình từ địa phương
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Font Classes Test</h4>
          <p className="font-test-logo text-lg text-viet-red">Test Logo Font</p>
          <p className="font-test-heading text-lg text-text-viet">Test Heading Font</p>
          <p className="font-test-body text-base text-text-secondary">Test Body Font</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Font files loaded from: /fonts/
        </p>
      </div>
    </div>
  );
};

export default FontTest;
