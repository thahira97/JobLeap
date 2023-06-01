import React from "react";

import "./JobDescription.css";

const JobDescription = (props) => {
return <div className="job-description">
  <p>{props.name}</p>
  <p>{props.title}</p>
  <p>{props.salary}</p>
  <p>{props.description}</p>
  <p>{props.schedule}</p>
  <p>{props.flextime}</p>
  <div className="main-buttons">
    <div className="apply-button">
    <button class="btn btn-primary" type="submit">Apply using old resume</button>
    </div>
    <div className="modify-mutton">
    <button class="btn btn-primary" type="submit">Modify resume</button>
    </div>
  </div>
</div>

};

export default JobDescription;
