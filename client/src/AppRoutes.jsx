import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignInSide from "./Components/SingIn/SignInSide";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Funcionario from "./Components/Funcionario/Funcionario.js";
import { AuthContext } from "./Components/Contexts/auth";
import React, { useContext } from "react";
import { AuthProvider } from "./Components/Contexts/auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/singin" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/singin" element={<SignInSide />} />
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route
            exact
            path="/"
            element={
              <Private>
                <Home />{" "}
              </Private>
            }
          /> */}
          <Route
            exact
            path="/"
            element={
              <Private>
                <Dashboard />{" "}
              </Private>
            }
          />
          <Route
            exact
            path="/funcionario"
            element={
              <Private>
                <Funcionario />{" "}
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
