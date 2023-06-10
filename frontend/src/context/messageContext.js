import React, { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  
  const contextValue = {
    message,
    setMessage
  }
  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};
