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
import Login from "../Components/Loginandcreateaccount/Login/Login";
import Signup from "../Components/Loginandcreateaccount/Signup/Signup";
import Profile from "../Components/Profile/Profile";
import Contactus from "../Components/Contactus/Contactus";
import OtpVerification from "../Components/Loginandcreateaccount/OTP/OtpVerification";

const LandingPage = () => {
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
            <Login />
            <Signup />
            <OtpVerification />
            <Profile />
            <Contactus />
        </>
    );
};

export default LandingPage;