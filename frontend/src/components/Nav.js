import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './Nav.css';

function Nav() {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">JobLeap</a>

        <div className="justify-content-md-center" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works">How it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">Find jobs</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-circle-user"></i> {currentUser && currentUser.name}</a>
              {
                currentUser ?
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link to="/profile" className="dropdown-item">View profile</Link></li>
                  <li><Link to="/jobs" className="dropdown-item">My applications</Link></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><Link to="/" className="dropdown-item" onClick={logout}>Log out</Link></li>
                </ul>
                :
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link to="/login" className="dropdown-item">Log in</Link></li>
                  <li><Link to="/signup" className="dropdown-item">Sign up</Link></li>
                </ul>                
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;