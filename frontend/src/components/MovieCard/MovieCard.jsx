import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaTicketAlt } from 'react-icons/fa';
import './MovieCard.css';

const MovieCard = ({ data, onTrailerClick }) => {
    const navigate = useNavigate();

    const handleBooking = (e) => {
        e.stopPropagation();
        navigate(`/dat-ve/${data.id}`);
    };

    const handleWatchTrailer = (e) => {
        e.stopPropagation();
        if (onTrailerClick) onTrailerClick();
    };

    return (
        // Đổi tên class 'movie-card' -> 'mc-container'
        <div className="mc-container">
            <div className="mc-poster">
                <img src={data.poster} alt={data.title} />

                <div className="mc-overlay">
                    <button className="mc-btn book-btn" onClick={handleBooking}>
                        <FaTicketAlt /> Đặt Vé
                    </button>

                    <button className="mc-btn trailer-btn" onClick={handleWatchTrailer}>
                        <FaPlay /> Trailer
                    </button>
                </div>
            </div>

            <div className="mc-info">
                {/* Đổi 'card-title' -> 'mc-title' để không bị trùng */}
                <h3 className="mc-title">{data.title}</h3>
                <p className="mc-genre">{data.genre}</p>

                <div className="mc-rating-row">
                    <span className="mc-age-badge">{data.ageRating || "P"}</span>
                    <span className="mc-duration">{data.duration}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;