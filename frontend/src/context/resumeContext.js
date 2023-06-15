import React, { createContext, useEffect, useState } from "react";

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  const [myExperience, setMyExperience] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState({});

  const contextValue = {
    myExperience,
    setMyExperience,
    jobDescription,
    setJobDescription,
    resume,
    setResume
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
    if (resume) {
      localStorage.setItem('resume', JSON.stringify(resume));
    }
  }, [resume]);
  
  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
