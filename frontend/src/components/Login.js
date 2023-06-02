import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Login.css';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic later
  };

  return (
    <div>
      <Nav />

    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
      <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Login;
