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
      <Typewriter text={message} speed={100} toggle={togglePopup} />
    </div>
  );

  return (
    <>
      <Nav />
      <div className="resumes-container">
        <div className="left-original">
          <p>Original-resume</p>
          <h4>About Me</h4> {myExperience.aboutMe}
          <h4>Experience</h4> {myExperience.experience}
          <br></br>
          <br></br>
            <button onClick={togglePopup}>
              Apply with this cv
            </button>
        </div>
        
        {popup && <Popup toggle={togglePopup} />}
        
        <div className="right-gpt">

          {message && messageBox}
          {!message && (
            <div className="typewriter-box">
              <div className="ring"></div>
              <h1 className="loading-animation">Loading</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifiedResume;
