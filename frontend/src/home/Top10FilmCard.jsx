import styles from './style.module.css'

function Top10FilmCard(props) {
    return (
        <div class={styles.top10FilmCard}>
            <div>
                <img height="300px" src={props.film_info.photo} width="100%" />
            </div>
            <div style={{padding: '5px 5px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        {props.film_info.title}
                    </div>
                    <div>
                        <img src="/images/rating-star.svg" /><span> {props.film_info.rating}</span>
                    </div>
                </div>
                <div style={{fontSize: '80%'}}>
                    {props.film_info.type}
                </div>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div>
                        <img src="/images/time-icon.svg" /><span>{props.film_info.duration}</span>
                    </div>
                    <div style={{backgroundColor: '#9797aa', color: '#000', borderRadius: '3px'}}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top10FilmCard