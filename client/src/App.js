import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignInSide from "./Components/SingIn/SignInSide";
import PageTest from "./Components/PageTestRicci/PageTest";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/test" element={<PageTest />} />
      </Routes>
    </Router>
  );
}

