import React from "react";

import "./JobItem.css";
import Card from "./Card";
import Avatar from "./Avatar"
import Button from "./Button";


const JobItem = (props) => {


  const iconStyles = {
   color: '#bfc8d9'
  };


  return <li className="job-items">
   <Card className="job-item__content">
    <div className="job-item__image">
     <Avatar image={props.image} alt={props.title} />
    </div>
    <div className="job-item__info">
      <p className="company-name">{props.name}</p>
      <p>{props.title}</p>
      <p><i className="fa-solid fa-location-dot"></i> {props.location}</p>
      <p>{props.salary}</p>
      <p><i className="fa-solid fa-calendar-days"style={iconStyles}></i> {props.posteddate}</p>
      <p className="company-summary">{props.summary}</p>
      <Button 
          key={props.id}
          title={props.title}
          name={props.name}
          salary={props.salary}
          description={props.description}
          location={props.location}
          schedule={props.schedule}
          flextime={props.flextime}
          />
    </div>
   </Card>
  </li>;
};

export default JobItem;
