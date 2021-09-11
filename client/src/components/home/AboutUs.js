import React from 'react'
import aboutusIcon from '../../images/aboutusIcon.jpg'
import './Home.css'

export default function AboutUs() {
  return (
    <div className="text-white py-5" style={{backgroundColor: "#2F5061"}}>
      <div className="container marketing">
        <div className="row featurette d-flex justify-content-center align-items-center pb-2">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fs-1 fw-bold">About Us</h2>
            <p className="lead py-5">On-demand services web applications act as a mediator between customers and services providers for different services. Users prefer to pay small fees for faster and convenient services offered by web applications.
            This type of web app project ideas includes household cleaning services, repair services, and other such services.</p>
          </div>
          <div className="col-md-5">
            <img src={aboutusIcon} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt=""></img>

          </div>
        </div>
      </div>
    </div>
  )
}
