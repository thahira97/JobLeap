import React, { createContext, useEffect, useState } from "react";
import JobDescription from "../components/JobDescription";

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  const [myExperience, setMyExperience] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const contextValue = {
    myExperience,
    setMyExperience,
    jobDescription,
    setJobDescription
  };

  useEffect(() => {
    const storedExperience = localStorage.getItem('myExperience');
    if (storedExperience) {
      setMyExperience(JSON.parse(storedExperience));
    }
  }, []);

  useEffect(() => {
    if (myExperience) {
      localStorage.setItem('myExperience', JSON.stringify(myExperience));
    }
  }, [myExperience]);
  
  useEffect(() => {
    const storedDescription = localStorage.getItem('jobDescription');
    if (storedDescription) {
      setJobDescription(JSON.parse(storedDescription));
    }
  }, []);

  useEffect(() => {
    if (jobDescription) {
      localStorage.setItem('myExperience', JSON.stringify(jobDescription));
    }
  }, [jobDescription]);
  
  // console.log(myExperience)

  // window.localStorage.setItem("RESUME", JSON.stringify(myExperience))
 
  // setMyExperience(JSON.parse(window.localStorage.getItem("RESUME")));

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
