import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../Footer';
import './Auth.css';

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const signup = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/signup', {
      name: name,
      email: email,
      password: password
    })
    .then(res => {
      if (res.data.Status === "Success") {
        history.push("/login");
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
        <form className="auth-form" onSubmit={signup}>
          <div className="form-header">
            <h3>Sign Up</h3>
            <p>Create an account and build your impressive resume today!</p>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
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
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
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