import React from 'react';
import './MovieCard.css';

const MovieCard = ({ data }) => {
    // Hàm helper để hiển thị nhãn tuổi (C13, C16, P)
    // Đã bỏ ": number" ở tham số age
    const getAgeLabel = (age) => {
        return age === 0 ? 'P' : `C${age}`;
    };

    return (
        <div className="movie-card">
            <div className="poster-wrapper">
                <img src={data.photo_link} alt={data.name} className="poster-img" />

                {/* Nhãn độ tuổi ở góc trái trên */}
                <div className="age-badge">{getAgeLabel(data.age)}</div>

                {/* Lớp phủ đen khi hover */}
                <div className="overlay">
                    <a href={data.trailer_video_link} className="btn-outline">
                        Xem Trailer
                    </a>
                    <button className="btn-primary">MUA VÉ</button>
                </div>
            </div>

            <div className="movie-info">
                <h3 className="movie-title" title={data.name}>{data.name}</h3>
                <p className="movie-genre">{data.genre_name}</p>

                <div className="movie-meta">
                    {/* Logic hiển thị Ngày khởi chiếu hoặc Thời lượng */}
                    <span className="duration">
                        {data.release_date ? (
                            <>📅 {data.release_date}</>
                        ) : (
                            <>🕒 {data.period} phút</>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;