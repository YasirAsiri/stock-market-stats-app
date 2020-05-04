import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container">

                <a className="navbar-brand" href="#">SMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stock">Stock</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>

        </div>
            </div>
        </nav>
    );
}

export default Nav;
