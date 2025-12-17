import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import { NOW_SHOWING_FILMS, COMING_SOON_FILMS } from '../../utils/mockData';
import './MoviesPage.css';
import TrailerModal from '../../components/TrailerModal/TrailerModal';

const MoviesPage = ({ status }) => {
    const navigate = useNavigate();

    // State hiển thị
    const [visibleCount, setVisibleCount] = useState(8);
    const [isAnimating, setIsAnimating] = useState(false);

    // State Trailer
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [currentTrailerUrl, setCurrentTrailerUrl] = useState("");

    // Lấy data
    const allFilms = status === 'NOW' ? NOW_SHOWING_FILMS : COMING_SOON_FILMS;
    const currentFilms = allFilms.slice(0, visibleCount);

    useEffect(() => {
        setVisibleCount(8);
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [status]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    const openTrailer = (url) => {
        const finalUrl = url || "https://www.youtube.com/embed/dQw4w9WgXcQ";
        setCurrentTrailerUrl(finalUrl);
        setIsTrailerOpen(true);
    };

    const closeTrailer = () => {
        setIsTrailerOpen(false);
        setCurrentTrailerUrl("");
    };

    return (
        /* WRAPPER BAO NGOÀI CÙNG: CHỊU TRÁCH NHIỆM MÀU NỀN */
        <div className="movies-page-wrapper">

            {/* CONTAINER NỘI DUNG: CHỊU TRÁCH NHIỆM CĂN GIỮA VÀ GIỚI HẠN WIDTH */}
            <div className="page-container">

                {/* Header Tabs */}
                <div className="tabs-header">
                    <h1
                        className={`tab-title ${status === 'NOW' ? 'active' : 'inactive'}`}
                        onClick={() => navigate('/phim-dang-chieu')}
                    >
                        Phim Đang Chiếu
                    </h1>

                    <h1
                        className={`tab-title ${status === 'COMING' ? 'active' : 'inactive'}`}
                        onClick={() => navigate('/phim-sap-chieu')}
                    >
                        Phim Sắp Chiếu
                    </h1>
                </div>

                {/* Grid Phim */}
                <div className={`movie-grid ${isAnimating ? 'fade-in-up' : ''}`}>
                    {currentFilms.map((film, index) => (
                        <MovieCard
                            key={`${film.id}-${index}`}
                            data={film}
                            onTrailerClick={() => openTrailer(film.trailerUrl)}
                        />
                    ))}
                </div>

                {/* Nút Xem Thêm */}
                {visibleCount < allFilms.length && (
                    <div className="load-more-container">
                        <button className="btn-outline load-more-btn" onClick={handleLoadMore}>
                            XEM THÊM
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            <TrailerModal
                isOpen={isTrailerOpen}
                onClose={closeTrailer}
                trailerUrl={currentTrailerUrl}
            />
        </div>
    );
};

export default MoviesPage;