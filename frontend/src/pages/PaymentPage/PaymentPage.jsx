import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingProgressBar from '../../components/BookingProgressBar/BookingProgressBar';
import { MOCK_FOODS, MOCK_TICKET_TYPES } from '../../utils/mockData';
import { FaApple, FaGoogle, FaPaypal, FaBitcoin, FaCreditCard } from "react-icons/fa";
import './PaymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        quantities, movieInfo, time, selectedSeats,
        foodCart, totalPriceSeats
    } = location.state || {};

    useEffect(() => {
        if (!location.state) navigate('/');
    }, [location.state, navigate]);

    if (!movieInfo) return null;

    // --- TÍNH TOÁN CHI PHÍ ---
    const totalFoodPrice = Object.keys(foodCart || {}).reduce((acc, foodId) => {
        const item = MOCK_FOODS.find(f => f.id === foodId);
        return acc + (item ? item.price * foodCart[foodId] : 0);
    }, 0);

    // [EDIT] Cập nhật phí dịch vụ sang VND cho hợp lý
    const SERVICE_FEE = 15000;
    const TAX = 10000;

    const finalTotal = totalPriceSeats + totalFoodPrice + SERVICE_FEE + TAX;

    const PAYMENT_METHODS = [
        { id: 'apple', label: 'Apple Pay', icon: <FaApple size={20} /> },
        { id: 'google', label: 'Google Pay', icon: <FaGoogle size={20} /> },
        { id: 'paypal', label: 'Paypal', icon: <FaPaypal size={20} /> },
        { id: 'bitpay', label: 'Bit Pay', icon: <FaBitcoin size={20} /> },
        { id: 'card', label: 'Debit or Credit card', icon: <FaCreditCard size={20} /> }
    ];

    const [paymentMethod, setPaymentMethod] = useState('card');

    const handlePayment = () => {
        const fakeBookingId = "BK" + Math.floor(100000 + Math.random() * 900000);
        navigate('/thanh-toan-thanh-cong', {
            state: {
                quantities, movieInfo, time, selectedSeats, foodCart,
                finalTotal: finalTotal, // Truyền số chưa format
                bookingId: fakeBookingId,
                paymentMethod: paymentMethod
            }
        });
    };

    return (
        <div className="payment-page">
            <div className="page-bg" style={{ backgroundImage: `url(${movieInfo.photo_link})` }}></div>

            <div className="payment-container">
                {/* --- CỘT TRÁI --- */}
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
                    <button className="btn-back" onClick={() => navigate(-1)}>❮ Quay lại</button>
                </div>

                {/* --- MAIN CONTENT --- */}
                <div className="main-payment-area">
                    <BookingProgressBar currentStep={2} />

                    <div className="payment-content-wrapper">
                        {/* --- GIỮA: FORM THANH TOÁN --- */}
                        <div className="payment-form-section">
                            <h3 className="section-title">Phương thức thanh toán</h3>
                            <div className="payment-methods-list">
                                {PAYMENT_METHODS.map((method) => {
                                    const isSelected = paymentMethod === method.id;
                                    return (
                                        <label key={method.id} className={`method-option ${isSelected ? 'selected-method' : ''}`}>
                                            <input type="radio" name="payment" value={method.id} checked={isSelected} onChange={() => setPaymentMethod(method.id)} />
                                            <span className="radio-label">
                                                <span style={{ marginRight: 8, opacity: isSelected ? 1 : 0.5 }}>{method.icon}</span>
                                                {method.label}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>

                            <div className="payment-method-content">
                                {paymentMethod === 'card' && (
                                    <div className="card-input-container fade-in">
                                        <div className="input-group">
                                            <label>Card Number</label>
                                            <div className="input-with-icon">
                                                <input type="text" placeholder="5412 7512 3412 3456" />
                                                <span className="icon-card">💳</span>
                                            </div>
                                        </div>
                                        <div className="row-inputs">
                                            <div className="input-group"><label>Exp. Month</label><input type="text" placeholder="12" /></div>
                                            <div className="input-group"><label>Exp. Year</label><input type="text" placeholder="2025" /></div>
                                        </div>
                                        <div className="row-inputs">
                                            <div className="input-group"><label>CVV2</label><input type="password" placeholder="***" /></div>
                                            <div className="input-group"><label>Zip Code</label><input type="text" placeholder="70000" /></div>
                                        </div>
                                    </div>
                                )}
                                {paymentMethod !== 'card' && (
                                    <div className="wallet-info-box fade-in">
                                        <p>Bạn đã chọn thanh toán qua <strong style={{ color: 'var(--accent-yellow)', textTransform: 'capitalize' }}>{paymentMethod}</strong>.</p>
                                        <p className="sub-text">Sau khi nhấn "Thanh Toán Ngay", bạn sẽ được chuyển hướng an toàn đến trang đối tác.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* --- PHẢI: SUMMARY --- */}
                        <div className="order-summary-section">
                            <h3 className="summary-title">Thông tin đặt vé</h3>
                            <div className="summary-group">
                                <div className="summary-header">Vé</div>
                                {MOCK_TICKET_TYPES.map(type => {
                                    const qty = quantities[type.id];
                                    if (!qty) return null;
                                    return (
                                        <div key={type.id} className="summary-row">
                                            <span>{type.name} (x{qty}) :</span>
                                            {/* [EDIT] Hiển thị VND */}
                                            <span>{(type.price * qty).toLocaleString()} đ</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="summary-row">
                                <span>Ghế đã chọn:</span>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>{selectedSeats?.join(", ")}</span>
                            </div>
                            {totalFoodPrice > 0 && (
                                <div className="summary-group">
                                    <div className="summary-header">Đồ ăn và thức uống</div>
                                    {Object.keys(foodCart).map(fid => {
                                        const qty = foodCart[fid];
                                        if (!qty) return null;
                                        const foodItem = MOCK_FOODS.find(f => f.id === fid);
                                        return (
                                            <div key={fid} className="summary-row">
                                                <span>{foodItem.name} (x{qty})</span>
                                            </div>
                                        );
                                    })}
                                    <div className="summary-row total-sub">
                                        <span>Tổng đồ ăn:</span>
                                        {/* [EDIT] Hiển thị VND */}
                                        <span>{totalFoodPrice.toLocaleString()} đ</span>
                                    </div>
                                </div>
                            )}

                            <div className="divider-line"></div>

                            {/* [EDIT] Hiển thị VND */}
                            <div className="summary-row"><span>Phí dịch vụ:</span><span>{SERVICE_FEE.toLocaleString()} đ</span></div>
                            <div className="summary-row"><span>Thuế:</span><span>{TAX.toLocaleString()} đ</span></div>

                            <div className="summary-total">
                                <span>TỔNG TIỀN</span>
                                {/* [EDIT] Hiển thị VND */}
                                <span className="total-highlight">{finalTotal.toLocaleString()} đ</span>
                            </div>

                            <button className="btn-pay-now" onClick={handlePayment}>Thanh Toán Ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentPage;