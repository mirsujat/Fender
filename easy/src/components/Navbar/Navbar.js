import React, { useState } from "react";
import { Link } from "react-router-dom";

import Bar from "../Bar/Bar";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-right">
        <Bar></Bar>
      </div>
      <ul className="nav nav-left">
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
};

export default Navbar;
