import React, { useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = React.createContext();

export const Context = () => useContext(AuthContext);

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      let unsubscribe = true;
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await api.get("/user");
          if (unsubscribe) {
            setUser(response.data);
          }
        }
      } catch (error) {
        console.log(error);
      }

      return () => {
        unsubscribe = false;
      };
    })();
  }, []);

  //register a new user
  const register = async (name, email, password) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        const user = await api.get("/user");
        if (user) setUser(user.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //login user
  const login = (email, password) => {
    return api.post("/auth/login", { email, password });
  };

  //logout user
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  //add to cart
  const addToCart = async (item) => {
    try {
      if (user) {
        const response = await api.post("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    user,
    logout,
    login,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
