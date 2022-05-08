import React from "react";
import Logo from "../../../logo/Logo";
import NavigationItems from "../shared/navigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Navbar = ({ toggleSideDrawer }) => {
    return (
        <nav className="bg-gray-800 py-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Logo size="30px" />
                <DrawerToggle toggleSideDrawer={toggleSideDrawer} />
                <div className="hidden md:block">
                    <NavigationItems />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
