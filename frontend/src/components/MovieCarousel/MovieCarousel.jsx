import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// ... (imports không đổi)

/**
 * Component MovieCarousel: Hiển thị carousel phim
 * Props:
 * - movies: Mảng các đối tượng 'film'
 */
export default function MovieCarousel({ movies }) {
    // ... (logic state không đổi)
    const [currentIndex, setCurrentIndex] = useState(0);

    // ... (logic tính toán không đổi)
    const itemsVisible = 4;
    const maxScrollIndex = Math.max(0, movies.length - itemsVisible);
    // ... (step, handlePrev, handleNext, handleDotClick, dotCount không đổi)
    const step = 200 + 16; // 216px

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxScrollIndex));
    };

    // --- LOGIC MỚI CHO DOTS ---

    /**
     * Xử lý khi người dùng click vào 1 dot
     * @param {number} index - Chỉ số của dot được click
     */
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Tính toán số lượng dot cần hiển thị
    // Nếu maxScrollIndex = 4 (tức 0, 1, 2, 3, 4), thì ta cần 5 dots
    const dotCount = maxScrollIndex + 1;


    return (
        <div className="carousel-container">
// ... (Nút mũi tên trái không đổi)
            <h3>Phim Đang Chiếu</h3>
            <div className="carousel-wrapper">

                <button
                    className="carousel-arrow left"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <FaAngleLeft />
                </button>

                <div
                    // ... (style transform không đổi)
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * step}px)`
                    }}
                >
                    {movies.map((movie) => (
                        // Cập nhật key
                        <div key={movie.film_id} className="carousel-item">
                            <img
                                src={movie.photo_link} // Cập nhật: poster -> photo_link
                                alt={movie.name} // Cập nhật: title -> name
                                onError={(e) => e.target.src = 'https://placehold.co/200x300/333/FFF?text=Error'}
                            />
                            <h4>{movie.name}</h4> {/* Cập nhật: title -> name */}
                            <div className="carousel-btns">
                                {/* TODO: Sau này, nút Trailer sẽ dùng 
                  movie.trailer_video_link 
                */}
                                <button className="trailer-btn">Trailer</button>
                                <button className="book-btn">Đặt vé</button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    // ... (Nút mũi tên phải không đổi)
                    className="carousel-arrow right"
                    onClick={handleNext}
                    disabled={currentIndex === maxScrollIndex}
                >
                    <FaAngleRight />
                </button>

            </div>

            {/* --- CẬP NHẬT PHẦN DOTS --- */}
// ... (logic dots không đổi)
            <div className="carousel-dots">
                {/* Tạo một mảng ảo (Array.from) với độ dài là dotCount, 
          và lặp qua nó để render các nút dot
        */}
                {Array.from({ length: dotCount }, (_, index) => (
                    <button
                        key={index}
                        // Thêm class 'active' nếu index của dot = currentIndex
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        // Thêm sự kiện onClick
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* --- KẾT THÚC CẬP NHẬT DOTS --- */}
        </div>
    );
}