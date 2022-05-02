import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navigation/navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="min-h-[55vh]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
