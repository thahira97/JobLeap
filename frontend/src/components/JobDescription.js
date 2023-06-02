import React from "react";

import "./JobDescription.css";
import Card from "./Card";

const JobDescription = (props) => {

const moneyIconStyle={
  color: "#5a8774",
};
const computerIconStyle={
  color: "#7ba4d1",
};
const cardStyling={
backgroundColor: "#FFDEB9",
border: "1px",
boxShadow: "none"
}

return <div className="job-description">
  <div className="description-header">
      <Card style={cardStyling}><p>{props.name}</p>
  <span>{props.title}</span></Card>
  </div>

  <aside><b>About the job</b></aside>
  <p>{props.description} </p>
  <ul className="detailed-list">
  <li>Schedule: <i class="fa-solid fa-suitcase"></i> {props.schedule}</li>  
  <li>FlexTime: <i className="fa-solid fa-computer"style={computerIconStyle}></i> {props.flextime}</li>
  <li>Salary: <i className="fa-solid fa-money-check-dollar"style={moneyIconStyle}></i> {props.salary}</li>
  </ul>
  
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
