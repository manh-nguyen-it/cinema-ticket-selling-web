import React from 'react';
import './BookingProgressBar.css';

const BookingProgressBar = ({ currentStep }) => {
    const STEPS = ['Chỗ Ngồi', 'Đồ Ăn & Thức Uống', 'Phương Thức Thanh Toán', 'Xuất Vé'];

    // Tính toán độ dài của thanh màu vàng (0% -> 33% -> 66% -> 100%)
    const progressWidth = (currentStep / (STEPS.length - 1)) * 100;

    return (
        <div className="progress-bar-wrapper">
            {/* Đường kẻ nền (Xám) */}
            <div className="progress-line-bg"></div>

            {/* Đường kẻ Active (Vàng) - Chạy theo tiến độ */}
            <div
                className="progress-line-active"
                style={{ width: `${progressWidth}%` }}
            ></div>

            <div className="steps-container">
                {STEPS.map((label, index) => {
                    // Logic trạng thái
                    const isCompleted = index <= currentStep; // Đã qua hoặc đang đứng
                    const isActive = index === currentStep;     // Đang đứng

                    return (
                        <div
                            key={index}
                            className={`step-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
                        >
                            <span className="step-label">{label}</span>
                            <div className="step-dot"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingProgressBar;