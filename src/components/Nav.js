import React from "react";
// Navigation bar component
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container">

                <a className="navbar-brand" style={{ fontSize: 22 }} href="/">SMS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" style={{ fontSize: 14 }} href="/"><span>Home</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" style={{ fontSize: 14 }} href="/stock"><span>Stock</span></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Nav;
