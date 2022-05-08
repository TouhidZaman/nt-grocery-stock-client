import React, { useState } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navigation/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import SideDrawer from "./navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
    //For handling side drawer open and closed
    const [show, setShow] = useState(false);
    const sideDrawerClosedHandler = () => setShow(false);
    const toggleSideDrawerHandler = () => setShow((prevShow) => !prevShow);
    return (
        <>
            <header>
                <Navbar toggleSideDrawer={toggleSideDrawerHandler} />
                <SideDrawer show={show} sideDrawerClosed={sideDrawerClosedHandler} />
                <ToastContainer />
            </header>
            <main className="min-h-[55vh] bg-gray-900">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
