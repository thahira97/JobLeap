import React from "react";

import "./JobItem.css";
import Card from "./Card";
import Avatar from "./Avatar"

const JobItem = (props) => {
  return <li className="job-items">
   <Card className="job-item__content">
    <div className="job-item__image">
     <Avatar image={props.image} alt={props.title} />
    </div>
    <div className="job-item__info">
      <p>{props.title}</p>
      <p>{props.location}</p>
      <p>{props.salary}</p>
      <p>{props.posteddate}</p>
    </div>
   </Card>
  </li>;
};

export default JobItem;
