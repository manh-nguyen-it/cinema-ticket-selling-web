import React, { useState, useEffect } from 'react';
import { MOCK_MOVIE_DETAIL } from '../../utils/mockData.js';
import './MovieDetail.css';
import { useNavigate } from 'react-router-dom';

const MovieDetail = () => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [showTrailer, setShowTrailer] = useState(false);

    // State 1: Animation cho thanh đánh giá
    const [startAnimation, setStartAnimation] = useState(false);

    // State 2: Quản lý số lượng review đang hiển thị (Ban đầu là 4)
    const [visibleCount, setVisibleCount] = useState(4);

    const movie = MOCK_MOVIE_DETAIL;
    const toggleFavorite = () => setIsFavorite(!isFavorite);

    // Trigger animation sau khi load trang
    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 100);
    }, []);

    // Xử lý khi bấm nút "Xem thêm"
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4); // Mỗi lần bấm hiện thêm 4 review
    };

    // Tính số review còn lại chưa hiện
    const remainingReviews = movie.reviews.length - visibleCount;

    return (
        <div className="detail-page">
            {/* Background mờ */}
            <div className="page-bg" style={{ backgroundImage: `url(${movie.photo_link})` }}></div>

            <div className="detail-container">

                {/* --- PHẦN 1: POSTER & INFO --- */}
                <div className="top-section">
                    <div className="left-column">
                        {/* Poster + Nút Play Trailer */}
                        <div className="poster-frame" onClick={() => setShowTrailer(true)}>
                            <img src={movie.photo_link} alt={movie.name} className="main-poster" />
                            <div className="poster-overlay">
                                <div className="play-btn-circle">▶</div>
                                <span className="trailer-text">Xem Trailer</span>
                            </div>
                        </div>

                        {/* Các nút hành động */}
                        <div className="action-buttons">
                            <button
                                className="btn-action btn-ticket"
                                onClick={() => navigate(`/dat-ve/${movie.film_id}`)} // Chuyển sang trang đặt vé
                            >
                                MUA VÉ
                            </button>
                            <button
                                className={`btn-action btn-favorite ${isFavorite ? 'active' : ''}`}
                                onClick={toggleFavorite}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? "#eab308" : "none"} stroke="#eab308" strokeWidth="2" className="heart-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span>{isFavorite ? "Đã thích" : "Thêm vào yêu thích"}</span>
                            </button>
                        </div>
                    </div>

                    <div className="right-column">
                        <h1 className="movie-title-large">{movie.name}</h1>
                        <div className="section-block">
                            <h3 className="section-label">Nội dung chi tiết</h3>
                            <p className="movie-desc">{movie.description}</p>
                        </div>
                        <div className="movie-specs">
                            <div className="spec-row"><strong>Thời lượng:</strong> <span>{Math.floor(movie.period / 60)} giờ {movie.period % 60} phút</span></div>
                            <div className="spec-row"><strong>Thể loại:</strong> <span>{movie.genre_name}</span></div>
                            <div className="spec-row"><strong>Đạo diễn:</strong> <span>{movie.director}</span></div>
                            <div className="spec-row"><strong>Ngày phát hành:</strong> <span>{movie.release_date}</span></div>
                            <div className="spec-row"><strong>Ngôn ngữ:</strong> <span>{movie.language}</span></div>
                        </div>
                    </div>
                </div>

                {/* --- PHẦN 2: DIỄN VIÊN --- */}
                <div className="cast-section">
                    <div className="section-header-row">
                        <h3 className="section-header">Diễn Viên</h3>
                        <a href="#" className="view-more-link">Xem tất cả &gt;</a>
                    </div>
                    <div className="cast-carousel">
                        {movie.cast.map((actor, idx) => (
                            <div key={idx} className="cast-card">
                                <img src={actor.img} alt={actor.name} className="cast-img" />
                                <p className="cast-name">{actor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- PHẦN 3: ĐÁNH GIÁ (Full Tính năng) --- */}
                <div className="review-section">
                    <h3 className="section-header">Đánh Giá Người Dùng</h3>

                    {/* Khu vực Thống kê & Biểu đồ */}
                    <div className="review-stats-wrapper">
                        <div className="score-box-large">
                            <div className="score-badge-large">{movie.average_score}</div>
                            <div className="score-text">
                                <span className="rating-label">Rất Hay</span>
                                <span className="rating-count">{movie.total_votes} phiếu</span>
                            </div>
                        </div>

                        <div className="rating-distribution">
                            {movie.rating_stats.map((stat, index) => (
                                <div key={index} className="rating-row">
                                    <span className="rating-row-label">{stat.label}</span>
                                    <div className="rating-bar-track">
                                        <div
                                            className="rating-bar-fill"
                                            style={{
                                                backgroundColor: stat.color,
                                                width: startAnimation ? `${stat.percent}%` : '0%'
                                            }}
                                        ></div>
                                    </div>
                                    <span className="rating-row-value">
                                        {stat.count} phiếu ({stat.percent}%)
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Danh sách bình luận (Có Logic Load More) */}
                    <div className="review-list-container">
                        <div className="review-grid">
                            {/* Chỉ lấy số lượng review cho phép từ mảng */}
                            {movie.reviews.slice(0, visibleCount).map((rev) => (
                                <div key={rev.id} className="review-card">
                                    <div className="review-top">
                                        <div className="review-user-info">
                                            <div className="user-score-box">{rev.score}</div>
                                            <span className="user-name">{rev.user}</span>
                                        </div>
                                        <span className="review-date">{rev.date}</span>
                                    </div>
                                    <p className="review-content">{rev.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* Hiệu ứng mờ che bên dưới (chỉ hiện khi còn review để xem) */}
                        {remainingReviews > 0 && <div className="fade-overlay"></div>}
                    </div>

                    {/* Nút Xem thêm (chỉ hiện khi còn review để xem) */}
                    {remainingReviews > 0 && (
                        <div className="see-more-reviews" onClick={handleLoadMore}>
                            <span>Xem thêm {remainingReviews} đánh giá</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>

            </div>

            {/* MODAL TRAILER */}
            {showTrailer && (
                <div className="trailer-overlay" onClick={() => setShowTrailer(false)}>
                    <div className="trailer-modal" onClick={(e) => e.stopPropagation()}>
                        <iframe width="100%" height="100%" src={`${movie.trailer_video_link}?autoplay=1`} title="Trailer" frameBorder="0" allowFullScreen></iframe>
                        <button className="close-trailer-btn" onClick={() => setShowTrailer(false)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;