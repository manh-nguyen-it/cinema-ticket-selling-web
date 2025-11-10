import style from './style.module.css'

function Navigation() {
    return (
        <ul className={`${style.navigation} ${style.topLevelHeaderItem}`}>
            <li><a href="">Danh sách rạp</a></li>
            <li><a href="">Danh sách phim</a></li>
            <li><a href="">Lịch chiếu</a></li>
            <li><a href="">Giới thiệu</a></li>
            <li><a href="">Liên hệ</a></li>
        </ul>
    )
}

export default Navigation;