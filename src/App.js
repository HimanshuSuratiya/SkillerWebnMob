import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Loginandcreateaccount/Login/Login";
import Signup from "./Components/Loginandcreateaccount/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import Contactus from "./Components/Contactus/Contactus";
import OtpVerification from "./Components/Loginandcreateaccount/OTP/OtpVerification";
import Menu from "./Components/Menu/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
