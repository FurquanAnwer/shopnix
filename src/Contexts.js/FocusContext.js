import React, { createContext, useState } from 'react';

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const [focusedField, setFocusedField] = useState('');

  return (
    <FocusContext.Provider value={{ focusedField, setFocusedField }}>
      {children}
    </FocusContext.Provider>
  );
};
