import React from "react";
import Menu from "../Components/Menu/Menu";
import Banner from "../Components/LandingPageComponents/Banner/Banner";
import Categories from "../Components/LandingPageComponents/Categories/Categories";
import HowItsWork from "../Components/LandingPageComponents/HowItsWork/HowItsWork";
import Vendor from "../Components/LandingPageComponents/Vendor/Vendor";
import StaticsCounter from "../Components/LandingPageComponents/StaticsCounter/StaticsCounter";
import Blogs from "../Components/LandingPageComponents/Blogs/Blogs";
import ChooseUs from "../Components/LandingPageComponents/ChooseUs/ChooseUs";
import Testimonial from "../Components/LandingPageComponents/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Menu />
            <Banner />
            <Categories />
            <HowItsWork />
            <Vendor />
            <StaticsCounter />
            <Blogs />
            <ChooseUs />
            <Testimonial />
            <Footer />
        </>
    );
};

export default HomePage;