import React from "react";
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
import { WelcomeBack } from "./pages/WelcomeBack/WelcomeBack";
import { Questionnaire } from "./pages/Questionnaire/Questionnaire";
import { Q2 } from "./pages/Q2/Q2";
import { Q3 } from "./pages/Q3/Q3";
import Dashboard from "./pages/Dashboard/Dashboard";
import Membership from "./pages/Membership/Membership";
import { CommunityForum } from "./pages/CommunityForum/CommuntiyForum";
import Network from "./pages/Network/Network";
import UserProfile from "./pages/UserProfile/UserProfile";
import Chat from "./pages/Chat/Chat";
import Challenges from "./pages/Challenges/Challenges";
import AboutUs from "./pages/AboutUs/AboutUs";
import Settings from "./pages/Settings/Settings";
import FAQ from "./pages/FAQ/FAQ";
import ContactUs from "./pages/ContactUs/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/WelcomeBack" element={<WelcomeBack />} />
      <Route path="/Questionnaire" element={<Questionnaire />} />
      <Route path="/Questionnaire/Q2" element={<Q2 />} />
      <Route path="/Questionnaire/Q2/Q3" element={<Q3 />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/WelcomeBack" element={<Membership />} />
      <Route path="/Community" element={<CommunityForum />} />
      <Route path="/Network" element={<Network />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Challenges" element={<Challenges />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Settings" element={<Settings />} />
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
