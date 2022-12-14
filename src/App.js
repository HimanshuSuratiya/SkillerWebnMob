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
import UserProfile from "./Components/UserProfile/UserProfile";
import PastTasks from "./Components/PastTasks/PastTasks";
import MyRequest from "./Components/MyRequest/MyRequest";
import "./App.css";
import "./Responsive.css";

const App = () => {
  useEffect(() => {
    const LoginData = { users: [{ email: 'skillseeker@gmail.com', password: '12345@', type: 'skillseeker' }, { email: 'skillprovider@gmail.com', password: '12345@', type: 'skillprovider' }] }
    if (localStorage.getItem('isLoginType') === null) {
      localStorage.setItem('isLoginType', 'guest')
    } else {
      if (localStorage.getItem('isLoginType') === 'skillseeker') {
        localStorage.setItem('isLoginType', 'skillseeker')
      } else if (localStorage.getItem('isLoginType') === 'skillprovider') {
        localStorage.setItem('isLoginType', 'skillprovider')
      } else {
        localStorage.setItem('isLoginType', 'guest')
      }
    }
    localStorage.setItem('LoginData', JSON.stringify(LoginData));
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
        <Route path="/category/:name" element={< CategoriesPost />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/browse-requests" element={<BrowseRequests />} />
        <Route path="/my-requests" element={<MyRequest />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/past-tasks" element={<PastTasks />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/search-posts" element={<BrowseRequests />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
