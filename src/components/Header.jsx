import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  let cartCount = useSelector((state) => state.product.cart.length);

  return (
    <>
      {/* Start Header/Navigation */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark "
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="index">
            Furni<span>.</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink className="nav-link" to="#">
                  <img src="images/user.svg" />
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/cart">
                  <img src="images/cart.svg" />
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
    </>
  );
}

export default Header;
