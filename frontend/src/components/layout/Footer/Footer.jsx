import React from 'react';

/**
 * Component Footer: Chứa thông tin copyright và các link
 */
export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 [Tên Công Ty]. All rights reserved.</p>
            <div className="footer-links">
                <a href="#">Điều khoản chung</a>
                <a href="#">Chính sách thanh toán</a>
                <a href="#">Hỏi và đáp</a>
            </div>
        </footer>
    );
}