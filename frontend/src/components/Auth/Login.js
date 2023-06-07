import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../Footer';
import './Auth.css';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  axios.defaults.withCredentials = true;

  const login = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/login', {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res);
      if (res.data.Status === "Success") {
        history.push("/");
      } else {
        alert(res.data.Error);
      }
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="auth-page">
      <Nav />
      <div className="auth-container">
        <form className="auth-form" onSubmit={login}>
          <div className="form-header">
            <h3>Log In</h3>
            <p>Generate optimized resumes tailored to your dream career.</p>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="●●●●●●●●"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
        <div className="switch-auth-page">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;