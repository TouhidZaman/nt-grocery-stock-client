import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavigationItem = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={match && 'text-amber-600'} to={to} {...props}>
            {children}
        </Link>
    );
};

export default NavigationItem;
