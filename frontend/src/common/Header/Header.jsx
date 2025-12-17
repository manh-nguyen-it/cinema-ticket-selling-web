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
                    <Link to="/dang-nhap"><button class={styles.btn}>Đăng nhập</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;