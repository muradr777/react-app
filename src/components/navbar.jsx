import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <button className="btn btn-link navbar-brand">Navbar</button>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;