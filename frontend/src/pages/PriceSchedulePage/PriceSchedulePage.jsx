import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import './PriceSchedulePage.css';

// Import ảnh bảng giá (Thay đổi đường dẫn nếu bạn để file chỗ khác)
// Nếu bạn để ảnh trong public folder thì dùng đường dẫn string: "/price-table.jpg"
import priceTableImg from '../../assets/price-table.png';
// Hoặc dùng link placeholder nếu chưa copy ảnh vào:
// const priceTableImg = "https://i.imgur.com/YourImageLink.jpg"; 

const PriceSchedulePage = () => {
    const navigate = useNavigate();

    return (
        <div className="price-page">

            {/* Header Giả lập (Giống trang Tin tức) */}
            <div className="price-header-top">
                <div className="brand-logo">STAR <span>NEWS</span></div>
                <div className="search-bar">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
            </div>

            <div className="price-wrapper">

                {/* CONTAINER CHÍNH MÀU #1E0D28 */}
                <div className="price-container">

                    {/* CỘT TRÁI: THÔNG TIN TEXT */}
                    <div className="price-info-col">
                        <div className="page-heading-group">
                            <h1 className="main-heading">
                                Cập nhật giá vé và <br />
                                lịch hoạt động tại <br />
                                Cineplex
                            </h1>
                            <div className="heading-line"></div>
                        </div>

                        {/* Phần 1: Bảng giá */}
                        <div className="info-section">
                            <h3 className="section-title">BẢNG GIÁ VÉ XEM PHIM CINEPLEX</h3>
                            <ul className="info-list">
                                <li><strong>Ngày Tri Ân</strong> – Thứ 2 đầu tiên mỗi tháng</li>
                                <li><strong>Happy Day</strong> – Thứ 3 hàng tuần</li>
                                <li><strong>Ngày Lễ / Tết</strong> – (Áp dụng cho: 1/1, Giỗ Tổ, 30/4 – 1/5, 1-2/9, Tết Nguyên Đán theo lịch nhà nước)</li>
                            </ul>

                            <p className="sub-title-bold">Lưu ý chung</p>
                            <ul className="info-list sm-text">
                                <li>Học sinh – sinh viên xuất trình thẻ HSSV/CCCD khi mua vé.</li>
                                <li>Trẻ em áp dụng cho chiều cao từ 0,7m đến 1,3m.</li>
                                <li>Người cao tuổi áp dụng cho khách từ 55 tuổi trở lên.</li>
                                <li>Vé sau 22h áp dụng giá vé khách hàng thành viên cho phim 2D.</li>
                            </ul>

                            <p className="sub-title-bold">Phụ thu 3D:</p>
                            <ul className="info-list sm-text nested">
                                <li>Ngày thường: 30.000đ (suất thứ 2– thứ 5)</li>
                                <li>Cuối tuần & ngày lễ: 50.000đ (suất thứ 6– thứ 7)</li>
                            </ul>
                            <p className="plain-text">Phụ thu ghế đôi: 20.000đ / ghế</p>
                            <p className="plain-text">Phụ thu suất chiếu sớm / preview: 10.000đ</p>
                        </div>

                        {/* Phần 2: Lịch hoạt động */}
                        <div className="info-section mt-large">
                            <h3 className="section-title">LỊCH HOẠT ĐỘNG CINEPLEX</h3>
                            <p className="sub-title-bold">Giờ mở cửa</p>
                            <ul className="info-list">
                                <li>Từ 8:30 – 23:00 hàng ngày</li>
                            </ul>

                            <p className="sub-title-bold">Lưu ý về Lịch chiếu</p>
                            <ul className="info-list">
                                <li>Lịch chiếu được cập nhật tự động mỗi ngày trên hệ thống.</li>
                                <li>Các ngày lễ hoặc cuối tuần có thể tăng số suất chiếu cho các phim hot.</li>
                                <li>Bạn nên đặt vé sớm để chọn được ghế đẹp.</li>
                            </ul>
                        </div>
                    </div>

                    {/* CỘT PHẢI: HÌNH ẢNH BẢNG GIÁ */}
                    <div className="price-image-col">
                        <img src={priceTableImg} alt="Bảng giá vé chi tiết" />
                    </div>

                </div>

                {/* Nút quay lại */}
                <button className="btn-back-booking" onClick={() => navigate('/phim-dang-chieu')}>
                    Trở về trang bán vé xem phim
                </button>

            </div>
        </div>
    );
};

export default PriceSchedulePage;