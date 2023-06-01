import React from "react";

import "./JobItem.css";
import Card from "./Card";
import Avatar from "./Avatar"
import Button from "./Button";

const JobItem = (props) => {
  return <li className="job-items">
   <Card className="job-item__content">
    <div className="job-item__image">
     <Avatar image={props.image} alt={props.title} />
    </div>
    <div className="job-item__info">
      <p className="company-name">{props.name}</p>
      <p>{props.title}</p>
      <p>{props.location}</p>
      <p>{props.salary}</p>
      <p>Date Posted: {props.posteddate}</p>
      <p className="company-summary">{props.summary}</p>
      <Button />
    </div>
   </Card>
  </li>;
};

export default JobItem;
