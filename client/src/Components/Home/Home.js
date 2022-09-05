import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/auth";
import "./Home.css";
import { getUsers } from "../services/api";
import { useState } from "react";

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
    <>
      <div>Home Page</div>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
