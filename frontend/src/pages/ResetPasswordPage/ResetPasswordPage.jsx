import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ResetPasswordPage.css'; // Dùng chung style hoặc tạo file riêng tùy bạn, ở đây tôi sẽ dùng chung logic CSS
import logoImg from '../../assets/star-logo.png';

const ResetPasswordPage = () => {
    const navigate = useNavigate();

    const [passwords, setPasswords] = useState({ newPass: '', confirmPass: '' });
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.newPass !== passwords.confirmPass) {
            alert("Mật khẩu không khớp!");
            return;
        }
        // Logic cập nhật mật khẩu thành công
        alert("Đổi mật khẩu thành công!");
        navigate('/dang-nhap');
    };

    return (
        <div className="reset-flow-page">
            <div className="reset-container">

                <div className="reset-logo">
                    <img src={logoImg} alt="Star Cineplex" />
                </div>

                <h2 className="reset-title">Tạo mật khẩu mới</h2>
                <p className="reset-subtitle">Hãy nhập mật khẩu mới của bạn</p>

                <form onSubmit={handleSubmit} className="reset-form">

                    <div className="form-group">
                        <label>Mật khẩu mới</label>
                        <div className="password-wrapper-purple">
                            <input
                                type={showPass ? "text" : "password"}
                                name="newPass"
                                placeholder="Nhập mật khẩu"
                                value={passwords.newPass}
                                onChange={handleChange}
                                className="input-purple"
                            />
                            <span className="toggle-icon" onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Xác nhận mật khẩu</label>
                        <div className="password-wrapper-purple">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPass"
                                placeholder="Nhập lại một khẩu"
                                value={passwords.confirmPass}
                                onChange={handleChange}
                                className="input-purple"
                            />
                            <span className="toggle-icon" onClick={() => setShowConfirm(!showConfirm)}>
                                {showConfirm ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="btn-reset-action active">
                        Xác nhận
                    </button>

                </form>

            </div>
        </div>
    );
};

export default ResetPasswordPage;