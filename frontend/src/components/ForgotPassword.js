import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import Nav from './Nav';
import Footer from './Footer';

const Password = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset later
  };

  return (
    <div>
        <Nav />
    <div className="password-container">
      <form className="password-form" onSubmit={handleSubmit}>
        <h3>Reset Password</h3>
        <p>Please enter your email address to reset your password.</p>
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
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      <div className="login-link">
        Remember your password? <Link to="/login">Log In</Link>
      </div>
    </div>
        <Footer />
    </div>
  );
};

export default Password;
