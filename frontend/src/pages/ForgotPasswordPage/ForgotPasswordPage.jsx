import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css';
import logoImg from '../../assets/star-logo.png';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log("Gửi yêu cầu reset tới:", email);
            // Giả lập gửi thành công, chuyển sang trang tạo mật khẩu mới
            navigate('/tao-mat-khau-moi');
        }
    };

    return (
        <div className="reset-flow-page">
            <div className="reset-container">
                {/* Logo */}
                <div className="reset-logo">
                    <img src={logoImg} alt="Star Cineplex" />
                </div>

                <h2 className="reset-title">Khôi phục mật khẩu của bạn</h2>

                <form onSubmit={handleSubmit} className="reset-form">
                    <div className="form-group">
                        <label>Địa chỉ email</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-purple"
                        />
                    </div>

                    {/* Nút Tiếp tục: Đổi màu dựa trên việc đã nhập email chưa */}
                    <button
                        type="submit"
                        className={`btn-reset-action ${email ? 'active' : 'disabled'}`}
                        disabled={!email}
                    >
                        Tiếp tục
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ForgotPasswordPage;