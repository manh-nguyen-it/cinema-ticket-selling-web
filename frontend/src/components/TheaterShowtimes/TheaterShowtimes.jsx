import React from 'react';

/**
 * Component TheaterShowtimes: Hiển thị lịch chiếu cho MỘT rạp
 * Props:
 * - theater: { name, address, formats: [{ type, times }] }
 */
export default function TheaterShowtimes({ theater }) {
    return (
        <div className="theater-showtimes">
            <div className="theater-info">
                <div className="brand-name">CineZone</div>
                <h4>{theater.name}</h4>
                <p className="theater-address">{theater.address}</p>
            </div>

            <div className="theater-formats">
                {theater.formats.map((format) => (
                    <div key={format.type} className="format-group">
                        <div className="format-type">{format.type}</div>
                        <div className="time-slots">
                            {format.times.map((time) => (
                                <button key={time} className="time-btn">{time}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}