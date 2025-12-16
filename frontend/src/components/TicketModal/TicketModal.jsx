import React, { useState } from 'react';
import { MOCK_TICKET_TYPES } from '../../utils/mockData';
import './TicketModal.css';

const TicketModal = ({ isOpen, onClose, onConfirm }) => {
    // State lưu số lượng vé cho từng loại
    const [quantities, setQuantities] = useState({
        adult: 0,
        student: 0,
        child: 0
    });

    if (!isOpen) return null;

    // Hàm tăng/giảm số lượng
    const handleChange = (typeId, delta) => {
        setQuantities(prev => {
            const newValue = (prev[typeId] || 0) + delta;
            return { ...prev, [typeId]: newValue < 0 ? 0 : newValue }; // Không cho âm
        });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="ticket-modal" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <span className="icon-ticket">🎫</span>
                    <div>
                        <h3 className="modal-title">Tiếp Tục Chọn Vé</h3>
                        <p className="modal-subtitle">Chọn số lượng vé cho mỗi thành viên</p>
                    </div>
                </div>

                <div className="ticket-list">
                    {MOCK_TICKET_TYPES.map((ticket) => {
                        // Mapping key từ id (adult, student...) để lấy số lượng
                        const count = quantities[ticket.id] || 0;

                        return (
                            <div key={ticket.id} className="ticket-row">
                                <div className="ticket-info">
                                    <span className="ticket-name">{ticket.name}</span>
                                    <span className="ticket-price">{ticket.price}</span>
                                </div>

                                <div className="counter-controls">
                                    <button
                                        className="btn-counter"
                                        onClick={() => handleChange(ticket.id, -1)}
                                        disabled={count === 0}
                                    >
                                        −
                                    </button>
                                    <span className="count-display">{count}</span>
                                    <button
                                        className="btn-counter"
                                        onClick={() => handleChange(ticket.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose}>Huỷ</button>
                    <button className="btn-continue" onClick={() => onConfirm(quantities)}>
                        Tiếp tục <span style={{ fontSize: '12px' }}>❯</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TicketModal;