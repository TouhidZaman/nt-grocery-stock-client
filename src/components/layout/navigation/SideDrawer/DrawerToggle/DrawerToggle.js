import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = ({toggleSideDrawer}) => {
    return (
        <div className={classes.drawerToggle} onClick={toggleSideDrawer}>
            <div></div>
            <div className='my-2'></div>
            <div></div>
        </div>
    );
};

export default DrawerToggle;