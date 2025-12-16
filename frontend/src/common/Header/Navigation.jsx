import style from './style.module.css'

function Navigation() {
    return (
        <ul className={style.navigation}>
            <li><a href="">Trang chủ</a></li>
            <li><a href="">Phim</a></li>
            <li><a href="">Rạp Cineplex</a></li>
            <li><a href="">Cultureplex</a></li>
            <li><a href="">Tin mới & Ưu đãi</a></li>
            <li><a href="">Vé của tôi</a></li>
        </ul>
    )
}

export default Navigation;