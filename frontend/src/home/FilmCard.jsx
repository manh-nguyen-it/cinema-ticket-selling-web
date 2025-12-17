import styles from './FilmCard.module.css'

function FilmCard({ film }) {
  return (
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
  )
}

export default FilmCard
