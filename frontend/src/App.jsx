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
import GS from './promotion/GS.jsx'
// Import component của BẠN KIA (Ví dụ Header - nếu cần)
// import Header from './components/Header/Header';
import Login from './login/Login.jsx'
import Register from './register/Register.jsx'
import MainLayout from './layout/MainLayout.jsx'
import AuthLayout from './layout/AuthLayout.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/promotion/1" element={<GS />} />

                {/* Phim */}
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

                {/* Trang khác */}
                <Route path="/rap-dac-biet" element={<SpecialCinemaPage />} />
                <Route path="/he-thong-rap" element={<CinemaSystemPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />

            </Route>

            {/* ===== ROUTE KHÔNG HEADER & FOOTER ===== */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
