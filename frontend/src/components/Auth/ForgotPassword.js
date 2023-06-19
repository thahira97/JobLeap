import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Password = () => {

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form className="auth-form">
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset password
          </button>
          <Link to="/" className="btn btn-outline-primary" role="button">Cancel</Link>
        </form>
        <div className="switch-auth-page">
          <p>Remember your password? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Password;
