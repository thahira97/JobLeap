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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
