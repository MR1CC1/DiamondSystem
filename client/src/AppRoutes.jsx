import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import SignInSide from "./Components/SingIn/SignInSide";
import SignUp from "./Components/SignUp/SignUp";
import PageTest from "./Components/PageTestRicci/PageTest";

import React from 'react'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/test" element={<PageTest />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes