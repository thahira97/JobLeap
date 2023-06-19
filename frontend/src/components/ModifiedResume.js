import React from "react";

import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { MessageContext } from "../context/messageContext";
import Typewriter from "./Typewriter";

import Popup from "./Popup";
import Nav from "./Nav";
import Footer from "./Footer";
import "./ModifiedResume.css";

const ModifiedResume = (props) => {
  const { message, setMessage } = useContext(MessageContext);
  const { myExperience } = useContext(ResumeContext);

  const [popup, setPopup] = useState(false);
  
  const togglePopup = () =>{
    setPopup((prev) =>!prev);
    console.log(popup); 
  };

  useEffect(() => {}, [message]);
  const messageBox = (
    <div className="typewriter-box">
      <Typewriter text={message} speed={30} toggle={togglePopup} />
    </div>
  );

  return (
    <div className="modified-resume">
      <Nav />
      <div className="modified-container">
        <div className="container">
            
          <div className="heading">
            <h3>Review Your Resume</h3>
            <p>Choose which resume you would like to apply with.</p>
          </div>

          <div className="row before-after">
            <div className="col-md-6">
              <div className="resume-panel">
                <p className="text-center"><strong>ORIGINAL RESUME</strong></p>
                <hr></hr>
                <div className="row">
                  <div className="col-md-4">
                    <img src={myExperience.image} className="mod-user-img"/>
                  </div>
                  <div className="col-md-8 my-auto">
                    <h4>{myExperience.name}</h4>
                    <p>{myExperience.job}</p>
                    <p><small><i className="fa-sharp fa-solid fa-envelope"></i> {myExperience.email}<br/><i className="fa-solid fa-phone"></i> {myExperience.phone}<br/><i className="fa-sharp fa-solid fa-location-dot"></i> {myExperience.location}</small></p>
                  </div>
                </div>
                <hr></hr>
                <h5>About me</h5>
                <p>{myExperience.aboutMe}</p>
                <hr></hr>
                <h5>Experience</h5>
                <br></br>
                <h6>{myExperience.positionCompany} ({myExperience.years})</h6>
                <p>{myExperience.experience}</p>
                <hr></hr>
                <h5>Projects</h5>
                <br></br>
                <div className="row">
                  <div className="col-md-4">
                    <img src={myExperience.project_img} className="mod-project-img img-fluid"/>
                  </div>
                  <div className="col-md-8 my-auto">
                    <h6>{myExperience.project_name}</h6>
                    <p>{myExperience.project_description}</p>
                  </div>
                </div>
                <hr></hr>
                <h5>Education</h5>
                <p>{myExperience.education}</p>
                <hr></hr>
                <h5>Skills</h5>
                <p>{myExperience.skills}</p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply with original resume</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="resume-panel">
                <p className="text-center"><strong>MODIFIED RESUME</strong></p>
                <hr></hr>
                {message && messageBox}
                {!message && (
                  <div className="typewriter-box">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="row">
                        <div className="spinner-border" style={{width: 48, height: 48}} role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                      <div className="row loading">
                        <small>Please wait while we tailor your resume to the job description</small>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h1><i class="fa-regular fa-circle-check"></i></h1>
              <h3>Thank You</h3>
              <p>Your submission has been received.<br/>We will be in touch shortly.</p>
            </div>
            <div className="modal-footer">
              <a class="btn btn-outline-primary" href="/" role="button">Back to homepage</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModifiedResume;
