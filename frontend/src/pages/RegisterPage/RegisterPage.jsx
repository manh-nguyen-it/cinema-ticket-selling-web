import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './RegisterPage.css';

// Tận dụng lại ảnh từ trang Login
import loginPoster from '../../assets/login-poster.png';
import logoImg from '../../assets/star-logo.png';

const RegisterPage = () => {
    const navigate = useNavigate();

    // State form
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Kiểm tra xem đã điền đủ thông tin chưa để đổi màu nút
    useEffect(() => {
        const { username, email, password, confirmPassword } = formData;
        const isFilled = username && email && password && confirmPassword;
        setIsValid(isFilled);
    }, [formData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!isValid) return;

        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }

        console.log("Register data:", formData);
        // Giả lập đăng ký thành công -> chuyển về đăng nhập
        navigate('/dang-nhap');
    };

    return (
        <div className="register-page">
            <div className="register-container">

                {/* CỘT TRÁI (POSTER) */}
                <div className="register-left">
                    <img src={loginPoster} alt="Poster" />
                </div>

                {/* CỘT PHẢI (FORM) */}
                <div className="register-right">

                    {/* Logo */}
                    <div className="register-brand-logo">
                        <img src={logoImg} alt="Logo" />
                    </div>

                    <h2 className="register-title">Hãy tiến hành đăng ký !</h2>

                    <form className="register-form" onSubmit={handleRegister}>

                        {/* Tên người dùng */}
                        <div className="form-group">
                            <label>Tên người dùng</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Thái Luân"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>Địa chỉ email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="phamthailuan@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Mật khẩu */}
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="............"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* Xác nhận mật khẩu */}
                        <div className="form-group">
                            <label>Xác nhận mật khẩu</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="............"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {/* Nút Đăng ký (Đổi màu dựa vào isValid) */}
                        <button
                            type="submit"
                            className={`btn-register-submit ${isValid ? 'active' : 'disabled'}`}
                            disabled={!isValid}
                        >
                            Đăng ký
                        </button>

                    </form>

                    <div className="register-footer">
                        <span>Đã có tài khoản? </span>
                        <a href="/dang-nhap" className="link-text">Đăng nhập ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;