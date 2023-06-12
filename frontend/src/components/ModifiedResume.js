import React from "react";

import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { MessageContext } from "../context/messageContext";
import Typewriter from "./Typrewriter";

import Nav from './Nav'
import Footer from "./Footer"
import "./ModifiedResume.css";

const ModifiedResume = (props) => {
  const { message, setMessage } = useContext(MessageContext);
  const { myExperience } = useContext(ResumeContext);

  return <>
  <Nav/>
  <div className="resumes-container">
      <div className="left-original">
   <p>Original-resume</p>
   <h4>About Me</h4> {myExperience.aboutMe}
   <h4>Experience</h4> {myExperience.experience}
  </div>
  <div className="right-gpt">
    <div className="typewriter-box">
           <Typewriter text={message} speed={100} />
       
        </div>
        
  </div>

  </div>

      
  </>;
};

export default ModifiedResume;
