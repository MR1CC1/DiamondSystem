// import logo from './logo.svg';
// import './App.css';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from 'react-router-dom';

// function App() {
//   return (
//     <SignInSide />
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignInSide from "./Components/SingIn/SignInSide";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/signin" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <Link to="/about">About</Link>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//       <Link to="/dashboard">dashboard</Link>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Link to="/">home</Link>
//     </div>
//   );
// }
