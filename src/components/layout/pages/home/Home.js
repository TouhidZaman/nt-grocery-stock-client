import React from "react";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import DisplayItems from "./display-items/DisplayItems";

const Home = () => {
    return <div>
        <Banner />
        <DisplayItems />
        <Categories />
    </div>;
};

export default Home;
