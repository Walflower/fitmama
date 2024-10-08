import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./pages/Signup/SignUp";
import { Login } from "./pages/Login/Login";

import Dashboard from "./pages/Dashboard/Dashboard";
import Membership from "./pages/Membership/Membership";
import { CommunityForum } from "./pages/CommunityForum/CommuntiyForum";
import Network from "./pages/Network/Network";
import UserProfile from "./pages/UserProfile/UserProfile";
import Chat from "./pages/Chat/Chat";
import Challenges from "./pages/Challenges/Challenges";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";

import FAQ from "./pages/FAQ/FAQ";
import ContactUs from "./pages/ContactUs/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Login" element={<Membership />} />
      <Route path="/Community" element={<CommunityForum />} />
      <Route path="/Network" element={<Network />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Challenges" element={<Challenges />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
