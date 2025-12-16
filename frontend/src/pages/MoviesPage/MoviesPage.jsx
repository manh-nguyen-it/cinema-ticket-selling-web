// src/pages/MoviesPage/MoviesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import { NOW_SHOWING_FILMS, COMING_SOON_FILMS } from '../../utils/mockData';
import './MoviesPage.css';

// Xóa interface Props, nhận props trực tiếp
const MoviesPage = ({ status }) => {
    const navigate = useNavigate();

    const films = status === 'NOW' ? NOW_SHOWING_FILMS : COMING_SOON_FILMS;

    return (
        <div className="page-container">
            <div className="tabs-header">
                <div className="tabs-list">
                    <button
                        className={`tab-btn ${status === 'NOW' ? 'active' : ''}`}
                        onClick={() => navigate('/phim-dang-chieu')}
                    >
                        PHIM ĐANG CHIẾU
                    </button>

                    <button
                        className={`tab-btn ${status === 'COMING' ? 'active' : ''}`}
                        onClick={() => navigate('/phim-sap-chieu')}
                    >
                        PHIM SẮP CHIẾU
                    </button>
                </div>
            </div>

            <div className="movie-grid">
                {films.map((film, index) => (
                    <MovieCard key={`${film.film_id}-${index}`} data={film} />
                ))}
            </div>

            <div className="load-more-container">
                <button className="btn-outline load-more-btn">XEM THÊM</button>
            </div>
        </div>
    );
};

export default MoviesPage;