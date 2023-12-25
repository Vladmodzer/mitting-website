// context.js
import { createContext, useState } from 'react';
import { NextButton } from './States/RegBtnNext';
import { PrevButton } from './States/RegBtnPrev';

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const regBtnNext = NextButton();
  const regBtnPrev = PrevButton();
  const regButtons = {
    ...regBtnNext,
    ...regBtnPrev,
  };
  return (
    <AppContext.Provider value={regButtons}>
      {children}
    </AppContext.Provider>
  );

};

export  default AppProvider;
