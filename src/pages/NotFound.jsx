import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>

    <div className="error-page-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            <div className="error-code-container position-relative mb-4" data-aos="zoom-in">
              <h1 className="error-code display-1 fw-black text-transparent bg-clip-text bg-gradient">
                404
              </h1>
              <div className="error-shadow"></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="error-title fw-bold text-dark mb-3">
                Oops! Page Not Found
              </h2>
              <p className="error-text text-muted mx-auto mb-5" style={{ maxWidth: '450px', fontSize: '1.1rem' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>

            <div className="error-actions d-flex flex-sm-row flex-column gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="400">
              <NavLink to="/" className="btn btn-primary px-4 py-2.5 rounded-pill shadow-sm hover-up">
                <i className="fa-solid fa-house me-2"></i> Go Back Home
              </NavLink>
              <NavLink to="/contactus" className="btn btn-outline-secondary px-4 py-2.5 rounded-pill">
                <i className="fa-solid fa-envelope me-2"></i> Contact Support
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default NotFound;
