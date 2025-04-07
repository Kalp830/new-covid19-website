import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center">
              <img src="./images/covidlogo.png" alt="Logo" />
            </div>
            <div className="col">
              <header className="header d-flex justify-content-end align-items-center">
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Report
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
