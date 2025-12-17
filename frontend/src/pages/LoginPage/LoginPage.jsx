import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginPage.css';

// Import ảnh assets
import loginPoster from '../../assets/login-poster.png';
import logoImg from '../../assets/star-logo.png'; // Import Logo mới

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login with:", formData);
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="login-container">

                {/* CỘT TRÁI */}
                <div className="login-left">
                    <img src={loginPoster} alt="Website bán vé xem phim uy tín" />
                </div>

                {/* CỘT PHẢI */}
                <div className="login-right">

                    {/* --- [MỚI] LOGO THƯƠNG HIỆU --- */}
                    <div className="login-brand-logo">
                        <img src={logoImg} alt="Star Cineplex Logo" />
                    </div>

                    <h2 className="login-title">Chào mừng bạn trở lại !</h2>

                    <div className="social-login-group">
                        <button className="social-btn google">
                            <FaGoogle className="social-icon google-icon" />
                            <span>Đăng nhập bằng Google</span>
                        </button>
                        <button className="social-btn facebook">
                            <FaFacebookF className="social-icon fb-icon" />
                            <span>Đăng nhập bằng Facebook</span>
                        </button>
                    </div>

                    <div className="divider"><span>Hoặc đăng nhập với</span></div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Tài khoản, email, số điện thoại</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Nhập tên người dùng"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Nhập mật khẩu"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <div className="forgot-password-row">
                            <a href="/quen-mat-khau" className="link-text">Quên mật khẩu?</a>
                        </div>

                        <button type="submit" className="btn-login-submit">Đăng nhập</button>
                    </form>

                    <div className="login-footer">
                        <span>Không có tài khoản? </span>
                        <a href="/dang-ky" className="link-text">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;