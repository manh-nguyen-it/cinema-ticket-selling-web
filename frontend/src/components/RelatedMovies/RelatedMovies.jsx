import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MOCK_RELATED_MOVIES } from '../../utils/mockData';
import './RelatedMovies.css';
import { useNavigate } from 'react-router-dom';

const RelatedMovies = () => {
    const navigate = useNavigate();
    const movies = MOCK_RELATED_MOVIES;

    // Hàm xử lý khi click vào phim (ví dụ chuyển sang trang chi tiết phim đó)
    const handleMovieClick = (id) => {
        console.log("Navigate to movie id:", id);
        // navigate(`/movie/${id}`); // Bỏ comment khi bạn đã setup route chi tiết phim
    };

    return (
        <div className="related-movies-section fade-in">
            <h3 className="related-heading">CÓ THỂ BẠN CŨNG THÍCH</h3>

            <div className="related-grid">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="related-movie-card"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        {/* Poster Wrapper */}
                        <div className="movie-poster-wrapper">
                            <img src={movie.poster} alt={movie.title} className="movie-poster-img" />
                            {/* Hiệu ứng hover overlay */}
                            <div className="poster-overlay"></div>
                        </div>

                        {/* Score Badge */}
                        <div className="score-badge-row">
                            {/* Dùng icon Star màu đỏ cam để mô phỏng icon cà chua */}
                            <FaStar className="score-icon" />
                            <span className="score-text">{movie.score}%</span>
                        </div>

                        {/* Movie Title */}
                        <h4 className="movie-title-text">{movie.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedMovies;