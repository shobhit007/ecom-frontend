import "./navbar.css";
import { SearchOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Context } from "../../context/AuthContext";

function Navbar() {
  const { cart, user, logout } = Context();
  const firstLetter = user && user.name.slice(0, 1).toUpperCase();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="left">
        <span className="language">EN</span>
        <div className="input-container">
          <input type="text" className="search-bar" placeholder="Search" />
          <SearchOutlined className="search-icon" />
        </div>
      </div>
      <div className="center">
        <h1 className="logo">E-com shop</h1>
      </div>
      <div className="right">
        <Badge
          badgeContent={cart && cart.length}
          color="primary"
          className="navbar-right_icon"
        >
          <Link to={user ? `/${user._id}/cart` : "/cart"}>
            <ShoppingBagOutlined />
          </Link>
        </Badge>
        {!user && (
          <Link to={"/user/login"} className="btn_login button">
            Log in
          </Link>
        )}
        {!user && (
          <Link to="/user/register" className="btn_signup button">
            Sign up
          </Link>
        )}
        {user && (
          <div className="account" onClick={() => setShowMenu((p) => !p)}>
            <span className="display-name">{user && firstLetter}</span>
          </div>
        )}
      </div>

      {showMenu && (
        <div className="drop-down-menu">
          <span
            className="btn_logout menu_button"
            onClick={() => {
              logout();
              setShowMenu(false);
            }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar;
