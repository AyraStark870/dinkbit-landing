import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 mx-5">
      <div className=" container-md mx-5">
        <Link href="/">
          <a className="navbar-brand text-uppercase h1 font-weight-bold brand">
            design studio
          </a>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item   mx-5">
              <Link href="/">
                {/* <a
                  className="nav-link text-uppercase active"
                  aria-current="page"
                >
                  Home
                </a> */}
                <a className="nav-link text-uppercase">Home</a>
              </Link>
            </li>
            <li className="nav-item   mx-5">
              <Link href="/portafolio">
                <a className="nav-link text-uppercase">Portafolio</a>
              </Link>
            </li>
            <li className="nav-item   mx-5">
              <Link href="/contacts">
                <a className="nav-link text-uppercase">Contacts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
