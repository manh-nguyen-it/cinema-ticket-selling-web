import styles from './style.module.css'

function FilmCard() {
    return (
        <div style={{backgroundImage: 'url("./images/film-card-image.jpg")'}} class={styles.FilmCard}>
            <div class={styles.layerOnFilmCard}></div>
            <div class={styles.contentInFilmCard}>
                <div>
                    Avatar: Dòng Chảy Của Nước (3D)
                </div>
                <div style={{fontSize: '80%'}}>
                    Hành động, Thám hiểm
                </div>
            </div>
        </div>
    )
}

export default FilmCard