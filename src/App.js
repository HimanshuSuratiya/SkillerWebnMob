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
import CategoriesPost from "./Components/CategoriesPost/CategoriesPost";
import Notification from "./Components/Notification/Notification";
import BrowseRequests from "./Components/BrowseRequests/BrowseRequests";
import MyTasks from "./Components/MyTasks/MyTasks";
import ForgetPassword from "./Components/Loginandcreateaccount/ForgetPassword/ForgetPassword";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('isLogin') === null) {
      localStorage.setItem('isLogin', 0)
    } else {
      if (parseInt(localStorage.getItem('isLogin')) === 1) {
        localStorage.setItem('isLogin', 1)
      } else {
        localStorage.setItem('isLogin', 0)
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
        <Route path="/accountants" element={< CategoriesPost />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/browse-requests" element={<BrowseRequests />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
