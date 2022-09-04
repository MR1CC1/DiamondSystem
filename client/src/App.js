import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignInSide from "./Components/SingIn/SignInSide";
import PageTest from "./Components/PageTestRicci/PageTest";
import Home from "./Components/Home/Home";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <AppRoutes />
  );
}

