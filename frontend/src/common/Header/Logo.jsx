import style from './style.module.css'

function Logo() {
    return (
        <div className={style.logo}>
            <a href="">
                <img src="/images/logo.png" />
            </a>
        </div>
    )
}

export default Logo;