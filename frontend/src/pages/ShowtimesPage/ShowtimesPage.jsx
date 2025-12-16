import React, { useState } from 'react';
// ... (imports không đổi)
import MovieShowtimeItem from '../../components/MovieShowtimeItem/MovieShowtimeItem';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import './ShowtimesPage.css'; // Import file CSS
import FilterBar from '../../components/TheaterShowtimes/FilterBar';

// --- DỮ LIỆU GIẢ (Mock Data) - ĐÃ CẬP NHẬT THEO DATABASE ---
const mockMovieData = [
    {
        film_id: 'F001', // Thay vì 'id'
        name: 'CỤC VÀNG CỦA NGOẠI (T13)', // Thay vì 'title'
        photo_link: 'https://placehold.co/150x220/eee/000?text=Cuc+Vang', // Thay vì 'poster'
        // 'tags' được tổng hợp từ 'age', 'period', 'type.name'
        tags: ['C13', 'Tình cảm', '118 phút'],
        age: 13,
        period: 118,
        trailer_video_link: 'https://youtube.com/watch?v=example1',
        theaters: [ // 'theaters' là dữ liệu đã qua xử lý (join 'cinema' và 'screening')
            {
                cinema_id: 'C01', // Thêm cinema_id
                name: 'Mỹ Tho ( Đồng Tháp )', // Từ 'cinema.name'
                address: '02 Hùng Vương, P.1, TP. Mỹ Tho, Tỉnh Đồng Tháp', // Từ 'cinema.address'
                formats: [ // 'formats' là dữ liệu đã qua xử lý (group by 'room'/'seat_type' từ 'screening')
                    { type: 'STANDARD', times: ['15:40', '16:05', '16:35', '18:00'] }, // 'times' là 'screening.time_point'
                    { type: 'DELUXE', times: ['17:00'] }
                ]
            },
            {
                cinema_id: 'C02',
                name: 'Hai Bà Trưng (TP.HCM)',
                address: 'Lầu 5, 123 Hai Bà Trưng, P. Bến Nghé, Quận 1',
                formats: [
                    { type: 'STANDARD', times: ['15:00', '16:05', '18:30'] },
                    { type: 'DELUXE', times: ['17:00'] }
                ]
            },
        ]
    },
    {
        film_id: 'F002',
        name: 'GODZILLA MINUS ONE (T13)',
        photo_link: 'https://placehold.co/150x220/111/FFF?text=Godzilla',
        tags: ['C13', 'Kinh dị', '125 phút'],
        age: 13,
        period: 125,
        trailer_video_link: 'https://youtube.com/watch?v=example2',
        theaters: [
            {
                cinema_id: 'C01',
                name: 'Mỹ Tho ( Đồng Tháp )',
                address: '02 Hùng Vương, P.1, TP. Mỹ Tho, Tỉnh Đồng Tháp',
                formats: [
                    { type: 'STANDARD', times: ['18:30', '19:15', '21:00'] },
                    { type: 'DELUXE', times: ['20:00'] }
                ]
            },
            {
                cinema_id: 'C03',
                name: 'Đà Lạt (Lâm Đồng)',
                address: 'Lầu 1, 456 Phan Đình Phùng, P.2, TP. Đà Lạt',
                formats: [
                    { type: 'STANDARD', times: ['18:45', '19:00', '19:30', '20:00'] },
                ]
            }
        ]
    }
];
const mockCarouselData = [
    // Cập nhật theo 'film' table
    { film_id: 'F001', name: 'CỤC VÀNG CỦA NGOẠI (T13)', photo_link: 'https://placehold.co/200x300/eee/000?text=Poster+1', trailer_video_link: '...' },
    { film_id: 'F002', name: 'GODZILLA MINUS ONE (T13)', photo_link: 'https://placehold.co/200x300/111/FFF?text=Poster+2', trailer_video_link: '...' },
    { film_id: 'F003', name: 'TÌNH NGƯỜI DUYÊN MA (T13)', photo_link: 'https://placehold.co/200x300/444/FFF?text=Poster+3', trailer_video_link: '...' },
    { film_id: 'F004', name: 'TRÁI TIM QUÊ GOẠT (T18)', photo_link: 'https://placehold.co/200x300/777/FFF?text=Poster+4', trailer_video_link: '...' },
    { film_id: 'F005', name: 'PHIM MỚI 1 (T16)', photo_link: 'https://placehold.co/200x300/812/FFF?text=Poster+5', trailer_video_link: '...' },
    { film_id: 'F006', name: 'PHIM MỚI 2 (T13)', photo_link: 'https://placehold.co/200x300/185/FFF?text=Poster+6', trailer_video_link: '...' },
];


const dayOptions = [

    { id: 'd1', label: 'Hôm nay' },
    { id: 'd2', label: 'Ngày mai' },
    { id: 'd3', label: 'Ngày kia' },
];
const movieOptions = mockMovieData.map(movie => ({ id: movie.film_id, label: movie.name }));

const theaterOptions = [
    { id: 'C01', label: 'Mỹ Tho (Đồng Tháp)' },
    { id: 'C02', label: 'Hai Bà Trưng (TP.HCM)' },
    { id: 'C03', label: 'Đà Lạt (Lâm Đồng)' },
];



export default function ShowtimesPage() {

    const [selectedDay, setSelectedDay] = useState(dayOptions[0]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);

    // TODO: Sau này, bạn có thể lọc 'mockMovieData' dựa trên các state này
    const filteredMovies = mockMovieData; // Tạm thời vẫn hiển thị tất cả

    return (
        <div className="showtimes-page">
            <FilterBar
                dayOptions={dayOptions}
                movieOptions={movieOptions}
                theaterOptions={theaterOptions}

                selectedDay={selectedDay}
                selectedMovie={selectedMovie}
                selectedTheater={selectedTheater}

                onDaySelect={setSelectedDay}
                onMovieSelect={setSelectedMovie}
                onTheaterSelect={setSelectedTheater}
            />

            <main className="main-content">

                {filteredMovies.map((movie) => (
                    <MovieShowtimeItem key={movie.film_id} movie={movie} />
                ))}

                <button className="view-all-btn">XEM TẤT CẢ LỊCH CHIẾU</button>

                <MovieCarousel movies={mockCarouselData} />

            </main>


        </div>
    );
}