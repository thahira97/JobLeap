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
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
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
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(inputVal)
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home  
            onChange={changeHandler} 
            onSubmit={submitHandler} 
            data={inputVal}/>
        </Route>
        <Route path="/jobs" exact>
          <JobSearch data={inputVal} />
        </Route>
        <Route path="/user" exact>
          <Profile />
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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
