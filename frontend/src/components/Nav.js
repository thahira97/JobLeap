import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './Nav.css';

function Nav() {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
      <div className="container">
        <a className="navbar-brand" href="/">JobLeap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Find jobs</a>
              </li>
              {currentUser &&
              <li className="nav-item">
               <Link to="/jobs" className="nav-link">My applications</Link> 
              </li>
              }
              {currentUser &&
              <li className="nav-item">
               <Link to="/profile" className="nav-link">My profile</Link> 
              </li>
              }
            </ul>
        </div>

        <div className="d-flex">
            {
              currentUser ?
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="nav-link">Logged in as {currentUser.name}</span>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={logout}>Log out</Link>
                </li>
              </ul>
              :
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Log in</Link>
                </li>
              </ul>
            }
        </div>
      </div>
    </nav>
  );
}

export default Nav;