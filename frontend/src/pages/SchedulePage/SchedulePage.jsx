import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import './SchedulePage.css';

// Import Component & Data mới
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import { WEEKLY_SCHEDULE_DATA } from '../../utils/mockData';
import TrailerModal from '../../components/TrailerModal/TrailerModal';

const SchedulePage = () => {
    // State chọn ngày (index 0 -> 6)
    const [selectedDateIndex, setSelectedDateIndex] = useState(0);

    // State Modal Trailer
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [currentTrailerUrl, setCurrentTrailerUrl] = useState("");

    // Lấy dữ liệu của ngày đang chọn
    const currentDayData = WEEKLY_SCHEDULE_DATA[selectedDateIndex];

    const handleOpenTrailer = (url) => {
        const finalUrl = url || "https://www.youtube.com/embed/dQw4w9WgXcQ";
        setCurrentTrailerUrl(finalUrl);
        setIsTrailerOpen(true);
    };

    return (
        <div className="schedule-page">
            <div className="schedule-container">

                {/* HEADER */}
                <div className="schedule-header">
                    <h1 className="page-title">Lịch chiếu theo tuần</h1>
                    <div className="location-selector">
                        <FaMapMarkerAlt className="loc-icon" />
                        <span className="loc-text">Cineplex Quốc Thanh</span>
                        <FaChevronDown className="loc-arrow" />
                    </div>
                </div>

                {/* DATE SELECTOR (THANH CHỌN NGÀY) */}
                <div className="date-selector">
                    {WEEKLY_SCHEDULE_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`date-item ${index === selectedDateIndex ? 'active' : ''}`}
                            onClick={() => setSelectedDateIndex(index)}
                        >
                            <span className="day-number">{item.dayNumber}</span>
                            <span className="weekday">{item.dayOfWeek}</span>
                        </div>
                    ))}
                </div>

                {/* DANH SÁCH PHIM */}
                <div className="schedule-list">
                    {currentDayData && currentDayData.movies.length > 0 ? (
                        currentDayData.movies.map((film, index) => (
                            <ScheduleItem
                                key={`${selectedDateIndex}-${index}`}
                                data={film}
                                onTrailerClick={handleOpenTrailer}
                            />
                        ))
                    ) : (
                        <div className="no-schedule">Hôm nay không có suất chiếu nào.</div>
                    )}
                </div>

                {/* MODAL TRAILER */}
                <TrailerModal
                    isOpen={isTrailerOpen}
                    onClose={() => setIsTrailerOpen(false)}
                    trailerUrl={currentTrailerUrl}
                />

            </div>
        </div>
    );
};

export default SchedulePage;