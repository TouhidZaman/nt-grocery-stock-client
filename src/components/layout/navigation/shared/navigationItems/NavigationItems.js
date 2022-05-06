import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../../firebase/firebase.init";
import NavigationItem from "./navigationItem/NavigationItem";

const NavigationItems = () => {
    const [user] = useAuthState(auth);
    return (
        <ul className="flex items-center text-stone-400 font-semibold">
            <li className="ml-4">
                <NavigationItem to={"/"}>Home</NavigationItem>
            </li>
            {user && (
                <>
                    <li className="ml-4">
                        <NavigationItem to={"/manage-inventory"}>Manage Items</NavigationItem>
                    </li>
                    <li className="ml-4">
                        <NavigationItem to={"/add-inventory"}>Add Item</NavigationItem>
                    </li>
                    <li className="ml-4">
                        <NavigationItem to={"/my-inventory"}>My Items</NavigationItem>
                    </li>
                </>
            )}
            <li className="ml-4">
                <NavigationItem to={"/blogs"}>Blogs</NavigationItem>
            </li>
            <li className="ml-4">
                <NavigationItem to={"/about"}>About</NavigationItem>
            </li>

            <li className="ml-4">
                {user ? (
                    <Link onClick={() => signOut(auth)} to={"/login"}>
                        {user.displayName?.split(" ")[0]} (Logout)
                    </Link>
                ) : (
                    <NavigationItem to={"/login"}>Login</NavigationItem>
                )}
            </li>
        </ul>
    );
};

export default NavigationItems;
