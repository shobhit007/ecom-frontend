import React, { useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = React.createContext();

export const Context = () => useContext(AuthContext);

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    async function getUserCart() {
      try {
        if (user) {
          const { data } = await api.get(`/cart/${user._id}`);
          if (data) setCart([...data]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getUserCart();
  }, [user]);

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
  const addToCart = async ({ ...product }) => {
    try {
      if (user) {
        const { data } = await api.post(`cart/${user._id}/add`, { product });
        setCart([...data]);
      } else {
        setCart((preValue) => [...preValue, product]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //update cart quantity
  const updateCartItemQuantity = ({ type, itemIndex }) => {
    cart[itemIndex].quantity =
      type === "increment"
        ? cart[itemIndex].quantity + 1
        : cart[itemIndex].quantity - 1;

    setCart((preValues) => [...preValues]);
  };

  //remove item from user cart
  const removeItemFromCart = async (itemId) => {
    try {
      if (!user) {
        setCart((preValues) =>
          preValues.filter((item) => item.productId !== itemId)
        );
      } else {
        const { data } = await api.put(`/cart/${user._id}/update`, {
          productId: itemId,
        });
        setCart([...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add order
  const checkoutOrder = (userId, orders) => {
    return api.post(`/order/user/${userId}/add`, { orders });
  };

  const value = {
    user,
    cart,
    logout,
    login,
    register,
    addToCart,
    updateCartItemQuantity,
    removeItemFromCart,
    checkoutOrder,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
