import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationItem = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={`border-b md:border-b-0 ${match && 'text-blue-500  border-blue-500'}`} to={to} {...props}>
            {children}
        </Link>
    );
};

export default NavigationItem;
