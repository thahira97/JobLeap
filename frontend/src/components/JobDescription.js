import React from "react";
import { useState, useEffect, useContext } from "react";
import { ResumeContext } from "../context/resumeContext";
import { MessageContext } from "../context/messageContext";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./JobDescription.css";
import Card from "./Card";
import Avatar from "./Avatar"

const JobDescription = (props) => {
  const { currentUser } = useContext(AuthContext);

  const { jobDescription, setJobDescription, myExperience } =
    useContext(ResumeContext);

  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    setJobDescription(props.description);
    setMessage(null);
    window.localStorage.removeItem("message");
  }, []);

  const getMessages = async () => {
    const description = JSON.stringify(jobDescription);
    const experience = JSON.stringify(myExperience.experience);

    const options = {
      method: "POST",
      body: JSON.stringify({
        query: `Enhance only the experience in resume to match the job. Job description: ${description} and experience: ${experience}. Important: Do not include salutations and no headings. Only in points.`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8080/completions",
        options
      );
      const data = await response.json();
      console.log(data.choices[0].message.content); // Check the content property

      const receivedMessage = data.choices[0].message.content;
      setMessage(receivedMessage);
      localStorage.setItem("message", receivedMessage);
    } catch (error) {
      console.log(error);
    }
  };

  // const moneyIconStyle = {
  //   color: "#5a8774",
  // };
  // const computerIconStyle = {
  //   color: "#7ba4d1",
  // };
  // const cardStyling = {
  //   border: "1px",
  //   boxShadow: "none",
  // };

  useEffect(() => {
    console.log("fhjhfjsdh", props.description);
    console.log("+++++", jobDescription);
    console.log("----", JSON.stringify(myExperience.experience));
  }, [jobDescription]);
  // console.log("MESSAGE",message)

  return (
    <div className="job-description">
      <div className="row heading">
        <div className="col-md-1">
          <Avatar image={props.image} alt={props.title} />
        </div>
        <div className="col-md-11 my-auto">
          <h3 className="card-title">{props.name}</h3>
          <h4 className="card-subtitle mb-2 text-muted">{props.title}</h4>
        </div>
      </div>
      {/* <h3>{props.name}</h3>
      <h5>{props.title}</h5> */}
      <div className="row">
        <div className="col-md-8">
          <p><strong>Job description</strong></p>
          <p>{props.description}</p>
        </div>
        <div className="col-md-4">
          <p><strong>Job details</strong></p>
          <p><i className="fa-solid fa-location-dot"></i> Location: {props.location}</p>
          <p><i className="fa-solid fa-suitcase"></i> Schedule: {props.schedule}</p>
          <p><i className="fa-solid fa-computer"></i> FlexTime: {props.flextime}</p>
          <p><i className="fa-solid fa-money-check-dollar"></i> Salary: {props.salary}</p>          
        </div>
      </div>
     {currentUser && <div className="main-buttons">
        <div className="modify-button">
          <Link to="/modify-resume">
            <button className="btn btn-primary" type="submit" onClick={getMessages}>
              {" "}
              Apply now
            </button>
          </Link>
        </div>
      </div>} 
      {!currentUser && <div className="main-buttons">
        <div className="modify-button">
          <Link to="/login">
            <button className="btn btn-primary" type="button">
            Please log in to continue
            </button>
          </Link>
        </div>
      </div> }
    </div>
  );
};

export default JobDescription;
