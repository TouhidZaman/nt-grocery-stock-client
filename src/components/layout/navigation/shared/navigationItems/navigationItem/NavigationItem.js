import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationItem = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={match && 'text-blue-500 border-b-2 border-blue-500 pb-5'} to={to} {...props}>
            {children}
        </Link>
    );
};

export default NavigationItem;
