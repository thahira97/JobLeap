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
    <React.Fragment>
      <ul className="job-lists">
        {props.jobs.map((job) => {
          return (
            <JobItem
              key={job.id}
              id={job.id}
              name={job.companyName}
              image={job.compImg}
              title={job.title}
              location={job.location}
              summary={job.summary}
              description={job.description}
              salary={job.salary}
              schedule={job.schedule}
              flextime={job.flexTime}
              posteddate={job.datePosted}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default JobLists;
