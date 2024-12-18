import React from 'react';
import '../Css/NavBar.css'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-darks" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            MONSTER<span style={{color:"#57000e"}}>FIT</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className='nav-link' to={"/archivements"}>Achievements</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
