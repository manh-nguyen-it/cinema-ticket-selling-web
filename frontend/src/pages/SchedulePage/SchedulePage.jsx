import React, { useState } from 'react';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import { MOCK_SCHEDULE, MOCK_DATES } from '../../utils/mockData';
import './SchedulePage.css';

const SchedulePage = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

    return (
        <div className="schedule-page">
            <div className="schedule-container">

                {/* Header: Tiêu đề + Chọn Rạp */}
                <div className="schedule-header">
                    <h1 className="page-title">Lịch chiếu theo tuần</h1>
                    <div className="location-selector">
                        <span className="location-icon">📍</span>
                        <select className="cinema-select">
                            <option>Cineplex Quốc Thanh</option>
                            <option>Cineplex Thủ Đức</option>
                            <option>Cineplex Ba Đình</option>
                        </select>
                    </div>
                </div>

                {/* Thanh chọn ngày (Date Selector) */}
                <div className="date-selector">
                    {MOCK_DATES.map((item, index) => (
                        <div
                            key={index}
                            className={`date-item ${index === selectedDateIndex ? 'active' : ''}`}
                            onClick={() => setSelectedDateIndex(index)}
                        >
                            <span className="day-number">{item.day}</span>
                            <span className="weekday">{item.weekday}</span>
                        </div>
                    ))}
                </div>

                {/* Danh sách phim */}
                <div className="schedule-list">
                    {/* Demo: Hiển thị danh sách giống nhau cho mọi ngày (vì mock data tĩnh) */}
                    {MOCK_SCHEDULE.map((film, index) => (
                        <ScheduleItem key={index} data={film} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SchedulePage;