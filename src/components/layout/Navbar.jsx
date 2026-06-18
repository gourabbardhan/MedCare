import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menuToggle = document.getElementById("navbarSupportedContent");
    const toggleButton = document.querySelector(".navbar-toggler");

    if (menuToggle && menuToggle.classList.contains("show")) {
      menuToggle.classList.remove("show");
      
      if (toggleButton) {
        toggleButton.classList.add("collapsed");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    }
  }, [location.pathname]);

  return (
    <>
      <section className="main-header">
        <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "sticky" : ""}`}>
          <div className="container">
            
            <Link className="navbar-brand header-logo" to='/'>
              <img src="/MedCare/images/Minds-dark.png" alt="mental-logo" />
            </Link>

            <button
              className="navbar-toggler collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <div className="togg-1"></div>
              <div className="togg-2"></div>
              <div className="togg-3"></div>
            </button>

            <div className="collapse navbar-collapse nav-col" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home +</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About +</NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services +
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/ourservices" className="dropdown-item">Our Services</NavLink></li>
                    <li><NavLink to="/ourpricing" className="dropdown-item">Our Pricing</NavLink></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cases +
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/ourcases" className="dropdown-item">Our Cases</NavLink></li>
                    <li><NavLink to="/casedetails" className="dropdown-item">Case Detail</NavLink></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages +
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/contactus" className="dropdown-item">Contact Us</NavLink></li>
                    <li><NavLink to="/faqs" className="dropdown-item">faqs</NavLink></li>
                    <li><NavLink to="/ourblog" className="dropdown-item">Our Blog</NavLink></li>
                    <li><NavLink to="/singleblog" className="dropdown-item">Single Blog</NavLink></li>
                  </ul>
                </li>
              </ul>
              <div className="head-anch">
                <Link to='/contactus' className="quote">get a quote</Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
