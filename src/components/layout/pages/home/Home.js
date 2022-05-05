import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const id1 = 123;
    const id2 = 456;
    const id3 = 789;
    const navigate = useNavigate();
    return (
        <div>
            <h3>This is Home page</h3>
            <button onClick={() => navigate(`/inventory/${id1}`)}>Item 1</button>
            <button onClick={() => navigate(`/inventory/${id2}`)}>Item 2</button>
            <button onClick={() => navigate(`/inventory/${id3}`)}>Item 3</button>
        </div>
    );
};

export default Home;
