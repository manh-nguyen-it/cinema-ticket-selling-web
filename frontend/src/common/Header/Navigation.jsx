import style from './style.module.css'
import { NavLink, useLocation } from 'react-router-dom'

function Navigation() {
    const { pathname } = useLocation()

    const isMoviePage =
        pathname.startsWith('/phim-dang-chieu') ||
        pathname.startsWith('/phim-sap-chieu')

    const isCinemaPage =
        pathname.startsWith('/he-thong-rap') ||
        pathname.startsWith('/rap-dac-biet')

    const isCulturePage =
        pathname.startsWith('/cultureplex')

    return (
        <ul className={style.navigation}>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? style.active : undefined}>
                    <span>
                    Trang chủ</span>
                </NavLink>
            </li>

            {/* ===== PHIM ===== */}
            <li className={style.dropdown}>
                <span className={`${style.dropdownTitle} ${isMoviePage ? style.active : ''}`}>
                    Phim
                </span>
                <ul className={style.dropdownMenu}>
                    <li>
                        <NavLink to="/phim-dang-chieu"
                            className={({ isActive }) => isActive ? style.active : undefined}
                        >
                            Phim đang chiếu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/phim-sap-chieu"
                            className={({ isActive }) => isActive ? style.active : undefined}
                        >
                            Phim sắp chiếu
                        </NavLink>
                    </li>
                </ul>
            </li>

            {/* ===== RẠP ===== */}
            <li className={style.dropdown}>
                <span className={`${style.dropdownTitle} ${isCinemaPage ? style.active : ''}`}>
                    Rạp Cineplex
                </span>
                <ul className={style.dropdownMenu}>
                    <li>
                        <NavLink to="/he-thong-rap"
                            className={({ isActive }) => isActive ? style.active : undefined}
                        >
                            Tất cả rạp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rap-dac-biet"
                            className={({ isActive }) => isActive ? style.active : undefined}
                        >
                            Rạp đặc biệt
                        </NavLink>
                    </li>
                </ul>
            </li>

            {/* ===== CULTURE ===== */}
            <li className={style.dropdown}>
                <span className={`${style.dropdownTitle} ${isCulturePage ? style.active : ''}`}>
                    Cultureplex
                </span>
                <ul className={style.dropdownMenu}>
                    <li>
                        <NavLink to="/quy-dinh-cua-rap"
                            className={({ isActive }) => isActive ? style.active : undefined}
                        >
                            Quy định của rạp
                        </NavLink>
                    </li>
                </ul>
            </li>

            <li>
                <NavLink to="/news"
                    className={({ isActive }) => isActive ? style.active : undefined}
                >
                    Tin mới & Ưu đãi
                </NavLink>
            </li>

            <li>
                <NavLink to="/ho-so"
                    className={({ isActive }) => isActive ? style.active : undefined}
                >
                    Vé của tôi
                </NavLink>
            </li>

            <li>
                <NavLink to="/lich-chieu"
                    className={({ isActive }) => isActive ? style.active : undefined}
                >
                    Lịch chiếu
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation
