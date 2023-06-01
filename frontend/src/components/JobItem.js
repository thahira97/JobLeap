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
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <h2>{props.description}</h2>
      <h2>{props.salary}</h2>
      <h2>{props.posteddate}</h2>
    </div>
   </Card>
  </li>;
};

export default JobItem;
