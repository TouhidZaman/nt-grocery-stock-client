import React from "react";
import Logo from "../../../logo/Logo";
import NavigationItems from "../shared/navigationItems/NavigationItems";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Logo size="30px" />
                <div className="hidden sm:block">
                    <NavigationItems />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
