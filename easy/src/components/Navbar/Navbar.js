import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="nav-bar">
    <ul className="nav">
      <li className="nav-list">
        <Link to="/">Simple</Link>
      </li>
      <li className="nav-list">
        <Link to="/basic">Basic</Link>
      </li>
      <li className="nav-list">
        <Link to="/custom">Custom</Link>
      </li>
      <li className="nav-list">
        <Link to="/advance">Advance</Link>
      </li>
      <li className="nav-list">
        <Link to="/spring">Spring Animation</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
