import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGoogle,
  faGithub,
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const LandingPage: React.FC<{}> = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <h5 className="pt-1">Products Gallery</h5>
          </a>
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                  Dashboard
                </a> */}

                <Link to="/product-gallery" className="btn btn-success">
                  View Gallery Online
                </Link>
              </li>
              &nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link to="/map" className="btn btn-success">
                  View Map
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center justify-content-start">
              {/* <!-- Icon --> */}
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart text-white"></i>
              </a>

              {/* <!-- Notifications --> */}
              <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell text-white"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Avatar --> */}
              <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}

      <div style={{ height: "300px" }}>
        <h2>Welcome to Products Gallery</h2>
      </div>

      {/* <!-- Footer --> */}
      <footer className="bg-primary text-center text-white fixed-bottom">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>

            {/* <!-- Youtube --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-twitter"></i> */}
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>

            {/* <!-- Google --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-google"></i> */}
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </a>

            {/* <!-- Instagram --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-linkedin-in"></i> */}
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>

            {/* <!-- Github --> */}
            <a
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              {/* <i className="fab fa-github"></i> */}
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="#" style={{ marginLeft: "0.5%" }}>
            products-gallery.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default LandingPage;
