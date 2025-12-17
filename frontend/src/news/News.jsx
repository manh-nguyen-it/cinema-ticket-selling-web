import styles from './style.module.css'
import PromotionSection from '../home/PromotionSection.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function News() {
  const navigate = useNavigate();

  const news = [
    {
      id: 1,
      title: 'Quá Nhanh Quá Nguy Hiểm',
      date: '05/08/2023',
      desc: 'Đạo diễn đã tiết lộ phim điện ảnh sắp tới sẽ có cốt truyện gay cấn.',
      image: '/images/fast.jpg',
      large: true
    },
    {
      id: 2,
      title: 'Avatar',
      date: '14/09/2023',
      desc: 'Hãy cùng điểm qua vai trò phim Avatar. Dòng chảy câu nước sẽ được phát hành tuần này.',
      image: '/images/avatar.png'
    },
    {
      id: 3,
      title: 'Joker',
      date: '14/08/2023',
      desc: 'Joker: Folie à Deux – Cảnh quay đầu tiên đầy ấn tượng của Joaquin Phoenix.',
      image: '/images/joker.png'
    },
    {
      id: 4,
      title: 'Deadpool 3',
      date: '23/12/2023',
      desc: 'Deadpool 3, Avengers: Secret Wars và những dự án đáng chờ đợi.',
      image: '/images/deadpool3.jpg'
    },
    {
      id: 5,
      title: 'Vệ Binh Dải Ngân Hà',
      date: '21/12/2023',
      desc: 'Trailer độc quyền hé lộ Guardians Of The Galaxy. Màn quay sinh động của Star-Lord.',
      image: '/images/guardian.jpg'
    }
  ]
  function Column({ title, items }) {
    return (
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>{title}</h3>

        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.itemTitle}>{item.title}</p>

            {item.image && (
              <img
                src={item.image}
                className={styles.itemImage}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div>
      <header className={styles.header}>
        {/* LEFT: LOGO */}
        <div className={styles.logo}>
          <span className={styles.star}>STAR</span>
          <span className={styles.news}>NEWS</span>
        </div>

        {/* RIGHT: SEARCH */}
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={styles.searchInput}
          />
        </div>
      </header>
      <section className={styles.wrapper}>
        <h2 className={styles.heading}>Tin Mới Hôm Nay</h2>

        <div className={styles.grid}>
          {news.map(item => (
            <div
              key={item.id}
              className={`${styles.card} ${item.large ? styles.large : ''}`}
              style={{ backgroundImage: `url(${item.image})` }} // Sửa lại style này để hiện ảnh nền nếu có
              // SỰ KIỆN CLICK ĐỂ CHUYỂN TRANG
              onClick={() => {
                if (item.id === 1) {
                  navigate('/news/fast-and-furious');
                }
              }}
            >
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.date}>{item.date}</span>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <PromotionSection />
      <section className={styles.wrapper}>
        <div className={styles.columns}>
          {/* VIỆT NAM */}
          <Column
            title="Việt Nam"
            items={[
              {
                title:
                  'Quảng Trị, Huế, Đà Nẵng cảnh báo mưa rất to, cường độ lớn suốt một ngày',
                image: '/images/vietnam-1.jpg'
              },
              {
                title:
                  'Đình Bắc lập cú đúp, U22 Việt Nam có chiến thắng nhọc nhằn trước U22 Lào',
                image: '/images/vietnam-2.jpg'
              },
              {
                title:
                  'Dự báo mới về tăng trưởng GDP năm 2025 của Việt Nam',
                image: '/images/vietnam-3.jpg'
              }
            ]}
          />

          {/* THẾ GIỚI */}
          <Column
            title="Thế giới"
            items={[
              {
                title:
                  '"Cánh tay phải" của ông Zelensky nói gián khi bị ép từ chức - Kiev lệnh, chặn đường thoát thân',
                image: '/images/world-1.jpg'
              },
              {
                title:
                  'Tổng thống Putin cảnh báo cứng rắn với các nước hậu thuẫn Ukraine sau vụ tấn công tàu dầu Nga',
                image: '/images/world-2.jpg'
              },
              {
                title:
                  'Cư dân chạy vội sau vụ cháy chung cư ở Hong Kong',
                image: '/images/world-3.jpg'
              }
            ]}
          />

          {/* GỢI Ý */}
          <Column
            title="Chúng tôi chọn riêng cho bạn"
            items={[
              {
                title: 'Zootopia 2 đánh bại kỷ lục của Avatar 2',
                image: '/images/recommend-1.jpg'
              },
              {
                title:
                  'Conan Movie 28: Dư Ảnh Của Độc Nhãn chính thức trở lại rạp Việt',
                image: '/images/recommend-2.jpg'
              },
              {
                title:
                  '5 Centimet Trên Giây Chuẩn Bị Lên Sóng Với Bản Live-Action',
                image: '/images/recommend-3.jpg'
              }
            ]}
          />
        </div>

        <button className={styles.backBtn}>
          <Link to="/">Trở về trang bán vé xem phim</Link>
        </button>
      </section>
    </div>
  );
}

export default News
