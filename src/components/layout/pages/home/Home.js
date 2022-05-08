import React from "react";
import Backdrop from "../../../ui/backdrop/Backdrop";
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
            <Backdrop />
        </>
    );
};

export default Home;
