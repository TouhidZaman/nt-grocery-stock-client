import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./layout/pages/about/About";
import Login from "./layout/pages/auth/login/Login";
import SignUp from "./layout/pages/auth/signUp/SignUp";
import Blogs from "./layout/pages/blogs/Blogs";
import Home from "./layout/pages/home/Home";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
};

export default MyRoutes;
