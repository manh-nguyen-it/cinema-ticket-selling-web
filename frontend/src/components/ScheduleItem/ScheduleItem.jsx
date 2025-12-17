import React from 'react';
import { FaPlay, FaStar, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ScheduleItem.css';

const ScheduleItem = ({ data, onTrailerClick }) => {
    const navigate = useNavigate();

    const handleViewDetail = (e) => {
        e.preventDefault();
        navigate(`/phim/${data.id}`);
    };

    return (
        <div className="schedule-item">

            {/* 1. POSTER (Click xem trailer) */}
            <div className="sc-poster-area" onClick={() => onTrailerClick && onTrailerClick(data.trailerUrl)}>
                <img src={data.poster} alt={data.title} className="sc-poster-img" />
                <div className="sc-poster-overlay">
                    <div className="play-circle">
                        <FaPlay className="play-icon" />
                    </div>
                </div>
            </div>

            {/* 2. THÔNG TIN PHIM */}
            <div className="sc-info-area">
                <h3 className="sc-title" onClick={handleViewDetail}>{data.title}</h3>

                <div className="sc-meta-row">
                    <span className="sc-label"><FaClock className="icon-small" /> Thời lượng:</span>
                    <span className="sc-value">{data.duration}</span>
                </div>

                <div className="sc-meta-row">
                    <span className="sc-label"><FaStar className="icon-small" /> Đánh giá:</span>
                    <span className="sc-value">{data.ageRating}</span>
                </div>

                <div className="sc-meta-row">
                    <span className="sc-label">Đạo diễn:</span>
                    <span className="sc-value">{data.director}</span>
                </div>

                <div className="sc-meta-row">
                    <span className="sc-label">Diễn viên:</span>
                    <span className="sc-value text-highlight">{data.cast}</span>
                </div>

                <div className="sc-meta-row">
                    <span className="sc-label">Ngôn ngữ:</span>
                    <span className="sc-value">{data.language}</span>
                </div>

                <span className="sc-detail-link" onClick={handleViewDetail}>
                    Xem thông tin chi tiết
                </span>
            </div>

            {/* 3. GIỜ CHIẾU */}
            <div className="sc-time-area">
                <div className="time-format-label">2D - Phụ đề</div>
                <div className="time-slots-grid">
                    {data.showtimes && data.showtimes.map((time, idx) => (
                        <button key={idx} className="time-slot-btn">
                            {time}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ScheduleItem;