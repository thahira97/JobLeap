import React from "react";
import { useState } from "react";

import "./Button.css";
import JobDescription from "./JobDescription";
const Button = (props) => {

  const [description, setDescription] = useState(false)

  const clickHandler=(event)=> {
    setDescription(true)
  }

  return <div className="button-comp">
    <button type="button" class="btn btn-outline-primary" onClick={clickHandler}>Read more</button>
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
};
export default Button;
