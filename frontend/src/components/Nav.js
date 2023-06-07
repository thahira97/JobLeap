import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Nav.css';

function Nav() {
  
  const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:8080')
    .then(res => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        // setMessage(res.data.Error);
      }
    })
  }, [])

  const logout = () => {
    Axios.get('http://localhost:8080/logout')
    .then(res => {
      window.location.reload(true); 
    })
    .catch(err => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-lg" aria-label="Tenth navbar example">
      <div className="container">
        <a className="navbar-brand" href="/">JobLeap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbar">
          {
            auth ?
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Find jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">My applications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">My profile</a>
              </li>
            </ul>
            :
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Find jobs</a>
              </li>
            </ul>
          }
        </div>

        <div className="d-flex">
          
            {
              auth ?
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="nav-link">Logged in as {name}</span>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link" onClick={logout}>Log out</Link>
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
