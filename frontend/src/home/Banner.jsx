import { useEffect, useState } from 'react'
import styles from './style.module.css'

const data = [
  {
    background: '/images/banner-1.png',
    title: 'Avatar: Dòng Chảy Của Nước (3D)',
    type: 'Hành động, Thám hiểm',
    period: '2 tiếng 36 phút',
    has_caption: true,
    trailer: 'https://www.youtube.com/embed/d9MyW72ELq0'
  },
  {
    background: '/images/banner-2.jpg',
    title: 'Creed 3: Tay Đấm Huyền Thoại (2D)',
    type: 'Hành động, Thể thao',
    period: '1 tiếng 45 phút',
    has_caption: false,
    trailer: 'https://www.youtube.com/embed/AHmCH7iB_IM'
  },
  {
    background: '/images/banner-3.jpg',
    title: 'Shazam! Cơn Thịnh Nộ Của Các Vị Thần',
    type: 'Siêu anh hùng',
    period: '2 tiếng 19 phút',
    has_caption: true,
    trailer: 'https://www.youtube.com/embed/Zi88i4CpHe4'
  },
  {
    background: '/images/banner-4.jpg',
    title: 'Người Kiến & Chiến Binh Ong: Thế Giới Lượng Tử (3D)',
    type: 'Hành động, Viễn tưởng',
    period: '2 tiếng 6 phút',
    has_caption: true,
    trailer: 'https://www.youtube.com/embed/ZlNFpri-Y40'
  }
]

function Banner() {
  const [index, setIndex] = useState(0)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % data.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = data[index]

  return (
    <div className={styles.banner}>
      {/* BACKGROUND SLIDES */}
      {data.map((item, i) => (
        <div
          key={i}
          className={`${styles.bg} ${i === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${item.background})` }}
        />
      ))}
        <div class={styles.layerOnBanner}/>

      {/* CONTENT */}
      <div className={styles.content}>
        <h1>{current.title}</h1>

        <div className={styles.meta}>
          <span>{current.type}</span>
          <span> | {current.period}</span>
          {current.has_caption && <span> | Thuyết minh</span>}
        </div>

        <div className={styles.actions}>
          <div style={{display: 'flex', gap: '10px'}}>
            <div style={{alignSelf: 'center'}}>
      <button
              className={styles.outline}
              onClick={() => setShowTrailer(true)}
            >
              ▶ Xem trailer
            </button>
            </div>
            <div style={{alignSelf: 'center'}}>
<button className={styles.primary}>Xem lịch chiếu</button>
            </div>
          </div>

          <div style={{display: 'flex', gap: '10px'}} className={styles.follow}>
            <div style={{alignSelf: 'center'}}>Theo dõi chúng tôi</div>
            <div style={{alignSelf: 'center'}}><img src="/images/fb-icon-2.png" /></div>
            <div style={{alignSelf: 'center'}}><img src="/images/yt-icon-2.png" /></div>
            <div style={{alignSelf: 'center'}}><img src="/images/insta-icon-2.png" /></div>
          </div>
        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {data.map((_, i) => (
            <span
              key={i}
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <div
          className={styles.modal}
          onClick={() => setShowTrailer(false)}
        >
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={current.trailer}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
