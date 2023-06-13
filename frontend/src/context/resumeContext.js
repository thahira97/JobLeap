import React, { createContext, useEffect, useState } from "react";

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
  
  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
