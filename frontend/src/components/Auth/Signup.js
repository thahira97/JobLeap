import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../Footer';
import './Auth.css';

const Signup = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/signup", input);
      history.push("/login");
    } catch(err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth-page">
      <Nav />
      <div className="auth-container">
        <form className="auth-form">
          <div className="form-header">
            <h3>Sign Up</h3>
            <p>Create an account and build your impressive resume today!</p>
          </div>
          <div className="form-group">
            <label>Name</label>
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
          {error &&
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          }
        </form>
        <div className="switch-auth-page">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;