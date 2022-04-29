import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./layout/pages/about/About";
import Home from "./layout/pages/home/Home";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default MyRoutes;
