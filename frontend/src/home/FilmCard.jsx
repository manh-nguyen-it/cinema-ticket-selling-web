import styles from './FilmCard.module.css'
import { Link } from 'react-router-dom'

function FilmCard({ film }) {
  return (
    <div>
    <Link to='/chi-tiet-phim'>
      <div className={styles.card}>
        <div
          className={styles.poster}
          style={{ backgroundImage: `url(${film.poster})` }}
        >
          {film.hasTrailer && (
            <div className={styles.trailer}>
              ▶ Xem Trailer
            </div>
          )}
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{film.title}</h3>
          <p className={styles.genre}>{film.genre}</p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default FilmCard
