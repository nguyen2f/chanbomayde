import { useEffect, useState } from 'react';

let GUEST_LIST = {};
try {
  GUEST_LIST = JSON.parse(import.meta.env.VITE_GUEST_LIST || '{}');
} catch (e) {
  console.error("Lỗi khi parse GUEST_LIST từ env:", e);
}

const DEFAULT_MESSAGE = "Sự hiện diện của bạn là niềm vinh hạnh và là món quà ý nghĩa nhất trong ngày vui của tôi. Rất mong bạn sẽ bớt chút thời gian đến chung vui!";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [greeting, setGreeting] = useState("bạn");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.substring(1).replace(/\/$/, "");

    if (id && GUEST_LIST[id]) {
      setGreeting(GUEST_LIST[id].greeting);
      if (GUEST_LIST[id].message) {
        setMessage(GUEST_LIST[id].message);
      }
    }

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="app-container">
      <main className="invite-card-wrapper">
        <div className={`invite-card ${isVisible ? 'fade-in-up' : ''}`}>

          {/* Cột Đỏ (Nền đỏ sậm) */}
          <div className="card-left">
            <div className="line line-top"></div>
            <div className="content-left">
              <div className="grad-icon">✨🎓✨</div>
              <h2 className="class-of">Lễ Tốt Nghiệp</h2>
              <div className="year">
                <span>20</span>
                <span>26</span>
              </div>
            </div>
            <div className="line line-bottom"></div>
          </div>

          {/* Cột Trắng */}
          <div className="card-right">
            <h2 className="youre-invited">Trân trọng kính mời</h2>
            <div className="greeting-text">{greeting}</div>

            <div className="celebrate-text">
              ĐẾN DỰ BUỔI LỄ TỐT NGHIỆP CỦA TÂN CỬ NHÂN
            </div>

            <h1 className="taylor-abrahams">Nguyễn Phúc Nguyên</h1>
            <div className="major-text">Toán Tin K67 </div>

            <div className="details-text">
              <div className="detail-date">THỨ BẢY, 26 THÁNG 09 — 15:00</div>
              <div className="detail-divider"></div>
              <div className="detail-venue">HỘI TRƯỜNG C2</div>
              <div className="detail-address">Đại học Bách Khoa Hà Nội</div>
            </div>

            <p className="personal-message">
              {message}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
