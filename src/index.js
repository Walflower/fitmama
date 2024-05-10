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
import SignUp from "./pages/Home/SignUp";
import WelcomeBack from "./pages/Home/WelcomBack";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/WelcomeBack" element={<WelcomeBack />} />
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
