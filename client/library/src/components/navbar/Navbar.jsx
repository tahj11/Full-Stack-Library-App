import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://i.pinimg.com/236x/44/a3/fd/44a3fd7c72db93b9e50d95f67c35792a--library-logo-school-logo.jpg"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <div>
          <button className="donate-btn">Donate</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
