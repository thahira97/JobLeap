import React from "react";
import { useState } from "react";

import "./Button.css";
import JobDescription from "./JobDescription";
import Backdrop from "./Backdrop";
const Button = (props) => {

  const [description, setDescription] = useState(false)

  const clickHandler=(event)=> {
    setDescription(true)
  }

  return (
  <React.Fragment>
    <div className="button-comp">
    <button type="button" class="btn btn-outline-primary" onClick={clickHandler}>Read more</button>
    {description && <Backdrop />}
    {description && <JobDescription 
         title={props.title}
         name={props.name}
         description={props.description}
         salary={props.salary}
         location={props.location}
         schedule={props.schedule}
         flextime={props.flextime}
          />}
  </div>
  </React.Fragment>
  )
};
export default Button;
