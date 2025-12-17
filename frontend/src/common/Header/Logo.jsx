import style from './style.module.css'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className={style.logo}>
            <Link to="/">
                <img width="100px" src="/images/logo.png" />
            </Link>
        </div>
    )
}

export default Logo;