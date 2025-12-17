import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import './CinemaRulesPage.css';

const CinemaRulesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="rules-page">

            {/* Header giả lập (Nếu bạn đã có Header chung thì có thể bỏ phần này) */}
            <div className="rules-header-top">
                <div className="brand-news">STAR <span>NEWS</span></div>
                <div className="search-bar-fake">
                    <FaSearch className="search-icon" />
                    <span>Tìm kiếm</span>
                </div>
            </div>

            <div className="rules-wrapper">

                {/* CONTAINER CHÍNH MÀU #1E0D28 */}
                <div className="rules-container">
                    <h1 className="page-title">Quy định của rạp</h1>
                    <p className="page-subtitle">
                        “Để đảm bảo trải nghiệm điện ảnh tốt nhất, quý khách vui lòng tuân thủ các quy định sau”
                    </p>

                    <div className="rules-content">

                        {/* MỤC 1 */}
                        <div className="rule-section">
                            <h3 className="rule-heading">1. Nội quy Phòng chiếu:</h3>
                            <ul className="rule-list">
                                <li><strong>Văn hóa xem phim:</strong> Không quay phim, chụp ảnh, tắt chuông điện thoại, không gây mất trật tự.</li>
                                <li><strong>Vệ sinh & An toàn:</strong> Không hút thuốc, không nhai kẹo cao su, không mang thú cưng vào rạp.</li>
                                <li><strong>Ẩm thực:</strong> Chỉ sử dụng thức ăn và nước uống mua trực tiếp tại quầy của rạp.</li>
                                <li><strong>Chất cấm:</strong> Tuyệt đối không sử dụng rượu, bia, chất kích thích trong khuôn viên rạp.</li>
                                <li><strong>An ninh:</strong> Rạp có trang bị camera giám sát để đảm bảo an toàn và bản quyền phim.</li>
                            </ul>
                        </div>

                        {/* MỤC 2 */}
                        <div className="rule-section">
                            <h3 className="rule-heading">2. Phân loại Phim theo Độ tuổi:</h3>
                            <ul className="rule-list">
                                <li>Quý khách vui lòng chọn phim đúng độ tuổi quy định (Nhân viên sẽ kiểm tra giấy tờ tùy thân như CCCD/Thẻ HS-SV tại quầy):</li>
                                <li>
                                    <strong>Lưu ý về khung giờ:</strong>
                                    <ul className="sub-list">
                                        <li>Phim cho khán giả dưới 13 tuổi kết thúc trước 22:00.</li>
                                        <li>Phim cho khán giả under 16 tuổi kết thúc trước 23:00.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* MỤC 3 */}
                        <div className="rule-section">
                            <h3 className="rule-heading">3. Chính sách Giá vé Ưu đãi:</h3>
                            <p className="rule-desc">Cineplex áp dụng mức giá đặc biệt cho các đối tượng sau (Chỉ áp dụng khi mua trực tiếp tại quầy và có giấy tờ chứng minh):</p>
                            <ul className="rule-list">
                                <li><strong>Trẻ em (Dưới 16 tuổi hoặc cao dưới 1m3):</strong> Giảm tối thiểu 20% so với giá vé người lớn.</li>
                                <li><strong>Thành viên U22 (12 - 22 tuổi):</strong> Áp dụng mức giá ưu đãi dành riêng cho thành viên.</li>
                                <li><strong>Người cao tuổi (Trên 55 tuổi):</strong> Giảm tối thiểu 20%.</li>
                                <li><strong>Người có công / Hoàn cảnh khó khăn:</strong> Giảm tối thiểu 20%.</li>
                                <li><strong>Người khuyết tật nặng:</strong> Giảm tối thiểu 50%.</li>
                                <li><strong>Người khuyết tật đặc biệt nặng:</strong> Miễn phí vé xem phim.</li>
                            </ul>
                        </div>

                        {/* MỤC 4 */}
                        <div className="rule-section">
                            <h3 className="rule-heading">4. Lưu ý khi Đặt vé Trực tuyến:</h3>
                            <ul className="rule-list">
                                <li>Các chính sách giảm giá cho Trẻ em, Người cao tuổi, Người có công và Người khuyết tật không áp dụng khi đặt vé online.</li>
                                <li>Quý khách thuộc đối tượng ưu đãi vui lòng mang giấy tờ liên quan đến mua vé trực tiếp tại rạp để được hưởng quyền lợi.</li>
                                <li>Ban quản lý có quyền từ chối vào rạp nếu khách hàng không chứng minh được độ tuổi phù hợp với phim đã đặt.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Nút quay lại */}
                <button className="btn-back-news" onClick={() => navigate('/')}>
                    Trở về trang tin tức
                </button>

            </div>
        </div>
    );
};

export default CinemaRulesPage;