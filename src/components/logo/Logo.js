import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ size }) => {
    return (
        <h1 className="tracking-tight text-stone-400" style={{ fontSize: size }}>
            <Link to={"/"}>
                <span className="">NT Grocery Stock™</span>
            </Link>
        </h1>
        
    );
};

export default Logo;
