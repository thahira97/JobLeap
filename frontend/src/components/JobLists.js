import React from "react";

import "./JobLists.css";
import JobItem from "./JobItem";
import Card from "./Card";

const JobLists = (props) => {
  if (props.jobs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No jobs Found</h1>
        </Card>
      </div>
    );
  }
  return (
    <div className="job-lists">
      <p className="job-header">Recommended jobs</p>
      {props.jobs.map((job) => {
        return (
          <JobItem
            key={job.id}
            id={job.id}
            image={job.compImg}
            title={job.title}
            location={job.location}
            description={job.description}
            salary={job.salary}
            posteddate={job.datePosted}
          />
        );
      })}
    </div>
  );
};

export default JobLists;
