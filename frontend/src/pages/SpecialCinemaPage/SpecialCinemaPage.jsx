import React from 'react';
import './SpecialCinemaPage.css';

const SECTIONS = [
    {
        id: 'tech',
        category: "CÔNG NGHỆ",
        // 3 ảnh đầu: Ảnh trái - Nội dung phải
        items: [
            {
                title: "IMAX",
                desc: "Mang đến trải nghiệm điện ảnh đỉnh cao với màn hình siêu lớn, độ phân giải vượt trội và hệ thống âm thanh mạnh mẽ, cho hình ảnh sắc nét và cảm giác choáng ngợp trong từng khung hình.",
                img: "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "4DX",
                desc: "Là định dạng xem phim đa giác quan với ghế chuyển động cùng các hiệu ứng như gió, nước, rung lắc, giúp khán giả \"bước vào\" thế giới phim một cách sống động và chân thực.",
                img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Starium",
                desc: "Sở hữu màn hình cong khổng lồ kết hợp âm thanh vòm hiện đại, tạo không gian xem phim rộng mở và cảm giác đắm chìm tối đa cho những bom tấn điện ảnh.",
                img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    {
        id: 'style',
        category: "PHONG CÁCH",
        // 4 ảnh sau: Ảnh phải - Nội dung trái (Sẽ xử lý bằng CSS row-reverse)
        reverseLayout: true,
        items: [
            {
                title: "Gold Class",
                desc: "Là không gian xem phim cao cấp với ghế ngồi sang trọng, riêng tư và dịch vụ phục vụ tận chỗ, mang đến trải nghiệm thư giãn và đẳng cấp vượt trội.",
                img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Sweet Box",
                desc: "Là phòng chiếu dành cho các cặp đôi, với ghế đôi thoải mái và không gian ấm cúng, lý tưởng cho những buổi xem phim lãng mạn và riêng tư.",
                img: "https://images.unsplash.com/photo-1517602302552-471fe16ef0f4?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Cine & Suite",
                desc: "Là mô hình rạp chiếu hạng sang với phòng xem riêng biệt, ghế ngả cao cấp và dịch vụ cá nhân hóa, mang đến trải nghiệm điện ảnh tinh tế và độc quyền.",
                img: "https://images.unsplash.com/photo-1543536448-d209d2d15994?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "3D",
                desc: "Phòng chiếu 3D sử dụng công nghệ hình ảnh lập thể hiện đại, tạo chiều sâu sống động, giúp khán giả cảm nhận rõ ràng từng chuyển động và chi tiết trong phim.",
                img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
            }
        ]
    }
];

const SpecialCinemaPage = () => {
    return (
        <div className="special-cinema-page">
            <div className="special-container">

                {/* Header: Title trái, Subtitle giữa */}
                <div className="special-header">
                    <h1 className="main-title">Rạp đặc biệt</h1>
                    <p className="sub-title">Tận hưởng cả thế giới điện ảnh đều có mặt tại Cineplex</p>
                </div>

                {/* Content Loops */}
                {SECTIONS.map((section) => (
                    <div key={section.id} className="cinema-section-group">

                        {/* Category Badge */}
                        <div className="category-label">
                            <span>{section.category}</span>
                        </div>

                        {/* List Items */}
                        <div className="cinema-list">
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    // Nếu reverseLayout = true thì thêm class 'row-reverse'
                                    className={`cinema-row-item ${section.reverseLayout ? 'row-reverse' : ''}`}
                                >
                                    {/* Khối Ảnh (Luôn render trước trong DOM, CSS sẽ đổi vị trí hiển thị) */}
                                    <div className="item-image-box">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    {/* Khối Nội Dung (Màu tím) */}
                                    <div className="item-text-box">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p className="card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialCinemaPage;