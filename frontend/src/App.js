import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import JobSearch from "./components/JobSearch";
import "./App.css";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/jobs" exact>
          <JobSearch />
        </Route>
        <Route path = "/user" exact>
          <Profile/>
        </Route>
        <Route path = "/signup" exact>
          <Signup/>
        </Route>
        <Route path = "/login" exact>
          <Login/>
        </Route>
        <Route path = "/forgot-password" exact>
          <ForgotPassword/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
