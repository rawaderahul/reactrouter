import React from 'react';
import Search from './Search';
import {
  
  Link,
  NavLink
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      
      <Link className="navbar-brand" to="/">LOGO</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            
            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active"  to="/blog">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active"  to="/products">Products</NavLink>
          </li>
          
        </ul>
        <Search />
      </div>
    </div>
  </nav>
    );
}

export default Navbar;
