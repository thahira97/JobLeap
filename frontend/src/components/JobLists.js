import React, { useEffect, useState } from "react";

import "./JobLists.css";
import JobItem from "./JobItem";
import Card from "./Card";

const JobLists = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return (
      <div className="typewriter-box">
       <div className="ring"></div>
          <h1 className="loading-animation">Loading</h1>
      </div>
    );
  }

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
              name={job.company_name}
              image={job.company_image}
              title={job.job_title}
              location={job.location}
              summary={job.job_summary}
              description={job.job_description}
              salary={job.salary}
              schedule={job.schedule}
              flextime={job.flex_time}
              posteddate={job.date_posted}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default JobLists;
