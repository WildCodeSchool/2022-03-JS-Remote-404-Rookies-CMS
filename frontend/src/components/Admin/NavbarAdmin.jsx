import React from "react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <div className="navbar-layout h-screen">
      <div className="menu-items">
        <ul>
          Page1
          <li>
            <Link to="/dashboard/carroussel">Carroussel</Link>
          </li>
          <li />
          <Link to="/dashboard/comp2">Compoent 2</Link>
          <li>
            <Link to="/dashboard/comp3">Compoent 3</Link>
          </li>
        </ul>
        <ul>
          Page2
          <li>
            <Link to="/dashboard/caroussel">Carroussel</Link>
          </li>
          <li>
            <Link to="/dashboard/comp2">Compoent 2</Link>
          </li>
          <li>
            <Link to="/dashboard/comp3">Compoent 3</Link>
          </li>
        </ul>
        <ul>
          Page3
          <li>
            <Link to="/dashboard/caroussel">Carroussel</Link>
          </li>
          <li>
            <Link to="/dashboard/comp2">Compoent 2</Link>
          </li>
          <li>
            <Link to="/dashboard/comp3">Compoent 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarAdmin;
