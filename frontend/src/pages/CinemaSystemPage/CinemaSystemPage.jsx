import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt, FaPhoneAlt, FaTools, FaCity } from 'react-icons/fa';
// Import dữ liệu từ file mockData
import { MOCK_CITIES, MOCK_THEATERS_BY_CITY, MOCK_THEATER_DETAIL } from '../../utils/mockData';
import './CinemaSystemPage.css';

const CinemaSystemPage = () => {
    const [selectedCity, setSelectedCity] = useState("Hồ Chí Minh");
    const [selectedTheater, setSelectedTheater] = useState("Vincom Thủ Đức");
    const theaterList = MOCK_THEATERS_BY_CITY[selectedCity] || [];
    const hasTheaters = theaterList.length > 0;
    // Lấy danh sách rạp theo thành phố đang chọn
    const theaters = MOCK_THEATERS_BY_CITY[selectedCity] || ["Đang cập nhật rạp tại khu vực này"];

    // Giả lập: Dù chọn rạp nào cũng hiện detail của MOCK_THEATER_DETAIL
    // (Sau này có backend bạn sẽ dùng useEffect để fetch detail theo selectedTheater)
    const theaterInfo = MOCK_THEATER_DETAIL;

    return (
        <div className="cinema-system-page">
            <div className="cinema-container">

                <h2 className="page-header-title">Tất cả các rạp</h2>

                {/* --- PHẦN 1: CHỌN TỈNH THÀNH --- */}
                <div className="section-block">
                    <div className="section-title-wrapper">
                        <FaStar className="star-icon" />
                        <h2 className="fancy-title">Cineplex branches</h2>
                        <FaStar className="star-icon" />
                    </div>

                    <div className="ticket-container">
                        <div className="ticket-cutout left"></div>
                        <div className="ticket-cutout right"></div>

                        <div className="ticket-content">
                            <div className="ticket-inner-lines">
                                <div className="grid-list cities-grid">
                                    {MOCK_CITIES.map((city, index) => (
                                        <div
                                            key={index}
                                            className={`grid-item ${selectedCity === city ? 'active' : ''}`}
                                            onClick={() => {
                                                setSelectedCity(city);
                                                setSelectedTheater(null); // Reset rạp khi đổi thành phố
                                            }}
                                        >
                                            {city}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- PHẦN 2: CHỌN RẠP --- */}
                {selectedCity && (
                    <div className="section-block fade-in">
                        {hasTheaters ? (
                            /* TRƯỜNG HỢP 1: CÓ RẠP -> HIỆN TICKET 2 (Code cũ) */
                            <div className="ticket-container mt-large">
                                <div className="ticket-cutout left"></div>
                                <div className="ticket-cutout right"></div>

                                <div className="ticket-content">
                                    <div className="ticket-inner-lines">
                                        <div className="grid-list theaters-grid">
                                            {theaterList.map((theater, index) => (
                                                <div
                                                    key={index}
                                                    className={`grid-item ${selectedTheater === theater ? 'active' : ''}`}
                                                    onClick={() => setSelectedTheater(theater)}
                                                >
                                                    {theater}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* TRƯỜNG HỢP 2: KHÔNG CÓ RẠP -> HIỆN THÔNG BÁO "COMING SOON" */
                            <div className="empty-state-box mt-large">
                                <div className="empty-icon-wrapper">
                                    <FaCity className="city-icon" />
                                    <div className="tool-badge">
                                        <FaTools />
                                    </div>
                                </div>
                                <h3 className="empty-title">Coming Soon tại {selectedCity}!</h3>
                                <p className="empty-desc">
                                    Hệ thống rạp Cineplex đang được xây dựng và sẽ sớm có mặt tại khu vực này.
                                    <br />Vui lòng quay lại sau nhé!
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* --- PHẦN 3: CHI TIẾT RẠP --- */}
                {selectedTheater && MOCK_THEATERS_BY_CITY[selectedCity] && (
                    <div className="section-block fade-in">
                        <div className="section-title-wrapper">
                            <FaStar className="star-icon" />
                            <h2 className="fancy-title">Theater</h2>
                            <FaStar className="star-icon" />
                        </div>

                        {/* Hiển thị tên rạp đang chọn */}
                        <h3 className="theater-name-heading">{selectedTheater}</h3>

                        <div className="theater-detail-card">
                            <div className="theater-image">
                                <img src={theaterInfo.img} alt={theaterInfo.name} />
                            </div>
                            <div className="theater-info-map">
                                <div className="info-text">
                                    {/* Logic hiển thị địa chỉ giả lập */}
                                    <p><FaMapMarkerAlt className="icon-gold" /> {theaterInfo.address}</p>
                                    <p><FaPhoneAlt className="icon-gold" /> {theaterInfo.phone}</p>
                                </div>
                                <div className="map-view">
                                    <img src={theaterInfo.mapImg} alt="Map" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default CinemaSystemPage;