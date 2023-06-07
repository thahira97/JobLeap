import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import './Auth.css';

const Password = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset later
  };

  return (
    <div className="auth-page">
      <Nav />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Reset Password</h3>
            <p>Please enter your email address to reset your password.</p>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
        <div className="switch-auth-page">
          Remember your password? <Link to="/login">Log in</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Password;
