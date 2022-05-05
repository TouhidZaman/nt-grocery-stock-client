import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/layout/pages/about/About";
import Login from "./components/layout/pages/auth/login/Login";
import SignUp from "./components/layout/pages/auth/sign-up/SignUp";
import Blogs from "./components/layout/pages/blogs/Blogs";
import Home from "./components/layout/pages/home/Home";
import Inventory from "./components/layout/pages/inventory/Inventory";
import RequireAuth from "./components/layout/require-auth/RequireAuth";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
                path="/inventory/:id"
                element={
                    <RequireAuth>
                        <Inventory />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<Login />} />
        </Routes>
    );
};

export default MyRoutes;