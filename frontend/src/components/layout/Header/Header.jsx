import React from 'react';
import {
    FaSearch, FaUser, FaGlobe, FaChevronDown,
    FaCalendarAlt, FaFilm, FaStore
} from 'react-icons/fa';
// Import component dropdown mới
import CustomDropdown from '../../common/CustomDropdown';

/**
 * Component Header: Chứa top navigation và thanh filter
 * Props: Nhận từ ShowtimesPage
 */
export default function Header({
    dayOptions,
    movieOptions,
    theaterOptions,
    selectedDay,
    selectedMovie,
    selectedTheater,
    onDaySelect,
    onMovieSelect,
    onTheaterSelect
}) {
    return (
        <header className="header">
            {/* Top Navigation (Không đổi) */}
            <div className="top-nav">
                <div className="nav-left">
                    <img
                        src="https://placehold.co/150x40/2a1a3a/ffffff?text=LOGO"
                        alt="Logo"
                        className="logo"
                    />
                    <span className="location-picker">
                        <FaStore /> Chọn rạp
                    </span>
                </div>
                <div className="nav-center">
                    <button className="nav-btn orange">VÉ BÁN TRƯỚC</button>
                    <button className="nav-btn purple">ĐẶT HÀNG GIAO TẬN NƠI</button>
                </div>
                <div className="nav-right">
                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm phim, rạp..." />
                        <FaSearch className="search-icon" />
                    </div>
                    <button className="login-btn">
                        <FaUser /> Đăng nhập
                    </button>
                    <div className="lang-select">
                        <FaGlobe /> VN <FaChevronDown size={12} />
                    </div>
                </div>
            </div>

            {/* --- CẬP NHẬT FILTER BAR --- */}
            <div className="filter-bar">
                {/* Thay thế div tĩnh bằng CustomDropdown */}
                <CustomDropdown
                    label="1. Ngày"
                    icon={<FaCalendarAlt />}
                    options={dayOptions}
                    selectedValue={selectedDay?.label} // Dùng optional chaining
                    onSelect={onDaySelect}
                />
                <CustomDropdown class="film-dropdown"
                    label="2. Phim"
                    icon={<FaFilm />}
                    options={movieOptions}
                    selectedValue={selectedMovie?.label}
                    onSelect={onMovieSelect}
                />
                <CustomDropdown
                    label="3. Rạp"
                    icon={<FaStore />}
                    options={theaterOptions}
                    selectedValue={selectedTheater?.label}
                    onSelect={onTheaterSelect}
                />
            </div>
        </header>
    );
}