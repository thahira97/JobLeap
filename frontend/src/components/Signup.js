import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import Nav from './Nav';
import Footer from './Footer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic later
  };

  return (
    <div>
        <Nav />
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Create an Account</h3>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Signup;
