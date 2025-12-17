import Logo from './Logo.jsx'
import Navigation from './Navigation.jsx'
import styles from './style.module.css'

function Header() {
    return (
        <div class={styles.header}>
            <Logo />
            <Navigation />
            <div style={{display: 'flex', alignSelf: 'center'}}>
                <div class={styles.search}>
                    <input type="text" placeholder="Tìm phim"/>
                </div>
                <div class={styles.btn}>
                    <button>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Header;