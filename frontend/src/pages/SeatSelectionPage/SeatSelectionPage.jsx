import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOCK_SEAT_MAP, BOOKED_SEATS, MOCK_TICKET_TYPES } from '../../utils/mockData';
import './SeatSelectionPage.css';
import BookingProgressBar from '../../components/BookingProgressBar/BookingProgressBar';

const SeatIcon = ({ status, onClick, displayId }) => {
  let fillColor = "#FAFAE8";
  let strokeColor = "none";
  let cursorStyle = "pointer";

  if (status === "booked") {
    fillColor = "#454555";
    cursorStyle = "not-allowed";
  } else if (status === "selected") {
    fillColor = "#FFD660";
  }

  return (
    <div className={`seat-wrapper-svg ${status}`} onClick={onClick}>
      <svg width="36" height="36" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="seat-svg">
        <path fill={fillColor} d="M23.475 2.549c.842 0 1.525.673 1.525 1.502v12.433c0 1.623-1.26 2.981-2.904 3.106-7.114.542-12.085.55-19.192.004A3.13 3.13 0 0 1 0 16.484V4.051c0-.83.683-1.502 1.526-1.502.842 0 1.525.673 1.525 1.502v12.433H21.95V4.051c0-.83.683-1.502 1.526-1.502"></path>
        <path fill={fillColor} d="M6.682.36c4.281-.486 7.436-.473 11.615 0a2.89 2.89 0 0 1 2.563 2.87v12.127H4.122V3.227A2.885 2.885 0 0 1 6.682.36"></path>
      </svg>
      {status === "selected" && <div className="seat-tooltip">{displayId}</div>}
    </div>
  );
};

const SeatSelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quantities, movieInfo, time, cinemaId } = location.state || {};

  useEffect(() => {
    if (!location.state) navigate('/');
  }, [location.state, navigate]);

  if (!movieInfo) return null;

  const totalSeatsNeeded = (quantities?.adult || 0) + (quantities?.student || 0) + (quantities?.child || 0);

  // Tính tổng tiền dựa trên số lượng loại vé
  const totalPrice = MOCK_TICKET_TYPES.reduce((acc, type) => {
    return acc + (quantities[type.id] || 0) * type.price;
  }, 0);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (BOOKED_SEATS.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length < totalSeatsNeeded) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        alert(`Bạn chỉ đã mua ${totalSeatsNeeded} vé. Vui lòng bỏ chọn ghế cũ trước.`);
      }
    }
  };

  return (
    <div className="seat-page">
      <div className="page-bg" style={{ backgroundImage: `url(${movieInfo.photo_link})` }}></div>

      <div className="seat-container">
        {/* --- CỘT TRÁI --- */}
        <div className="sidebar-info">
          <div className="sidebar-poster">
            <img src={movieInfo.photo_link} alt={movieInfo.name} />
            <div className="poster-play-overlay">
              <div className="play-icon">▶</div>
              <span>Xem Trailer</span>
            </div>
          </div>
          <h2 className="sidebar-title">{movieInfo.name}</h2>
          <div className="sidebar-meta-row">
            <span>2h 35m</span>
            <span className="separator">|</span>
            <span className="pg-badge">C13</span>
            <span className="separator">|</span>
            <div className="rating-star">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01L12 2z" /></svg>
              <span className="score">7.9</span>
            </div>
          </div>
          <div className="sidebar-cinema-info">
            <h3 className="cinema-name-sidebar">CinePlex Thảo Điền</h3>
            <p className="cinema-address-sidebar">Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Quận 2, TP. HCM</p>
          </div>
          <div className="sidebar-session-box">
            <span className="label-session">Suất chiếu:</span>
            <div className="session-time-display">
              <div className="session-date-badge">Hôm nay • 16/12</div>
              <div className="session-hour-badge">{time}</div>
            </div>
          </div>
          <button className="btn-back" onClick={() => navigate(-1)}>❮ Quay lại</button>
        </div>

        {/* --- CỘT PHẢI --- */}
        <div className="main-seat-area">
          <BookingProgressBar currentStep={0} />

          <div className="screen-section">
            <div className="screen-container"><span className="screen-text">Màn hình</span></div>
            <div className="screen-light"></div>
          </div>

          <div className="seat-map">
            {MOCK_SEAT_MAP.map((rowItem) => (
              <div key={rowItem.row} className="seat-row">
                <span className="row-label">{rowItem.row}</span>
                <div className="row-seats">
                  {rowItem.seats.map((seatNum, idx) => {
                    if (seatNum === null) return <div key={`gap-${idx}`} className="seat-gap"></div>;
                    const seatId = `${rowItem.row}${seatNum}`;
                    const displayId = `${rowItem.row}-${seatNum.toString().padStart(2, '0')}`;
                    const isBooked = BOOKED_SEATS.includes(seatId);
                    const isSelected = selectedSeats.includes(seatId);
                    let status = "available";
                    if (isBooked) status = "booked";
                    if (isSelected) status = "selected";

                    return (
                      <SeatIcon
                        key={seatId}
                        status={status}
                        displayId={displayId}
                        onClick={() => handleSeatClick(seatId)}
                      />
                    );
                  })}
                </div>
                <span className="row-label">{rowItem.row}</span>
              </div>
            ))}
          </div>

          <div className="seat-legend">
            <div className="legend-item"><div className="seat-dot available"></div> <span>Có sẵn</span></div>
            <div className="legend-item"><div className="seat-dot booked"></div> <span>Đã đặt</span></div>
            <div className="legend-item"><div className="seat-dot selected"></div> <span>Đang chọn</span></div>
          </div>

          <div className="booking-summary-panel">
            <div className="selected-tickets-info">
              <span className="label-summary">Ghế đã chọn:</span>
              <strong className="seat-list-text">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "..."}</strong>
            </div>
            <div className="total-action">
              <div className="total-price-col">
                <span className="label-summary">Tổng tiền</span>
                {/* [EDIT] Hiển thị VND */}
                <strong className="price-text">{totalPrice.toLocaleString()} đ</strong>
              </div>
              <button
                className="btn-checkout"
                disabled={selectedSeats.length < totalSeatsNeeded}
                onClick={() => {
                  navigate(`/chon-do-an/${movieInfo.film_id || 'F001'}`, {
                    state: {
                      quantities, movieInfo, time, cinemaId, selectedSeats,
                      totalPriceSeats: totalPrice
                    }
                  });
                }}
              >
                Tiếp Tục ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;