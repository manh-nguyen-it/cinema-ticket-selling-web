import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style.css'

// Import các trang của BẠN
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import BookingPage from './pages/BookingPage/BookingPage';
import SeatSelectionPage from './pages/SeatSelectionPage/SeatSelectionPage';
import FoodSelectionPage from './pages/FoodSelectionPage/FoodSelectionPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage/PaymentSuccessPage';
import SpecialCinemaPage from './pages/SpecialCinemaPage/SpecialCinemaPage';
import CinemaSystemPage from './pages/CinemaSystemPage/CinemaSystemPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Home from './home/Home.jsx'
// Import component của BẠN KIA (Ví dụ Header - nếu cần)
// import Header from './components/Header/Header'; 

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    {/* --- ROUTE CỦA BẠN KIA (Ví dụ) --- */}
                    {/* <Route path="/header" element={<Header />} /> */}

                    {/* --- CÁC ROUTE CỦA BẠN --- */}

                    {/* Điều hướng mặc định */}
                    <Route path="/" element={<Home />}/>

                    {/* Danh sách phim */}
                    <Route path="/phim-dang-chieu" element={<MoviesPage status="NOW" />} />
                    <Route path="/phim-sap-chieu" element={<MoviesPage status="COMING" />} />

                    {/* Chi tiết & Đặt vé */}
                    <Route path="/phim/:id" element={<MovieDetail />} />
                    <Route path="/dat-ve/:id" element={<BookingPage />} />

                    {/* Quy trình đặt vé */}
                    <Route path="/chon-ghe/:id" element={<SeatSelectionPage />} />
                    <Route path="/chon-do-an/:id" element={<FoodSelectionPage />} />
                    <Route path="/thanh-toan/:id" element={<PaymentPage />} />
                    <Route path="/thanh-toan-thanh-cong" element={<PaymentSuccessPage />} />

                    {/* Các trang thông tin khác */}
                    <Route path="/rap-dac-biet" element={<SpecialCinemaPage />} />
                    <Route path="/he-thong-rap" element={<CinemaSystemPage />} />

                    {/* Trang cá nhân */}
                    <Route path="/dashboard" element={<DashboardPage />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;