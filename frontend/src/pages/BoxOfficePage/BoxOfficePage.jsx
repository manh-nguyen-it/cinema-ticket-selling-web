import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { MOCK_RANKINGS } from '../../utils/mockData';
import './BoxOfficePage.css';

// Import hình nền
import rankingBg from '../../assets/ranking-bg.png';

const BoxOfficePage = () => {
    const navigate = useNavigate();

    // Sắp xếp: [Top 2, Top 1, Top 3]
    const displayOrder = [
        MOCK_RANKINGS.find(m => m.rank === 2),
        MOCK_RANKINGS.find(m => m.rank === 1),
        MOCK_RANKINGS.find(m => m.rank === 3)
    ];

    return (
        <div className="box-office-page">

            {/* Header (Giữ nguyên) */}
            <div className="bo-header-top">
                <div className="brand-logo">STAR <span>NEWS</span></div>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            </div>

            <div className="bo-content-wrapper">

                {/* Nút quay lại (Đưa lên trên cho dễ thao tác) */}
                <div className="back-btn-container">
                    <button className="btn-back-trans" onClick={() => navigate('/')}>
                        <FaArrowLeft /> Trở về trang chủ
                    </button>
                </div>

                {/* --- KHỐI CONTAINER CHỨA BACKGROUND VÀ BỤC VINH QUANG --- */}
                <div
                    className="bo-themed-container"
                    style={{ backgroundImage: `url(${rankingBg})` }}
                >
                    <h1 className="bo-main-title">
                        BẢNG XẾP HẠNG DOANH THU PHÒNG VÉ THÁNG 11
                    </h1>

                    {/* KHU VỰC BỤC VINH QUANG (PODIUM) */}
                    <div className="podium-container">
                        {displayOrder.map((movie) => (
                            <div
                                key={movie.rank}
                                className={`podium-card rank-${movie.rank}`}
                            >
                                {/* Khung Poster (Chứa cả ảnh và nhãn TOP) */}
                                <div className="poster-box">
                                    <img src={movie.poster} alt={movie.title} />

                                    {/* Nhãn TOP (Đè lên góc trái ảnh) */}
                                    <div className="rank-overlay">
                                        TOP <span className="rank-num">{movie.rank}</span>
                                    </div>
                                </div>

                                {/* Doanh thu (Bên dưới ảnh) */}
                                <div className="revenue-pill">
                                    {movie.revenue}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BoxOfficePage;