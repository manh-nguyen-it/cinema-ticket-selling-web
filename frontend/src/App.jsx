import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style.css'

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
import Home from './home/Home.jsx'
import GS from './promotion/GS.jsx'
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import MainLayout from './layout/MainLayout.jsx'
import NoHeaderAndFooter from './layout/NoHeaderAndFooter.jsx'
import News from './news/News.jsx'
import SchedulePage from './pages/SchedulePage/SchedulePage.jsx'
import NewsDetail from './news/NewsDetail';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route element={<MainLayout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="/promotion/1" element={<GS />} />
                        <Route path="/phim-dang-chieu" element={<MoviesPage status="NOW" />} />
                        <Route path="/phim-sap-chieu" element={<MoviesPage status="COMING" />} />
                        <Route path="/lich-chieu" element={<SchedulePage />} />
                        {/* Chi tiết & Đặt vé */}
                        <Route path="/phim/:id" element={<MovieDetail />} />
                        <Route path="/dat-ve/:id" element={<BookingPage />} />

                        {/* Quy trình đặt vé */}
                        <Route path="/chon-ghe/:id" element={<SeatSelectionPage />} />
                        <Route path="/chon-do-an/:id" element={<FoodSelectionPage />} />
                        <Route path="/thanh-toan/:id" element={<PaymentPage />} />
                        <Route path="/thanh-toan-thanh-cong" element={<PaymentSuccessPage />} />

                        {/* Trang khác */}
                        <Route path="/rap-dac-biet" element={<SpecialCinemaPage />} />
                        <Route path="/he-thong-rap" element={<CinemaSystemPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/lich-chieu" element={<SchedulePage />} />
                        <Route path="/chi-tiet-phim" element={<MovieDetail />} />
                    </Route>

                    <Route element={<NoHeaderAndFooter />}>
                        <Route path="/quy-dinh-cua-rap" element={<CinemaRulesPage />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/fast-and-furious" element={<NewsDetail />} />
                        <Route path="/dang-nhap" element={<Login />} />
                        <Route path="/dang-ky" element={<Register />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
