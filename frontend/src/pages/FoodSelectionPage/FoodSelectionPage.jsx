import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOCK_FOODS } from '../../utils/mockData';
import './FoodSelectionPage.css';
import BookingProgressBar from '../../components/BookingProgressBar/BookingProgressBar';

const FoodSelectionPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        quantities, movieInfo, time, selectedSeats,
        totalPriceSeats, cinemaId
    } = location.state || {};

    useEffect(() => {
        if (!location.state) navigate('/');
    }, [location.state, navigate]);

    if (!movieInfo) return null;

    const [foodCart, setFoodCart] = useState({});

    const updateQuantity = (foodId, delta) => {
        setFoodCart(prev => {
            const currentQty = prev[foodId] || 0;
            const newQty = Math.max(0, currentQty + delta);
            return { ...prev, [foodId]: newQty };
        });
    };

    const totalFoodPrice = MOCK_FOODS.reduce((total, item) => {
        return total + (foodCart[item.id] || 0) * item.price;
    }, 0);

    const grandTotal = totalPriceSeats + totalFoodPrice;
    const hasFoodSelected = totalFoodPrice > 0;

    const handleGoToPayment = (isSkip = false) => {
        const finalFoodCart = isSkip ? {} : foodCart;
        navigate(`/thanh-toan/${movieInfo.film_id || 'F001'}`, {
            state: {
                quantities, movieInfo, time, selectedSeats, cinemaId, totalPriceSeats,
                foodCart: finalFoodCart
            }
        });
    };

    return (
        <div className="food-page">
            <div className="page-bg" style={{ backgroundImage: `url(${movieInfo.photo_link})` }}></div>

            <div className="food-container">
                {/* --- SIDEBAR --- */}
                <div className="sidebar-info">
                    <div className="sidebar-poster">
                        <img src={movieInfo.photo_link} alt={movieInfo.name} />
                    </div>
                    <h2 className="sidebar-title">{movieInfo.name}</h2>
                    <div className="sidebar-meta-row">
                        <span>{Math.floor(movieInfo.period / 60)}h {movieInfo.period % 60}m</span>
                        <span className="separator">|</span>
                        <span className="pg-badge">C13</span>
                        <span className="separator">|</span>
                        <div className="rating-star">★ <span className="score">7.9</span></div>
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
                    <div className="sidebar-session-box">
                        <span className="label-session">Ghế đã chọn:</span>
                        <div className="seat-list-text" style={{ color: 'var(--accent-yellow)', fontWeight: 'bold' }}>
                            {selectedSeats?.join(", ")}
                        </div>
                    </div>
                    <button className="btn-back" onClick={() => navigate(-1)}>❮ Quay lại chọn ghế</button>
                </div>

                {/* --- MAIN CONTENT --- */}
                <div className="main-food-area">
                    <BookingProgressBar currentStep={1} />

                    <div className="food-grid-scroll">
                        <div className="food-grid">
                            {MOCK_FOODS.map((item) => {
                                const qty = foodCart[item.id] || 0;
                                return (
                                    <div key={item.id} className={`food-card ${qty > 0 ? 'selected' : ''}`}>
                                        <div className="food-img-wrapper">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="food-info">
                                            <h4 className="food-name">{item.name}</h4>
                                            <p className="food-desc">{item.description}</p>
                                        </div>
                                        <div className="food-card-footer">
                                            {/* [EDIT] Hiển thị VND */}
                                            <div className="food-price">{item.price.toLocaleString()} đ</div>
                                            <div className="food-qty-control">
                                                <button className="btn-qty" onClick={() => updateQuantity(item.id, -1)} disabled={qty === 0}>−</button>
                                                <span className="qty-value">{qty}</span>
                                                <button className="btn-qty" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="food-action-panel">
                        <div className="panel-left-content">
                            {!hasFoodSelected ? (
                                <div className="action-text">
                                    <p className="hint-text">Vui lòng chọn đồ ăn vặt yêu thích của bạn</p>
                                    <p className="hint-sub">Bạn vẫn có thể bỏ qua bước này</p>
                                </div>
                            ) : (
                                <div className="selected-foods-list">
                                    {MOCK_FOODS.map((item) => {
                                        const qty = foodCart[item.id] || 0;
                                        if (qty === 0) return null;
                                        return (
                                            <div key={item.id} className="selected-food-tag">
                                                <span className="tag-name">{item.name}</span>
                                                {/* [EDIT] Hiển thị VND */}
                                                <span className="tag-price">{item.price.toLocaleString()} đ</span>
                                                <div className="tag-qty-control">
                                                    <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                                    <span className="tag-qty-val">{qty}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <div className="action-buttons-group">
                            <div className="total-display">
                                <span>Tổng cộng:</span>
                                {/* [EDIT] Hiển thị VND */}
                                <strong>{grandTotal.toLocaleString()} đ</strong>
                            </div>
                            <button className="btn-add-cart" onClick={() => handleGoToPayment(false)} disabled={!hasFoodSelected}>
                                Tiếp Tục Thanh Toán
                            </button>
                            <button className="btn-skip" onClick={() => handleGoToPayment(true)}>
                                Bỏ qua
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FoodSelectionPage;