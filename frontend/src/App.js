import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import JobSearch from "./components/JobSearch";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element ={<Profile/>} exact />
        <Route path="/jobs" element={<JobSearch/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
