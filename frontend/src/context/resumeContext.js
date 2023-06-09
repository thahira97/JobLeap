import React, { createContext, useState } from "react";

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

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
