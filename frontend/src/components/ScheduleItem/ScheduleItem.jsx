import React from 'react';
import './ScheduleItem.css';

const ScheduleItem = ({ data }) => {
    return (
        <div className="schedule-item">
            {/* Cột hình ảnh Poster */}
            <div className="schedule-poster-wrapper">
                <img src={data.photo_link} alt={data.name} className="schedule-poster" />
                <div className="play-icon-overlay">
                    {/* Icon Play đơn giản */}
                    <div className="play-circle">▶</div>
                    <div className="trailer-text">Xem Trailer</div>
                </div>
            </div>
            <div className="schedule-full-info">
                {/* Cột thông tin chi tiết */}
                <div className="schedule-info">
                    <h3 className="schedule-title">{data.name}</h3>

                    <div className="schedule-details">
                        <p><strong>Thời lượng:</strong> {Math.floor(data.period / 60)} giờ {data.period % 60} phút</p>
                        <p><strong>Đánh giá:</strong> {data.rating}</p>
                        <p><strong>Thể loại:</strong> {data.type_name}</p>
                        <p><strong>Diễn viên:</strong> {data.actors}</p>
                        <p><strong>Ngày phát hành:</strong> {data.release_date}</p>
                        <p><strong>Ngôn ngữ:</strong> {data.language}</p>
                    </div>

                    <a href="#" className="detail-link">Thông tin chi tiết</a>

                </div>
                {/* Cột Giờ chiếu */}
                <div className="schedule-times">
                    <h4 className="times-label">Lịch chiếu</h4>
                    <div className="time-list">
                        {data.showtimes.map((time, index) => (
                            <button key={index} className="time-btn">
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleItem;