import React from "react";
import { useState, useEffect, useContext } from "react";
import { ResumeContext } from "../context/resumeContext";
import { MessageContext } from "../context/messageContext";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./JobDescription.css";
import Card from "./Card";

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

  const moneyIconStyle = {
    color: "#5a8774",
  };
  const computerIconStyle = {
    color: "#7ba4d1",
  };
  const cardStyling = {
    border: "1px",
    boxShadow: "none",
  };

  useEffect(() => {
    console.log("fhjhfjsdh", props.description);
    console.log("+++++", jobDescription);
    console.log("----", JSON.stringify(myExperience.experience));
  }, [jobDescription]);
  // console.log("MESSAGE",message)

  return (
    <div className="job-description">
      <div className="description-header">
        <Card style={cardStyling}>
          <h1>{props.name}</h1>
          <span>
            <h2>{props.title}</h2>
          </span>
        </Card>
      </div>
      <Card>
        <aside>
          <b>Job details</b>
        </aside>
        <p>{props.description} </p>
        <ul className="detailed-list">
          <li>
            Schedule: <i class="fa-solid fa-suitcase"></i> {props.schedule}
          </li>
          <li>
            FlexTime:{" "}
            <i className="fa-solid fa-computer" style={computerIconStyle}></i>{" "}
            {props.flextime}
          </li>
          <li>
            Salary:{" "}
            <i
              className="fa-solid fa-money-check-dollar"
              style={moneyIconStyle}
            ></i>{" "}
            {props.salary}
          </li>
        </ul>
      </Card>

     {currentUser && <div className="main-buttons">
        <div className="apply-button">
          <button class="btn btn-primary" type="submit">
            Apply using old resume
          </button>
        </div>
        <div className="modify-button">
          <Link to="/modify-resume">
            <button class="btn btn-primary" type="submit" onClick={getMessages}>
              {" "}
              Modify resume
            </button>
          </Link>
        </div>
      </div>} 
      {!currentUser && <div className="main-buttons">
        <div className="apply-button">
        <Link to="/signup"> <button class="btn btn-primary" type="button">
          Please Signup to continue
          </button></Link> 
        </div>
        <div className="modify-button">
          <Link to="/login">
            <button class="btn btn-primary" type="button">
            Please Login to continue
            </button>
          </Link>
        </div>
      </div> }
    </div>
  );
};

export default JobDescription;
