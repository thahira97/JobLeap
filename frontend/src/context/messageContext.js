import React, { createContext, useState, useEffect } from 'react';

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    const storedMessage = localStorage.getItem('message');
    if (storedMessage) {
      setMessage(storedMessage);
    }
  }, []);

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
