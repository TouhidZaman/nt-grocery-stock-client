import React from "react";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Contact from "./contact/Contact";
import DisplayItems from "./display-items/DisplayItems";

const Home = () => {
    return (
        <>
            <Banner />
            <DisplayItems />
            <Categories />
            <Contact />
        </>
    );
};

export default Home;
