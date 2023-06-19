import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../context/resumeContext";
import "./Typewriter.css";

const Typewriter = ({ text, speed, toggle }) => {
  const { myExperience } = useContext(ResumeContext);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsLoading(false);
      }
    }, speed);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text, speed]);

  return (
    <div>
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
      <ul>
        {displayText.split("\n").map((point, index) => (
          <li key={index}>{point.replace(/^(-|\s+)+/g, '')}</li>
        ))}
      </ul>
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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply with modified resume</button>
      </div>
    </div>
  );
};

export default Typewriter;