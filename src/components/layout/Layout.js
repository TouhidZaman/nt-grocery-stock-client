import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navigation/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
                <ToastContainer />
            </header>
            <main className="min-h-[55vh] bg-gray-900">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
