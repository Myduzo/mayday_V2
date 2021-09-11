import React, { useState } from "react";
import homeIcon from "../../images/homeIcon.png";
import loginIcon from "../../images/loginIcon.png";
import signupIcon from "../../images/signupIcon.png";
import postsIcon from "../../images/postsIcon.png";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top position-relative">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                LOGO
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" style={{ fontSize: "16px" }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item px-1">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <img
                      src={homeIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Home
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/posts" className="nav-link link-dark">
                    <img
                      src={postsIcon}
                      className="me-2 mb-1"
                      width="19"
                      height="19"
                    />
                    Posts
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link
                    to="/login"
                    className="nav-link link-dark"
                  >
                    <img
                      src={loginIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Log In
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link
                    to="/signup"
                    className="nav-link link-dark"
                  >
                    <img
                      src={signupIcon}
                      className="me-2 mb-1"
                      width="16"
                      height="16"
                    />
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
