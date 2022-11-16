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
import { useNavigate } from "react-router-dom";
import Notification from "./Components/Notification/Notification";
import BrowseRequests from "./Components/BrowseRequests/BrowseRequests";

const App = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLogin') === null) {
      localStorage.setItem('isLogin', 0)
    } else {
      if (parseInt(localStorage.getItem('isLogin')) === 1) {
        localStorage.setItem('isLogin', 1)
        navigate("/");
      } else {
        localStorage.setItem('isLogin', 0)
        navigate("/login");
      }
    }
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
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/browse-requests" element={<BrowseRequests />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
