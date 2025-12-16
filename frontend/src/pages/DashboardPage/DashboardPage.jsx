import React, { useState } from 'react';
import {
    FaUser, FaTicketAlt, FaWallet, FaCreditCard, FaListAlt,
    FaMapMarkerAlt, FaDownload, FaShareAlt, FaChevronUp, FaChevronDown,
    FaClock, FaCalendarAlt, FaStar, FaTrash, FaTicketAlt as FaTicketIcon
} from 'react-icons/fa';
import { MOCK_USER_PROFILE, MOCK_TICKETS, MOCK_WATCHLIST, MOCK_RELATED_MOVIES } from '../../utils/mockData';
import './DashboardPage.css';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('account');
    const [expandedTicketId, setExpandedTicketId] = useState(null); // Accordion state

    const user = MOCK_USER_PROFILE;

    const handleTabChange = (id) => {
        setActiveTab(id);
        setExpandedTicketId(null);
    };

    const handleToggleExpand = (id) => {
        setExpandedTicketId(prevId => prevId === id ? null : id);
    };

    // --- COMPONENT: NỘI DUNG CHI TIẾT VÉ (ACCORDION CONTENT) ---
    const TicketDetailContent = ({ ticket }) => (
        <div className="ticket-expand-container fade-in">

            {/* Cột Trái: Visual Vé + QR */}
            <div className="ticket-visual-stub">
                <div className="stub-header-img">
                    <img src={ticket.poster} alt={ticket.title} />
                </div>

                <div className="stub-body">
                    <h2 className="stub-title">{ticket.title}</h2>
                    <p className="stub-duration">{ticket.duration || '2h 00m'}</p>
                    <div className="stub-cinema-info">
                        <h4 className="stub-cinema-name">{ticket.cinema}</h4>
                        <p className="stub-cinema-addr">{ticket.cinemaAddress || ticket.cinema}</p>
                    </div>
                    <div className="stub-meta-grid">
                        <div className="meta-item">
                            <span className="meta-label">Ngày</span>
                            <span className="meta-val">{ticket.date}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Giờ chiếu</span>
                            <span className="meta-val">{ticket.time}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Ghế</span>
                            <span className="meta-val">{ticket.seats}</span>
                        </div>
                    </div>
                </div>

                <div className="stub-divider">
                    <div className="half-circle left"></div>
                    <div className="dashed-line"></div>
                    <div className="half-circle right"></div>
                </div>

                <div className="stub-footer">
                    <p className="qr-label">Quét mã khi vào rạp</p>
                    <div className="qr-wrapper">
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticket.bookingId}`}
                            alt="QR Code"
                        />
                    </div>
                    <p className="qr-code-text">{ticket.bookingId}</p>
                </div>
            </div>

            {/* Cột Phải: Thông tin chi tiết */}
            <div className="ticket-info-side">
                <div className="info-group">
                    <h3 className="info-group-title">THÔNG TIN NGƯỜI ĐẶT</h3>
                    <div className="info-row-text">
                        <span>Tên người đặt:</span> <strong>{ticket.booker?.name || user.name}</strong>
                    </div>
                    <div className="info-row-text">
                        <span>Số điện thoại:</span> <strong>{ticket.booker?.phone || '0909 123 456'}</strong>
                    </div>
                    <div className="info-row-text">
                        <span>Email:</span> <strong>{ticket.booker?.email || user.email}</strong>
                    </div>
                    {ticket.booker?.cardLast4 && (
                        <div className="info-row-text payment-row">
                            <span>Thanh toán:</span>
                            <span className="visa-badge">Visa •••• {ticket.booker.cardLast4}</span>
                        </div>
                    )}
                </div>

                <div className="info-group">
                    <h3 className="info-group-title">CHI TIẾT THANH TOÁN</h3>
                    {ticket.priceBreakdown ? (
                        <>
                            <div className="price-row">
                                <span>Vé người lớn ({ticket.priceBreakdown.adult?.qty || 0})</span>
                                <span>${ticket.priceBreakdown.adult?.total || 0}</span>
                            </div>
                            <div className="price-row">
                                <span>Vé U20 ({ticket.priceBreakdown.u20?.qty || 0})</span>
                                <span>${ticket.priceBreakdown.u20?.total || 0}</span>
                            </div>
                            <div className="divider-line"></div>
                            <div className="price-row">
                                <span>Bắp nước</span>
                                <span>${ticket.priceBreakdown.food || 0}</span>
                            </div>
                            <div className="price-row">
                                <span>Thuế VAT</span>
                                <span>${ticket.priceBreakdown.vat || 0}</span>
                            </div>
                            <div className="price-row total-highlight">
                                <span>Tổng tiền</span>
                                <span className="total-val">${ticket.priceBreakdown.total}</span>
                            </div>
                        </>
                    ) : (
                        <div className="price-row total-highlight">
                            <span>Tổng tiền</span>
                            <span className="total-val">${ticket.priceBreakdown?.total || '0.00'}</span>
                        </div>
                    )}
                </div>

                <div className="detail-actions">
                    <button className="btn-download-yellow"><FaDownload /> Tải xuống</button>
                    <button className="btn-share-outline"><FaShareAlt /> Chia sẻ</button>
                </div>
            </div>
        </div>
    );

    // --- VIEW 1: DASHBOARD OVERVIEW ---
    const renderOverview = () => {
        const progressPercent = (user.points / user.targetPoints) * 100;
        const pointsNeeded = user.targetPoints - user.points;
        return (
            <div className="fade-in">
                <div className="greeting-section">
                    <h1 className="greeting-title">Chào Bạn Đã Quay Trở Lại, {user.name.split(' ')[0]}!</h1>
                    <p className="greeting-sub">Dưới đây là tổng quan về thời gian sử dụng CinePlex của bạn</p>
                </div>

                <div className="points-progress-box">
                    <div className="progress-text">
                        <span className="highlight-yellow">{pointsNeeded} điểm nữa</span> thì bạn sẽ được một voucher miễn phí bắp nước 🍿
                    </div>
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">{user.points}</div>
                        <div className="stat-label">Điểm thưởng của bạn</div>
                        <div className="stat-bar-highlight"></div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{user.bookings}</div>
                        <div className="stat-label">Lần đặt vé xem phim</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">${user.balance.toFixed(2)}</div>
                        <div className="stat-label">Số dư ví của bạn</div>
                    </div>
                </div>

                <div className="action-list-group">
                    <div className="action-item">
                        <div className="action-info">
                            <div className="action-icon-wrapper"><FaTicketAlt /></div>
                            <div className="action-text">
                                <h4>Quản Lý Vé Xem Phim</h4>
                                <p>Bạn có một bộ phim sắp diễn ra</p>
                            </div>
                        </div>
                        <button className="btn-view-detail" onClick={() => handleTabChange('tickets')}>Xem chi tiết</button>
                    </div>
                    <div className="action-item">
                        <div className="action-info">
                            <div className="action-icon-wrapper"><FaListAlt /></div>
                            <div className="action-text">
                                <h4>Những Bộ Phim Bạn Đã Lưu</h4>
                                <p>Hiện tại bạn đang có {MOCK_WATCHLIST.length} bộ phim được lưu</p>
                            </div>
                        </div>
                        <button className="btn-view-detail" onClick={() => handleTabChange('watchlist')}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
        );
    };

    // --- VIEW 2: VÉ XEM PHIM (LIST + ACCORDION) ---
    const renderMyTicketsList = () => {
        return (
            <div className="fade-in">
                <div className="ticket-section">
                    <h2 className="section-header-text">Bộ Phim Sắp Tới</h2>
                    {MOCK_TICKETS.upcoming.map(ticket => {
                        const isExpanded = expandedTicketId === ticket.id;
                        return (
                            <div key={ticket.id} className={`ticket-wrapper ${isExpanded ? 'expanded' : ''}`}>
                                <div className="ticket-card upcoming-highlight">
                                    <div className="ticket-poster"><img src={ticket.poster} alt={ticket.title} /></div>
                                    <div className="ticket-info-col main-info">
                                        <h3 className="ticket-title">{ticket.title}</h3>
                                        <p className="ticket-datetime">{ticket.fullDate} - {ticket.time}</p>
                                    </div>
                                    <div className="ticket-info-col meta-info">
                                        <p className="cinema-loc"><FaMapMarkerAlt style={{ marginRight: 5 }} /> {ticket.cinema}</p>
                                        <p className="seat-detail">{ticket.seats}</p>
                                    </div>
                                    <div className="ticket-action-col">
                                        <button
                                            className={`btn-ticket-action ${isExpanded ? 'btn-active' : ''}`}
                                            onClick={() => handleToggleExpand(ticket.id)}
                                        >
                                            {isExpanded ? <>Thu gọn <FaChevronUp style={{ marginLeft: 5 }} /></> : <>Xem thêm <FaChevronDown style={{ marginLeft: 5 }} /></>}
                                        </button>
                                    </div>
                                </div>
                                {isExpanded && <TicketDetailContent ticket={ticket} />}
                            </div>
                        );
                    })}
                </div>

                <div className="ticket-section" style={{ marginTop: 40 }}>
                    <h2 className="section-header-text">Lịch Sử Mua Hàng</h2>
                    <div className="history-list">
                        {MOCK_TICKETS.history.map(ticket => {
                            const isExpanded = expandedTicketId === ticket.id;
                            return (
                                <div key={ticket.id} className={`ticket-wrapper ${isExpanded ? 'expanded' : ''}`}>
                                    <div className="ticket-card history-item">
                                        <div className="ticket-poster"><img src={ticket.poster} alt={ticket.title} /></div>
                                        <div className="ticket-info-col main-info">
                                            <h3 className="ticket-title">{ticket.title}</h3>
                                            <p className="ticket-datetime">{ticket.fullDate} - {ticket.time}</p>
                                        </div>
                                        <div className="ticket-action-col">
                                            <button className={`btn-ticket-action ${isExpanded ? 'btn-active' : ''}`} onClick={() => handleToggleExpand(ticket.id)}>
                                                {isExpanded ? "Thu gọn" : "Xem thêm"}
                                            </button>
                                        </div>
                                    </div>
                                    {isExpanded && <TicketDetailContent ticket={ticket} />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    // --- VIEW 4: MỤC XEM SAU (Giao diện Ngang + Related Movies) ---
    const renderWatchlist = () => {
        return (
            <div className="fade-in">
                <h2 className="section-header-text">Bộ Phim Ưa Thích Của Bạn</h2>

                {/* DANH SÁCH PHIM ĐÃ LƯU (Card Ngang) */}
                <div className="watchlist-grid-landscape">
                    {MOCK_WATCHLIST.map(movie => (
                        <div key={movie.id} className="wl-card-landscape">

                            {/* Ảnh Backdrop bên trái */}
                            <div className="wl-backdrop">
                                <img src={movie.backdrop} alt={movie.title} />
                                {/* Logo overlay (nếu có, ở đây giả lập text) */}
                                <div className="wl-backdrop-overlay"></div>
                            </div>

                            {/* Nội dung bên phải */}
                            <div className="wl-content">
                                <div className="wl-header-row">
                                    <h3 className="wl-title">{movie.title}</h3>
                                    {movie.rating && (
                                        <div className="wl-rating">
                                            <FaStar className="star-icon" /> {movie.rating}
                                        </div>
                                    )}
                                </div>

                                <div className="wl-meta-row">
                                    <span>{movie.genre}</span>
                                    <span className="dot">•</span>
                                    <span><FaClock style={{ marginRight: 4 }} />{movie.duration}</span>
                                    <span className="age-badge">{movie.ageRating}</span>
                                </div>

                                <p className="wl-description">
                                    {movie.description}
                                </p>

                                <div className="wl-actions">
                                    <button className="btn-buy-outline">
                                        <FaTicketIcon /> Mua vé ngay
                                    </button>

                                    <button className="btn-remove-text">
                                        Loại bỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RELATED MOVIES (Có thể bạn cũng thích) */}
                <div className="related-movies-section">
                    <h3 className="related-header">Có Thể Bạn Cũng Thích</h3>
                    <div className="related-grid">
                        {MOCK_RELATED_MOVIES.map(movie => (
                            <div key={movie.id} className="related-card">
                                <div className="related-poster">
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className="related-info">
                                    <h4 className="related-title">{movie.title}</h4>
                                    <div className="related-meta">
                                        <span className="related-rating"><FaStar /> {movie.rating}</span>
                                    </div>
                                    <div className="related-sub-meta">
                                        <span>{movie.genre}</span>
                                        <span><FaClock size={10} style={{ marginRight: 3 }} />{movie.duration}</span>
                                        <span className="mini-badge">{movie.ageRating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">

                {/* SIDEBAR */}
                <div className="dashboard-sidebar">
                    <div className="user-mini-profile">
                        <img src={user.avatar} alt="Avatar" className="user-avatar" />
                        <div className="user-text-info">
                            <h3 className="user-name">{user.name}</h3>
                            <span className="user-email">{user.email}</span>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        {[
                            { id: 'account', label: 'Tài khoản', icon: <FaUser /> },
                            { id: 'tickets', label: 'Vé xem phim', icon: <FaTicketAlt /> },
                            { id: 'wallet', label: 'Ví điện tử', icon: <FaWallet /> },
                            { id: 'payment', label: 'Phương thức thanh toán', icon: <FaCreditCard /> },
                            { id: 'watchlist', label: 'Mục xem sau', icon: <FaListAlt /> }
                        ].map(item => (
                            <div key={item.id} className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => handleTabChange(item.id)}>
                                <span className="menu-icon">{item.icon}</span>
                                <span className="menu-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="dashboard-main">
                    {activeTab === 'account' && renderOverview()}
                    {activeTab === 'tickets' && renderMyTicketsList()}
                    {activeTab === 'watchlist' && renderWatchlist()}
                    {['wallet', 'payment'].includes(activeTab) && <div className="fade-in"><h3>Tính năng đang phát triển...</h3></div>}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;