import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_MOVIE_DETAIL, MOCK_CINEMAS } from '../../utils/mockData';
import TicketModal from '../../components/TicketModal/TicketModal';
import './BookingPage.css';

const BookingPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = MOCK_MOVIE_DETAIL; // Thực tế nên find theo id

    // State
    const [selectedDate, setSelectedDate] = useState(0); // Index ngày
    const [selectedCinemaId, setSelectedCinemaId] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Danh sách ngày giả lập (như trong ảnh)
    const DATES = ["Nay", "Th.3", "Th.4", "Th.5", "Th.6", "Th.7", "CN"];

    // Xử lý chọn giờ chiếu
    const handleSelectTime = (cinemaId, time) => {
        // Nếu chọn lại chính giờ đó thì bỏ chọn
        if (selectedCinemaId === cinemaId && selectedTime === time) {
            setSelectedCinemaId(null);
            setSelectedTime(null);
        } else {
            setSelectedCinemaId(cinemaId);
            setSelectedTime(time);
        }
    };

    // Xử lý khi nhấn nút Tiếp tục (màu vàng)
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleConfirmBooking = (quantities) => {
        const totalTickets = quantities.adult + quantities.student + quantities.child;
        if (totalTickets === 0) {
            alert("Vui lòng chọn ít nhất 1 vé!");
            return;
        }
        setShowModal(false);
        navigate(`/chon-ghe/${movie.film_id}`, {
            state: {
                quantities, // { adult: 2, student: 1... }
                cinemaId: selectedCinemaId,
                time: selectedTime,
                dateIndex: selectedDate,
                movieInfo: movie // Gửi luôn info phim để đỡ phải fetch lại
            }
        });
    };

    return (
        <div className="booking-page">
            {/* Background mờ giống trang detail */}
            <div className="page-bg" style={{ backgroundImage: `url(${movie.photo_link})` }}></div>

            <div className="booking-container">
                {/* Header rút gọn */}
                <div className="booking-header">
                    <div className="mini-poster">
                        <img src={movie.photo_link} alt={movie.name} />
                    </div>
                    <div className="mini-info">
                        <h1>{movie.name}</h1>
                        <p>{movie.description.substring(0, 150)}...</p>
                        <a href="#" onClick={() => navigate(-1)} className="back-link">Xem chi tiết</a>
                    </div>
                </div>

                {/* Thanh chọn ngày */}
                <div className="date-strip">
                    {DATES.map((day, idx) => (
                        <div
                            key={idx}
                            className={`date-box ${selectedDate === idx ? 'active' : ''}`}
                            onClick={() => setSelectedDate(idx)}
                        >
                            <span className="date-day">{day}</span>
                            <span className="date-num">{16 + idx}</span> {/* Giả lập ngày */}
                        </div>
                    ))}
                </div>

                {/* Bộ lọc (Dropdown giả) */}
                <div className="filter-bar">
                    <div className="filter-item">Địa điểm: <b>Hồ Chí Minh</b> ▾</div>
                    <div className="filter-item">Rạp: <b>Tất cả</b> ▾</div>
                </div>

                {/* Danh sách rạp & suất chiếu */}
                <div className="cinema-list">
                    {MOCK_CINEMAS.map((cinema) => {
                        // Kiểm tra xem rạp này có đang được chọn không
                        const isCinemaActive = selectedCinemaId === cinema.id;

                        return (
                            <div
                                key={cinema.id}
                                className={`cinema-card ${isCinemaActive ? 'highlight' : ''}`}
                            >
                                {/* Header rạp */}
                                <div className="cinema-header">
                                    <h3 className="cinema-name">{cinema.name}</h3>
                                    <span className="cinema-dist">{cinema.distance}</span>
                                </div>
                                <p className="cinema-address">📍 {cinema.address}</p>

                                {/* Danh sách giờ chiếu */}
                                {cinema.formats.map((fmt, fIdx) => (
                                    <div key={fIdx} className="format-row">
                                        <span className="format-label">{fmt.type}</span>
                                        <div className="time-grid">
                                            {fmt.times.map((time, tIdx) => {
                                                const isTimeSelected = isCinemaActive && selectedTime === time;
                                                return (
                                                    <button
                                                        key={tIdx}
                                                        className={`time-btn ${isTimeSelected ? 'selected' : ''}`}
                                                        onClick={() => handleSelectTime(cinema.id, time)}
                                                    >
                                                        {time}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}

                                {/* Nút Tiếp tục (Chỉ hiện khi rạp này đang active) */}
                                {isCinemaActive && (
                                    <div className="cinema-footer">
                                        <button className="btn-yellow-continue" onClick={handleOpenModal}>
                                            Tiếp tục <span>❯</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* POPUP MODAL */}
            <TicketModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmBooking}
            />
        </div>
    );
};

export default BookingPage;