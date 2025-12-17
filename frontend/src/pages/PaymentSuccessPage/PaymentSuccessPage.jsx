import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingProgressBar from '../../components/BookingProgressBar/BookingProgressBar';
import { MOCK_FOODS, MOCK_TICKET_TYPES } from '../../utils/mockData';
import { FaDownload, FaShareAlt, FaCheckCircle } from "react-icons/fa";
import './PaymentSuccessPage.css';

const PaymentSuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        movieInfo, time, selectedSeats,
        quantities = {},
        foodCart = {},
        finalTotal, bookingId
    } = location.state || {};

    const USER_INFO = {
        name: "Luna Phạm",
        phone: "0909 123 456",
        email: "lunapham@gmail.com"
    };

    useEffect(() => {
        if (!location.state) navigate('/');
    }, [location.state, navigate]);

    if (!movieInfo) return null;

    // Render Vé
    const ticketLines = MOCK_TICKET_TYPES.map(type => {
        const qty = quantities[type.id];
        if (qty > 0) return <div key={type.id} className="sub-item-row">• {qty} vé {type.name}</div>;
        return null;
    });

    const ticketTotal = MOCK_TICKET_TYPES.reduce((acc, type) => acc + (quantities[type.id] || 0) * type.price, 0);

    // Render Đồ ăn
    const foodLines = Object.entries(foodCart).map(([fid, qty]) => {
        const food = MOCK_FOODS.find(f => f.id === fid);
        if (food && qty > 0) return <div key={fid} className="sub-item-row">• {food.name} x{qty}</div>;
        return null;
    });

    const foodTotal = Object.entries(foodCart).reduce((acc, [fid, qty]) => {
        const food = MOCK_FOODS.find(f => f.id === fid);
        return acc + (food ? food.price * qty : 0);
    }, 0);

    return (
        <div className="success-page">
            <div className="page-bg" style={{ backgroundImage: `url(${movieInfo.photo_link})` }}></div>

            <div className="success-container">
                {/* Sidebar */}
                <div className="sidebar-info">
                    <div className="sidebar-poster">
                        <img src={movieInfo.photo_link} alt={movieInfo.name} />
                    </div>
                    <h2 className="sidebar-title">{movieInfo.name}</h2>
                    <div className="sidebar-meta-row">
                        <span>{Math.floor(movieInfo.period / 60)}h {movieInfo.period % 60}m</span>
                        <span className="separator">|</span>
                        <span className="pg-badge">C13</span>
                    </div>
                    <div className="sidebar-cinema-info">
                        <h3 className="cinema-name-sidebar">CinePlex Thảo Điền</h3>
                        <p className="cinema-address-sidebar">Quận 2, TP. HCM</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-success-area">
                    <BookingProgressBar currentStep={3} />

                    <div className="ticket-confirmation-box">
                        <div className="box-header">
                            <h1 className="success-title">Thanh Toán Thành Công</h1>
                            <p className="success-subtitle">
                                Vé xem bộ phim “ {movieInfo.name} ” đã được đặt thành công
                            </p>
                        </div>

                        <div className="info-grid-layout">
                            {/* --- CỘT TRÁI: HOÁ ĐƠN --- */}
                            <div className="info-column left-col">
                                <h3 className="column-title">Chi Tiết Hoá Đơn</h3>
                                <div className="info-group">
                                    <div className="info-row"><span className="label">Mã đặt vé:</span><span className="value highlight-white">{bookingId || "Unknown"}</span></div>
                                    <div className="info-row"><span className="label">Tên phim:</span><span className="value">{movieInfo.name}</span></div>
                                    <div className="info-row"><span className="label">Suất chiếu:</span><span className="value">{time} • 16/12/2025</span></div>
                                    <div className="info-row"><span className="label">Chỗ ngồi:</span><span className="value highlight-white">{selectedSeats?.join(", ")}</span></div>
                                </div>

                                <div className="divider-dashed"></div>

                                <div className="info-group">
                                    <div className="info-row start-align">
                                        <span className="label">Loại vé:</span>
                                        <div className="value-column">
                                            {/* [EDIT] Hiển thị VND */}
                                            <div className="sub-total-text" style={{ marginBottom: 5 }}>- {ticketTotal.toLocaleString()} đ</div>
                                            {ticketLines}
                                        </div>
                                    </div>

                                    {foodLines.length > 0 && (
                                        <div className="info-row start-align" style={{ marginTop: 15 }}>
                                            <span className="label">Đồ ăn:</span>
                                            <div className="value-column">
                                                {/* [EDIT] Hiển thị VND */}
                                                <div className="sub-total-text" style={{ marginBottom: 5 }}>- {foodTotal.toLocaleString()} đ</div>
                                                {foodLines}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="info-row total-row-large">
                                    <span className="label">Tổng tiền:</span>
                                    {/* [EDIT] Hiển thị VND (đảm bảo finalTotal là số) */}
                                    <span className="value total-price-large">{Number(finalTotal).toLocaleString()} đ</span>
                                </div>
                            </div>

                            {/* --- CỘT PHẢI --- */}
                            <div className="info-column right-col">
                                <h3 className="column-title">Thông Tin Người Đặt</h3>
                                <div className="info-group">
                                    <div className="info-row"><span className="label">Tên người đặt:</span><span className="value">{USER_INFO.name}</span></div>
                                    <div className="info-row"><span className="label">Số điện thoại:</span><span className="value">{USER_INFO.phone}</span></div>
                                    <div className="info-row"><span className="label">Địa chỉ email:</span><span className="value">{USER_INFO.email}</span></div>
                                </div>
                                <div className="payment-status-badge">
                                    <FaCheckCircle />
                                    <span>Đã thanh toán qua Thẻ tín dụng</span>
                                </div>
                                <div className="qr-container-clean">
                                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${bookingId}`} alt="QR Ticket" />
                                    <span className="qr-caption">Quét mã khi vào rạp</span>
                                </div>
                            </div>
                        </div>

                        <div className="box-footer-actions centered">
                            <button className="btn-download" onClick={() => alert('Đang tải vé...')}><FaDownload /> Tải xuống</button>
                            <button className="btn-share" onClick={() => alert('Đã sao chép link!')}><FaShareAlt /> Chia sẻ</button>
                        </div>
                        <p className="thank-you-note">Cảm ơn bạn đã tin tưởng Cineplex để đặt vé xem phim.<br />Chúng tôi rất trân trọng điều đó.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentSuccessPage;