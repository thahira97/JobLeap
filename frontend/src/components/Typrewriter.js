import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../context/resumeContext";

import "./Typewriter.css"

const Typewriter = ({ text, speed }) => {
  const { myExperience } = useContext(ResumeContext);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speed);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text, speed]);

  return<div className="chat-box">
    <p>Modified-Resume</p>
     <span >  <h4 >About Me</h4><p className="typo-ani" >{myExperience.aboutMe}</p></span>
     <span >  <h4>Experience</h4> <ul>
          {displayText.split("\n").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul></span>;
  </div> 
 
    
};

export default Typewriter;
