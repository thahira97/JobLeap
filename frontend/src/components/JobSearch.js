import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Search from "./Search";
import "./JobSearch.css";
import FilterSearch from "./FilterSearch";
import JobLists from "./JobLists";

const dummyData = {
  id: 1,
  companyName : 'Cognizant',
  compImg: 'https://media.licdn.com/dms/image/C560BAQF57ipqWkZvpQ/company-logo_100_100/0/1656617304605?e=1693440000&v=beta&t=ejKr_lBSJiX3mOSwtM1UnXGUmNXkxMuFtu7snOfar1E',
  jobTitle: "Full-Stack Developer",
  location: "Calgary",
  jobDescription: "Full stack-developers have a range of responsibilities from shaping and implementing digital products to ensuring that we stay on the leading edge of technology.Our developers take an important role in developing the solution's complete architecture and delivery, and are responsible for creating and maintaining the integration and deployment pipeline (DevOps)",
  salary: "$80,000",
  datePosted: "19/3/2023"

}
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
          <JobLists jobs={dummyData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;
