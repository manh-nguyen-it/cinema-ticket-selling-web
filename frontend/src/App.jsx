// src/App.jsx
import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import BookingPage from './pages/BookingPage/BookingPage';
import SeatSelectionPage from './pages/SeatSelectionPage/SeatSelectionPage'; // Import mới
import FoodSelectionPage from './pages/FoodSelectionPage/FoodSelectionPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage/PaymentSuccessPage';
import SpecialCinemaPage from './pages/SpecialCinemaPage/SpecialCinemaPage';
import CinemaSystemPage from './pages/CinemaSystemPage/CinemaSystemPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
const App = () => {
    const routes = useRoutes([
        { path: '/', element: <Navigate to="/phim-dang-chieu" /> },
        { path: '/phim-dang-chieu', element: <MoviesPage status="NOW" /> },
        { path: '/phim-sap-chieu', element: <MoviesPage status="COMING" /> },
        { path: '/phim/:id', element: <MovieDetail /> },
        { path: '/dat-ve/:id', element: <BookingPage /> },

        // Route mới cho trang chọn ghế
        { path: '/chon-ghe/:id', element: <SeatSelectionPage /> },
        { path: '/chon-do-an/:id', element: <FoodSelectionPage /> },
        { path: '/thanh-toan/:id', element: <PaymentPage /> },
        { path: '/thanh-toan-thanh-cong', element: <PaymentSuccessPage /> },
        { path: '/rap-dac-biet', element: <SpecialCinemaPage /> },
        { path: '/he-thong-rap', element: <CinemaSystemPage /> },
        { path: '/dashboard', element: <DashboardPage /> },
    ]);


    return <div className="app-container">{routes}</div>;
};

export default App;