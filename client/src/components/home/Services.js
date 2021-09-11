import React from 'react'
import electricalIcon from '../../images/electricalIcon.png'
import sweepIcon from '../../images/sweepIcon.png'
import tapIcon from '../../images/tapIcon.png'
import strollerIcon from '../../images/strollerIcon.png'
import './Home.css'
// eslint-disable-next-line

export default function Services() {
  return (
    <div className="container marketing">
      <div className="py-5">
        <h2 className="fs-1 fw-bold text-center text-lg-start" style={{marginBottom: "2rem"}}>Our Sercices</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 pt-3">
            <div className="mb-3">
              <img src={electricalIcon} className="position-absolute service" width="70" />
              <svg className="rounded-circle" width="140" height="140">
                <rect width="100%" height="100%" fill="#2F5061" />
              </svg>
            </div>
            <h2 className="fw-bold">Electrical</h2>
            <p>Installs and repairs electrical wiring, systems, and fixtures in buildings. Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes. Installs circuit breakers and other electrical hardware and connects wiring to them.</p>
            <p><a className="btn text-white" style={{backgroundColor: "#2F5061"}} href="#">See electricians »</a></p>
          </div>

          <div className="col-lg-3 col-md-6 pt-3">
            <div className="mb-3">
              <img src={sweepIcon} className="position-absolute service" width="80" />
              <svg className="rounded-circle" width="140" height="140">
                <rect width="100%" height="100%" fill="#E57F84" />
              </svg>
            </div>
            <h2 className="fw-bold">Cleaning</h2>
            <p>Installs and repairs electrical wiring, systems, and fixtures in buildings. Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes. Installs circuit breakers and other electrical hardware and connects wiring to them.</p>
            <p><a className="btn text-white" style={{backgroundColor: "#E57F84"}} href="#">See cleaners »</a></p>
          </div>

          <div className="col-lg-3 col-md-6 pt-3">
            <div className="mb-3">
              <img src={tapIcon} className="position-absolute service" width="80" />
              <svg className="rounded-circle" width="140" height="140">
                <rect width="100%" height="100%" fill="#F4EAE6" />
              </svg>
            </div>
            <h2 className="fw-bold">Plumbing</h2>
            <p>Installs and repairs electrical wiring, systems, and fixtures in buildings. Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes. Installs circuit breakers and other electrical hardware and connects wiring to them.</p>
            <p><a className="btn" style={{backgroundColor: "#F4EAE6"}} href="#">See plumbers »</a></p>
          </div>

          <div className="col-lg-3 col-md-6 pt-3">
            <div className="mb-3">
              <img src={strollerIcon} className="position-absolute service" width="80" />
              <svg className="rounded-circle" width="140" height="140">
                <rect width="100%" height="100%" fill="#4297A0" />
              </svg>
            </div>
            <h2 className="fw-bold">Babysitting </h2>
            <p>Installs and repairs electrical wiring, systems, and fixtures in buildings. Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes. Installs circuit breakers and other electrical hardware and connects wiring to them.</p>
            <p><a className="btn text-white" style={{backgroundColor: "#4297A0"}} href="#">See babysitters »</a></p>
          </div>
        </div>
      </div>

      {/* <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

        </div>
      </div>

      <hr className="featurette-divider" /> */}
    </div>
  )
}
