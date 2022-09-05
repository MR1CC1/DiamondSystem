import React, { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../AppRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (email, password) => {

        console.log('login auth', { email, password })

        if (password === "secret") {
            setUser({ id: "123", email });
            navigate("/");
        }
        setUser({ id: "123", email })

    };

    const logout = () => {
        console.log('logout');
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}