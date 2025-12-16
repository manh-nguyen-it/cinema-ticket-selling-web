import { useEffect, useState } from 'react'
import styles from './style.module.css'

const backgrounds = [
    '/images/banner-background.png',
    '/images/banner2.png',
    '/images/banner3.png',
    '/images/banner4.png'
]

function Banner() {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % backgrounds.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={styles.banner}>
            {backgrounds.map((bg, i) => (
                <div
                    key={i}
                    className={`${styles.bg} ${i === index ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                />
            ))}
            <div className={styles.layerOnBanner}></div>
            <div className={styles.content}>
                <h1>Avatar: Dòng Chảy Của Nước (3D)</h1>

                <div className={styles.meta}>
                    <span>Hành động, Thám hiểm</span> | 
                    <span> 2 tiếng 36 phút</span> | 
                    <span> Thuyết minh</span>
                </div>

                <div className={styles.actions}>
                    <div>
                        <button className={styles.outline}>Xem trailer</button>
                        <button className={styles.primary}>Xem lịch chiếu</button>
                    </div>
                    <div>Theo dõi chúng tôi</div>
                </div>
                <div className={styles.dots}>
                    {backgrounds.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? styles.dotActive : styles.dot}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
