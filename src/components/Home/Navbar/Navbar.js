import React from 'react';

const Navbar = () => {
    return (
        <div className="row bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light col-11 mx-auto">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="/" style={{color:"#1cc7c1"}}>Doctor Portal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/dental-services">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " href="/review">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " href="/contact">Contacts</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;