import React from "react";
import { useState, useContext } from "react";

import "./Button.css";
import JobDescription from "./JobDescription";

import Backdrop from "./Backdrop";
const Button = (props) => {
  
  

  const [description, setDescription] = useState(false)


  const clickHandler=(event)=> {
    setDescription(true)
  }

  const closeDescription = (event)=> {
    setDescription(false)
  }

  return (
  <React.Fragment>
    <div className="button-comp">
    <button type="button" className="btn btn-outline-primary btn-sm" onClick={clickHandler}>Learn more</button>
    {description && <Backdrop onClick={closeDescription} />}
    {description && <JobDescription 
         key={props.id}
         title={props.title}
         name={props.name}
         description={props.description}
         salary={props.salary}
         location={props.location}
         schedule={props.schedule}
         flextime={props.flextime}
         image={props.image}
          />}
  </div>
  </React.Fragment>
  )
};
export default Button;
