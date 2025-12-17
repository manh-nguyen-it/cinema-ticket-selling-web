import { useState } from 'react'
import styles from './style.module.css'
import FilmCard from './FilmCard.jsx'

function Films() {
    const [activeTab, setActiveTab] = useState('now') // now | upcoming
    const [loadedTabs, setLoadedTabs] = useState({
        now: true,
        upcoming: false
    })

    const handleChangeTab = (tab) => {
        setActiveTab(tab)

        if (!loadedTabs[tab]) {
            setLoadedTabs(prev => ({
                ...prev,
                [tab]: true
            }))
        }
    }

    return (
        <div style={{ padding: '20px 0px' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0px 10px'
            }}>
                {/* Tabs */}
                <div className={styles.tabsWrapper}>
                    <div className={styles.tabs}>
                        <div align="center"
                            className={`${styles.tab} ${activeTab === 'now' ? styles.active : ''}`}
                            onClick={() => handleChangeTab('now')}
                        >
                            Đang chiếu
                        </div>

                        <div align="center"
                            className={`${styles.tab} ${activeTab === 'upcoming' ? styles.active : ''}`}
                            onClick={() => handleChangeTab('upcoming')}
                        >
                            Sắp chiếu
                        </div>
                    </div>
                </div>

                <div style={{ cursor: 'pointer' }}>
                    Xem tất cả &gt;
                </div>
            </div>

            {/* Nội dung */}
            <div className={styles.FilmCardGrid}>
                {/* Phim đang chiếu */}
                {loadedTabs.now && activeTab === 'now' && (
                    <>
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                    </>
                )}

                {/* Phim sắp chiếu (lazy load) */}
                {loadedTabs.upcoming && activeTab === 'upcoming' && (
                    <>
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                        <FilmCard />
                    </>
                )}
            </div>
        </div>
    )
}

export default Films