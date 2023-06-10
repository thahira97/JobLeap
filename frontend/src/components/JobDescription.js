import React from "react";
import { useState, useEffect,useContext } from "react";
import { ResumeContext } from '../context/resumeContext';
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./JobDescription.css";
import Card from "./Card";

const JobDescription = (props) => {

  const { jobDescription ,setJobDescription, myExperience } = useContext(ResumeContext);
 
  // const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  // const [previousChats, setPreviousChats ] = useState([ ])

  const getMessages = async() => {
    setJobDescription(props.description)
    const description = JSON.stringify(jobDescription)
    const resume = JSON.stringify(myExperience)
    const options = {
      method: "POST",
      body: JSON.stringify({
        message:
       `Important Only Enhance experience part in resume to match the job description:
       Job description : ${description}
       Resume: ${resume}.` 
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8080/completions', options)
      const data = await response.json()
      console.log(data.choices[0].message.content)
      setMessage(data.choices[0].message.content)
    }
    catch(error) {
      console.log(error)
    }
  }
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

useEffect(() => {
console.log("+++++",jobDescription)
console.log("----", JSON.stringify(myExperience))
}, [jobDescription])
console.log("MESSAGE",message)

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
   <Link to="/"><button class="btn btn-primary" type="submit" onClick={getMessages}> Modify resume</button></Link>
    {/* <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
    </div> */}
    </div>
  </div>
</div>

};

export default JobDescription;
