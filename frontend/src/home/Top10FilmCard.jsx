import styles from './style.module.css'

function Top10FilmCard() {
    return (
        <div class={styles.top10FilmCard}>
            <div>
                <img src="/images/top-10-film-card-image.jpg" width="100%" />
            </div>
            <div style={{padding: '5px 5px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        Driving Madeleine
                    </div>
                    <div>
                        <img src="/images/rating-star.svg" /><span> 7.2</span>
                    </div>
                </div>
                <div style={{fontSize: '80%'}}>
                    Hài, Kịch
                </div>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div>
                        <img src="/images/time-icon.svg" /><span> 1h31m</span>
                    </div>
                    <div style={{backgroundColor: '#9797aa', color: '#000', borderRadius: '3px'}}>
                        PG-13
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top10FilmCard