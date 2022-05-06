import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/layout/pages/about/About";
import AddInventory from "./components/layout/pages/add-inventory/AddInventory";
import Login from "./components/layout/pages/auth/login/Login";
import ResetPassword from "./components/layout/pages/auth/reset-password/ResetPassword";
import SignUp from "./components/layout/pages/auth/sign-up/SignUp";
import Blogs from "./components/layout/pages/blogs/Blogs";
import Home from "./components/layout/pages/home/Home";
import Inventory from "./components/layout/pages/inventory/Inventory";
import NotFound from "./components/layout/pages/not-found/NotFound";
import RequireAuth from "./components/layout/require-auth/RequireAuth";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
                path="/inventory/:id"
                element={
                    <RequireAuth>
                        <Inventory />
                    </RequireAuth>
                }
            />
            <Route
                path="/add-inventory"
                element={
                    <RequireAuth>
                        <AddInventory />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MyRoutes;
