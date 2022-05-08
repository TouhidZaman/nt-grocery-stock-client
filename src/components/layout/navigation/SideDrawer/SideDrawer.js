import React from "react";
import Logo from "../../../logo/Logo";
import Backdrop from "../../../ui/backdrop/Backdrop";
import NavigationItems from "../shared/navigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ show, sideDrawerClosed }) => {
   return (
      <>
         <Backdrop show={show} clicked={sideDrawerClosed} />
         <div className={`${classes.sideDrawer} ${show ? classes.open : classes.close}`}>
            <Logo size="30px" />
            <nav className={classes.navigationContainer}>
               <NavigationItems />
            </nav>
         </div>
      </>
   );
};

export default SideDrawer;
