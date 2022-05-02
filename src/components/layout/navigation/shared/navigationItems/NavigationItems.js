import React from 'react';
import NavigationItem from './navigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className='flex items-center text-stone-400 font-semibold'>
            <li className='ml-3'>
                <NavigationItem to={'/'}>Home</NavigationItem>
            </li>
            <li className='ml-3'>
                <NavigationItem to={'/blogs'}>Blogs</NavigationItem>
            </li>
            <li className='ml-3'>
                <NavigationItem to={'/about'}>About</NavigationItem>
            </li>
            <li className='ml-3'>
                <NavigationItem to={'/login'}>Login</NavigationItem>
            </li>
        </ul>
    );
};

export default NavigationItems;