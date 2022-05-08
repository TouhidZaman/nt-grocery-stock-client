import React from "react";
import { Route, Routes } from "react-router-dom";
import AddInventory from "./components/layout/pages/add-inventory/AddInventory";
import Login from "./components/layout/pages/auth/login/Login";
import ResetPassword from "./components/layout/pages/auth/reset-password/ResetPassword";
import SignUp from "./components/layout/pages/auth/sign-up/SignUp";
import Blogs from "./components/layout/pages/blogs/Blogs";
import Home from "./components/layout/pages/home/Home";
import InventoryItemDetail from "./components/layout/pages/inventory-item-detail/InventoryItemDetail";
import ManageInventory from "./components/layout/pages/manage-inventory/ManageInventory";
import MyItems from "./components/layout/pages/my-items/MyItems";
import NotFound from "./components/layout/pages/not-found/NotFound";
import RequireAuth from "./components/layout/require-auth/RequireAuth";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
                path="/inventory/:itemId"
                element={
                    <RequireAuth>
                        <InventoryItemDetail />
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
            <Route
                path="/manage-inventory"
                element={
                    <RequireAuth>
                        <ManageInventory />
                    </RequireAuth>
                }
            />
            <Route
                path="/my-items"
                element={
                    <RequireAuth>
                        <MyItems />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MyRoutes;
