import React from "react";

import "./JobItem.css";
import Card from "./Card";
import Avatar from "./Avatar"
import Button from "./Button";


const JobItem = (props) => {


  const iconStyles = {
   color: '#bfc8d9'
  };


  return <li className="job-items col-md-4">
   <Card className="job-item__content">
    <div className="card-body">
      <div className="row">
        <div className="col-md-2">
          <Avatar image={props.image} alt={props.title} />
        </div>
        <div className="col-md-10">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
        </div>
      </div>
      <hr></hr>
      <p className="card-text"><small><i className="fa-solid fa-location-dot"></i> {props.location}</small></p>
      <hr></hr>
      <p className="card-text">{props.summary}</p>
      <Button 
          key={props.id}
          title={props.title}
          name={props.name}
          salary={props.salary}
          description={props.description}
          location={props.location}
          schedule={props.schedule}
          flextime={props.flextime}
          image={props.image}
          />
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted {props.posteddate}</small>
    </div>
   </Card>
  </li>;
};

export default JobItem;
