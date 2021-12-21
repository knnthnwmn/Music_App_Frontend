import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RegistrationPage from "./Components/RegistrationPage/RegistrationPage";

const App = (props) => {
  const [user, setUser] = useState(null);

  const login = async (user) => {
    await axios
      .post(`http://localhost:5000/api/users/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
        // getPosts(user);
        // if (!posts) setPosts(null);
      });
  };

  const register = async (user) => {
    await axios
      .post(`http://localhost:5000/api/users/register`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
      });
  };

  const jwt = localStorage.getItem("token");
  useEffect(() => {
    console.log("Effects is running");
    if (jwt) setUser(jwtDecode(jwt));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <Route
            path="/"
            element={
              <>
                <LoginPage login={login} user={user} setUser={setUser} />
              </>
            }
          />
        )}
        {!user && (
          <Route
            path="/register"
            element={
              <RegistrationPage
                login={register}
                user={user}
                setUser={setUser}
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
