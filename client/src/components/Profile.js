import React from "react";
import Header from "./home/Header";
import "./Profile.css";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Header />
      <div id="profile">

        <div id="profileCover"></div>
        <div className="position-absolute top-0 start-50 translate-middle profilePic">
          <img
            src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            className="position-absolute rounded-circle"
            width="200"
            height="200"
          />
          <svg className="rounded-circle" width="220" height="220">
            <rect width="100%" height="100%" fill="#FFF" />
          </svg>
          <div id="profileRate" className="text-center">
            <StarRoundedIcon id="rate" />
            <h5>4.5</h5>
          </div>
        </div>
        <div className="row">
          <div id="emptySpace" className="col-lg-4 col-md-4"></div>
          <div className="pt-5 text-center col-lg-4 col-md-4 ">
            <h2 id="profileName" className="fw-bold pb-2">John Tribiony</h2>
            <h5 id="bioColor"><WorkOutlineRoundedIcon /> Electrician</h5>
            <h5 id="bioColor"><LocationOnRoundedIcon />Bay Area, San Francisco, CA</h5>
            <h5 id="bioColor"><PhoneAndroidRoundedIcon />92564871</h5>
          </div>
          <div className="float-end col-lg-4 col-md-4 profileLinks">
            <a href="#" className="d-flex justify-content-center text-decoration-none text-dark">
              <img src={facebook} className="me-2" width="20px" height="20px" /
              ><p>Johntribiony</p>
            </a>
            <a href="#" className="d-flex justify-content-center text-decoration-none text-dark">
              <img src={instagram} className="me-2" width="20px" height="20px" /><p>Johntribiony59</p>
            </a>
            <a href="#" className="d-flex justify-content-center text-decoration-none text-dark">
              <img src={twitter} className="me-2" width="20px" height="20px" /
              ><p>@Johntribiony</p>
            </a>
          </div>
          <div className="links text-center pt-3">
            <Link to="/messenger">
              <button className="view">Messenger</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
