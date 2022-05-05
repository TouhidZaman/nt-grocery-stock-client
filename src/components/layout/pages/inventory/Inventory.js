import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h3> This is protected inventory route</h3>
            <h1>Item Id: {id}</h1>
            <button onClick={() => navigate('/')}>Back to home</button>
        </div>
    );
};

export default Inventory;
