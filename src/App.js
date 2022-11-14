import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Loginandcreateaccount/Login/Login";
import Signup from "./Components/Loginandcreateaccount/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import Contactus from "./Components/Contactus/Contactus";
import OtpVerification from "./Components/Loginandcreateaccount/OTP/OtpVerification";
import PostATasker from "./Components/Postatasker/PostATasker";
import Howitwork from "./Components/Howitworks/Howitwork";
import Help from "./Components/Help/Help";
import ViewPost from "./Components/Viewpost/ViewPost";

const App = () => {

  useEffect(() => {
    localStorage.setItem('isLogin', false)
    localStorage.setItem('email', 'adminskiller@gmail.com')
    localStorage.setItem('password', '12345@')
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/post-a-task" element={< PostATasker />} />
        <Route path="/help" element={< Help />} />
        <Route path="/accountants" element={< ViewPost />} />
        {/* <Route path="/post-a-task" element={< />} /> */}
        {/* <Route path="/about-us" element={< />} /> */}
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
