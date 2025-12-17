import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header.jsx";
import Footer from "../common/Footer/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
