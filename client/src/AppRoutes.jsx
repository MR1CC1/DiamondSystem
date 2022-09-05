import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignInSide from "./Components/SingIn/SignInSide";
import SignUp from "./Components/SignUp/SignUp";
import PageTest from "./Components/PageTestRicci/PageTest";
import { AuthContext } from "./Components/Contexts/auth";
import React, { useState, useContext, Children } from 'react'
import { AuthProvider } from "./Components/Contexts/auth";




const AppRoutes = () => {

  // const [user, setUser] = useState(null);

  // const login = (email,password) => {
  // console.log('login auth', {email, password})
  // setUser({id: "123", email })
  // };

  // const logout = () => {
  // console.log('logout');
  // };

  // user === null
  // authenticated = false

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);


    if (loading) {
      return <div className="loading">Carregando...</div>
    }


    if (!authenticated) {
      return <Navigate to="/singin" />
    }

    return children
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/singin" element={<SignInSide />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/test" element={<PageTest />} />
          <Route exact path="/" element={<Private><Home /> </Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes