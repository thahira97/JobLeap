import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import JobSearch from "./components/JobSearch";
import Profile from "./components/Profile";
import CreateProfile from "./components/CreateProfile";
import Resumes from "./components/Resumes";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ModifiedResume from "./components/ModifiedResume";
import "./App.css";
import React from "react";

function App() {
  const [inputVal, setInputVal] = useState({
    title: "",
    location: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputVal((prev) => {
      window.localStorage.removeItem("INPUT_VAL")
      const inputVal = { ...prev, [name]: value };
      window.localStorage.setItem("INPUT_VAL", JSON.stringify(inputVal));
      return inputVal;
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            onChange={changeHandler}
            onSubmit={submitHandler}
            data={inputVal}
          />
        </Route>
        <Route path="/jobs" exact>
          <JobSearch data={inputVal} />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/modify-resume" exact>
          <ModifiedResume />
        </Route>
        <Route path="/profile/new" exact>
          <CreateProfile />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="/resumes" exact>
          <Resumes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
