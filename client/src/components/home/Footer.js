import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import logo from "../../images/mayday1.png"


export default function Footer() {
  const scrollToService = () => {
    window.scrollTo(0, 610);
  };
  const scrollToAbout = () => {
    window.scrollTo(0, 1370);
  };

  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row mx-auto">

            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>
                <img src={logo} width="120" />
              </h3>
              <p>
                Hammam-lif <br/>
                Ben Arous <br/>
                Tunisia <br/>
                <strong>Phone:</strong> +216 71123321 <br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="" onClick={scrollToService}>Services</Link></li>
                <li><Link to="" onClick={scrollToAbout}>About us</Link></li>
                <li><Link to="/posts">Posts</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/posts">Electrical</Link></li>
                <li><Link to="/posts">Cleaning</Link></li>
                <li><Link to="/posts">Plumbing</Link></li>
                <li><Link to="/posts">Babysitter</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex justify-content-center align-items-center py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; 2021 <strong><span>MAYDAY</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-md-6">
            <a href="#"><img src={facebook} width="28px" /></a>
            <a href="#" className="mx-4"><img src={instagram} width="28px" /></a>
            <a href="#"><img src={twitter} width="28px" /></a>
          </div>
      </div>

    </footer>
  );
}
