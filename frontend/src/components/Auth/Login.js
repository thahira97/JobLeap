import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import './Auth.css';

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const history = useHistory();
  axios.defaults.withCredentials = true;

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(input);
      history.push("/profile");
    } catch(err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form className="auth-form">
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
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="●●●●●●●●"
              name="password"
              onChange={handleChange}
              required
            />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Log in
          </button>
          <Link to="/" className="btn btn-outline-primary" role="button">Cancel</Link>
          {error &&
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          }
        </form>
        <div className="switch-auth-page">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;