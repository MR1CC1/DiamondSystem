import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/auth";
import "./Home.css";
import { getUsers } from "../services/api";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import TableUser from "../Home/TableUser.js"
import { DataGrid } from '@mui/x-data-grid';

const Home = () => {
    const { authenticated, logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })();
    }, []);

    const handleLogout = () => {
        logout();
    };

    if (loading) {
        <div className="loading">Carregando Dados...</div>;
    }

    return (
        <Dashboard>
            <TableUser />
        </Dashboard>
    );
};

export default Home;
