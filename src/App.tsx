import mascotImage from '/images/mascot.png';

function App() {
  return (
    // 🔹 모바일 화면 프레임 - 가로 375px 고정, 세로는 화면에 맞춰 늘어남
    <div 
      className="mobile-frame"
      style={{
        width: '375px',
        minHeight: '812px',
        backgroundColor: '#4C1D95',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* 로고 이미지 - 164x152px */}
      <div style={{ marginBottom: '1.5rem' }}>
        <img 
          src={mascotImage} 
          alt="앱 로고" 
          style={{
            width: '164px',
            height: '152px',
            objectFit: 'contain',
            maxWidth: '164px',
            maxHeight: '152px',
            display: 'block'
          }}
        />
      </div>

      {/* 앱 이름 */}
      <h1 
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
          margin: 0
        }}
      >
        Language App
      </h1>
    </div>
  );
}

export default App;
