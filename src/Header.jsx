import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            Mobile<span className="text-xl text-red-600">Zone</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/fav"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/login"
                
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-xl">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
