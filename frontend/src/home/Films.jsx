import { useState } from 'react'
import styles from './style.module.css'
import FilmCard from './FilmCard'
import { nowShowingFilms, upcomingFilms } from './filmData.js'

function Films() {
  const [activeTab, setActiveTab] = useState('now')

  const films =
    activeTab === 'now' ? nowShowingFilms : upcomingFilms

  return (
    <div>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${activeTab === 'now' ? styles.active : ''}`}
              onClick={() => setActiveTab('now')}
            >
              Đang chiếu
            </div>
            <div
              className={`${styles.tab} ${activeTab === 'upcoming' ? styles.active : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Sắp chiếu
            </div>
          </div>
        </div>

        <div className={styles.viewAll}>Xem tất cả &gt;</div>
      </div>

      {/* GRID */}
      <div className={styles.FilmCardGrid}>
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default Films
