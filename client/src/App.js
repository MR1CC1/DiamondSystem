import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignInSide from "./Components/SingIn/SignInSide";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signin" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

