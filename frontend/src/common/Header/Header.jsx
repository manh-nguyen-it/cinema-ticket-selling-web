import Logo from './Logo.jsx'
import Navigation from './Navigation.jsx'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class={styles.header}>
            <Logo />
            <Navigation />
            <div style={{display: 'flex', alignSelf: 'center'}}>
                <div class={styles.search}>
                    <input type="text" placeholder="Tìm phim"/>
                </div>
                <div class={`${styles.loginBtn}`}>
                    <Link to="/login"><button class={styles.btn}>Đăng nhập</button></Link>
                </div>
                <div className={`${styles.registerBtn}`}>
                    <Link to="/register"><button class={styles.btn}>Đăng ký</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;