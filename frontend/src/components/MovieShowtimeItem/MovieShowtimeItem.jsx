import React from 'react';
import TheaterShowtimes from '../TheaterShowtimes/TheaterShowtimes';

/**
 * Component MovieShowtimeItem: Hiển thị thông tin 1 phim và danh sách rạp chiếu
 * Props:
 * - movie: (Object) Đối tượng phim từ DB (đã join)
 */
export default function MovieShowtimeItem({ movie }) {
    return (
        <div className="movie-listing">
            {/* Cột bên trái: Thông tin phim */}
            <div className="movie-details">
                <img
                    src={movie.photo_link} // Cập nhật: poster -> photo_link
                    alt={movie.name} // Cập nhật: title -> name
                    className="movie-poster"
                    onError={(e) => e.target.src = 'https://placehold.co/150x220/333/FFF?text=Error'}
                />
                <div className="movie-info-text">
                    <h3>{movie.name}</h3> {/* Cập nhật: title -> name */}
                    <div className="movie-tags">
                        {/* 'tags' vẫn là một mảng tổng hợp */}
                        {movie.tags.map((tag, index) => (
                            <span key={index} className={`tag ${tag.startsWith('C') ? 'tag-age' : ''}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cột bên phải: Danh sách rạp */}
            <div className="theater-list">
                {movie.theaters.map((theater) => (
                    // Cập nhật key thành cinema_id
                    <TheaterShowtimes key={theater.cinema_id} theater={theater} />
                ))}
            </div>
        </div>
    );
}