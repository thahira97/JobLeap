import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import './Auth.css';

const Signup = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const { signup } = useContext(AuthContext);
  const history = useHistory();
  axios.defaults.withCredentials = true;

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signup(input);
      history.push("/profile/new");
    } catch(err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form className="auth-form">
          <div className="form-header">
            <h3>Sign Up</h3>
            <p>Create an account and build your impressive resume today!</p>
          </div>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              required
            />
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
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign up
          </button>
          <Link to="/" className="btn btn-outline-primary" role="button">Cancel</Link>
          {error &&
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          }
        </form>
        <div className="switch-auth-page">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;