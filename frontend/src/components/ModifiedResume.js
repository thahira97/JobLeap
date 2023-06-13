import React from "react";

import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import { MessageContext } from "../context/messageContext";
import Typewriter from "./Typewriter";

import Nav from "./Nav";
import Footer from "./Footer";
import "./ModifiedResume.css";

const ModifiedResume = (props) => {
  const { message, setMessage } = useContext(MessageContext);
  const { myExperience } = useContext(ResumeContext);

  useEffect(() => {}, [message]);
  const messageBox = (
    <div className="typewriter-box">
      <Typewriter text={message} speed={100} />
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
        </div>
        <div className="right-gpt">
          {message && messageBox}
          {!message && (
            <div className="typewriter-box">
              <h1 className="loading-animation">Loading...</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifiedResume;
