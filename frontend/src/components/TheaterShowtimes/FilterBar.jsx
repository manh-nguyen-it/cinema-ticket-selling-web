import React from 'react';
import { FaCalendarAlt, FaFilm, FaStore } from 'react-icons/fa';
import CustomDropdown from '../common/CustomDropdown';

/**
 * Component FilterBar: Chứa các dropdown để lọc
 * Props: Nhận từ ShowtimesPage
 */
export default function FilterBar({
    dayOptions,
    movieOptions,
    theaterOptions,
    selectedDay,
    selectedMovie,
    selectedTheater,
    onDaySelect,
    onMovieSelect,
    onTheaterSelect
}) {
    return (
        // Đây là JSX của thanh filter, 
        // được tách ra từ Header.jsx cũ
        <div className="filter-bar">
            <CustomDropdown
                label="1. Ngày"
                icon={<FaCalendarAlt />}
                options={dayOptions}
                selectedValue={selectedDay?.label}
                onSelect={onDaySelect}
            />
            <CustomDropdown
                label="2. Phim"
                icon={<FaFilm />}
                options={movieOptions}
                selectedValue={selectedMovie?.label}
                onSelect={onMovieSelect}
                className="film-dropdown" // Giữ lại class tùy chỉnh
            />
            <CustomDropdown
                label="3. Rạp"
                icon={<FaStore />}
                options={theaterOptions}
                selectedValue={selectedTheater?.label}
                onSelect={onTheaterSelect}
            />
        </div>
    );
}