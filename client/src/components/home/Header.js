import React, { useState } from "react";
import homeIcon from "../../images/homeIcon.png";
import loginIcon from "../../images/loginIcon.png";
import signupIcon from "../../images/signupIcon.png";
import postsIcon from "../../images/postsIcon.png";
import { Link } from "react-router-dom";
import './Header.css'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import MarkunreadMailboxRoundedIcon from '@material-ui/icons/MarkunreadMailboxRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

function Header() {
  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

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
                    <HomeRoundedIcon className="me-2 mb-1" />

                    Home
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/posts" className="nav-link link-dark">
                    <MarkunreadMailboxRoundedIcon className="me-2 mb-1" />
                    Posts
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/" className="nav-link link-dark">
                    <AppsRoundedIcon className="me-2 mb-1" />
                    Services
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/" className="nav-link link-dark">
                    <PeopleAltRoundedIcon className="me-2 mb-1" />
                    About us
                  </Link>
                </li>
                <li class="dropdown nav-item px-1 userPic">
                  <a class="btn dropdown-toggle position-absolute" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                      src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      className="me-2 rounded-circle"
                      width="43"
                      height="43"
                    />
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link to="/profile" class="dropdown-item">Profile</Link></li>
                    <li><a class="dropdown-item" href="#" onClick={logout}>Log out</a></li>
                  </ul>
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
