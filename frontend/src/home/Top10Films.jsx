import { useRef } from 'react'
import styles from './style.module.css'
import Top10FilmCard from './Top10FilmCard.jsx'

function Top10Films() {
    const films = [
  {
    photo: '/images/top-film-1.jpg',
    title: 'Driving Madeleine',
    rating: 7.2,
    type: 'Hài, Kịch',
    duration: '1h 31m'
  },
  {
    photo: '/images/top-film-2.jpg',
    title: 'Tempête',
    rating: 8.6,
    type: 'Kịch',
    duration: '1h 49m'
  },
  {
    photo: '/images/top-film-3.png',
    title: 'Dragon',
    rating: 7.9,
    type: 'Hành động',
    duration: '2h 58m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  },
  {
    photo: '/images/top-film-4.jpg',
    title: 'CODA',
    rating: 8.9,
    type: 'Hài kịch, Nhân văn',
    duration: '1h 51m'
  }
]

    const sliderRef = useRef(null)

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -236,
            behavior: 'smooth'
        })
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 236,
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.top10Wrapper}>
            <div className={styles.title}>
                10 Bộ Phim Hay Nhất Tháng 12
            </div>

            <div className={styles.sliderContainer}>
                <button
                    className={`${styles.arrow} ${styles.left}`}
                    onClick={scrollLeft}
                >
                    ‹
                </button>
                <div className={styles.top10FilmGrid} ref={sliderRef}>
                    {films.map(item => <Top10FilmCard film_info={item}/>)}
                </div>
                <button
                    className={`${styles.arrow} ${styles.right}`}
                    onClick={scrollRight}
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default Top10Films
