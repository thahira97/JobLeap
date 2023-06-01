import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "./Search";
import "./JobSearch.css";
import FilterSearch from "./FilterSearch";

const JobSearch = (props) => {
  return (
    <div>
      <Nav />
      <div className="job-search">
        <div className="top-container">
          <div className="main-image">
            <img src="jobsearch3.jpg" alt="..." />
            
          </div>
        </div>
        <div className="middle-container">
          <FilterSearch />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;
