// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
import CinemaRulesPage from './pages/CinemaRulesPage/CinemaRulesPage';
import PriceSchedulePage from './pages/PriceSchedulePage/PriceSchedulePage';
import BoxOfficePage from './pages/BoxOfficePage/BoxOfficePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
// Import component của BẠN KIA (Ví dụ Header - nếu cần)
// import Header from './components/Header/Header'; 

const App = () => {
    return (
        <BrowserRouter>
            {/* Nếu muốn Header hiển thị ở mọi trang, đặt nó ở đây */}
            {/* <Header /> */}

            <div className="app-container">
                <Routes>
                    {/* --- ROUTE CỦA BẠN KIA (Ví dụ) --- */}
                    {/* <Route path="/header" element={<Header />} /> */}

                    {/* --- CÁC ROUTE CỦA BẠN --- */}

                    {/* Điều hướng mặc định */}
                    <Route path="/" element={<Navigate to="/phim-dang-chieu" />} />

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
                    <Route path="/quy-dinh" element={<CinemaRulesPage />} />
                    <Route path="/gia-ve-lich-chieu" element={<PriceSchedulePage />} />
                    <Route path="/bang-xep-hang" element={<BoxOfficePage />} />
                    <Route path="/dang-nhap" element={<LoginPage />} />
                    <Route path="/dang-ky" element={<RegisterPage />} />
                    <Route path="/quen-mat-khau" element={<ForgotPasswordPage />} />
                    <Route path="/tao-mat-khau-moi" element={<ResetPasswordPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;