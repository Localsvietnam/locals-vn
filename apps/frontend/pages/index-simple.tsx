// apps/frontend/pages/index-simple.tsx
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2563eb', fontSize: '2rem', marginBottom: '1rem' }}>
        Chào mừng đến với Locals.vn
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#374151' }}>
        Khám phá cửa hàng và dịch vụ địa phương chất lượng cao.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button 
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => alert('Chức năng đang phát triển!')}
        >
          Xem sản phẩm
        </button>
      </div>
    </div>
  );
};

export default Home;
