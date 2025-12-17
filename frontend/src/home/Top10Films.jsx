import { useRef } from 'react'
import styles from './style.module.css'
import Top10FilmCard from './Top10FilmCard.jsx'

function Top10Films() {
    const films = [
  {
    title: 'Driving Madeleine',
    rating: 7.2,
    genre: 'Hài, Kịch',
    duration: '1h 31m'
  },
  {
    title: 'Tempête',
    rating: 8.6,
    genre: 'Kịch',
    duration: '1h 49m'
  },
  {
    title: 'Dragon',
    rating: 7.9,
    genre: 'Hành động',
    duration: '2h 58m'
  },
  {
    title: 'CODA',
    rating: 8.9,
    genre: 'Hài kịch, Nhân văn',
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
                    {films.map(film => <Top10FilmCard film_info={film}/>)}
                    <Top10FilmCard />
                    <Top10FilmCard />
                    <Top10FilmCard />
                    <Top10FilmCard />
                    <Top10FilmCard />
                    <Top10FilmCard />
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
