import React, { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../AppRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert } from '@mui/material';
import { api, createSession } from "../services/api.js"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);



    const login = async (email, password) => {

        const response = await createSession(email, password);
        console.log('login auth', { email, password });

        const loggedUser = response.data.user;
        const token = response.data.token;

        // Api criar uma session


        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/");

    };

    const logout = () => {
        console.log('logout');
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/singin");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}