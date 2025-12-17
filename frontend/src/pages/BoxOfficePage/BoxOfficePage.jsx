import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './BoxOfficePage.css';

// IMPORT ẢNH BẢNG XẾP HẠNG
// Đảm bảo bạn đã để file ảnh vào thư mục src/assets/
import rankingChartImg from '../../assets/ranking-chart.png';

const BoxOfficePage = () => {
    const navigate = useNavigate();

    return (
        <div className="box-office-page">

            {/* Header giả lập (Giữ nguyên để đồng bộ) */}
            <div className="bo-header-top">
                <div className="brand-logo">STAR <span>NEWS</span></div>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            </div>

            <div className="bo-wrapper">

                {/* CONTAINER CHỨA ẢNH */}
                <div className="bo-image-container">
                    {/* Hiển thị ảnh gốc */}
                    <img
                        src={rankingChartImg}
                        alt="Bảng xếp hạng doanh thu phòng vé tháng 11"
                        className="ranking-full-img"
                    />
                </div>

                {/* Nút quay lại */}
                <button className="btn-back-home" onClick={() => navigate('/')}>
                    Trở về trang bán vé xem phim
                </button>

            </div>
        </div>
    );
};

export default BoxOfficePage;