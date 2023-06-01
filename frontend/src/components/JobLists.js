import React from "react";

import "./JobLists.css";
import JobItem from "./JobItem";

const JobLists = (props) => {
  return <div className="job-lists">
    <p className="job-header">Recommended jobs</p>
    <JobItem />
  </div>;
};

export default JobLists;
