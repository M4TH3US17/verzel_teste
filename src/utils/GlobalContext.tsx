import React, { Dispatch, SetStateAction } from 'react';

interface GlobalContextType {
  autenticacao: {
    estaAutenticado: boolean;
    setEstaAutenticado: Dispatch<SetStateAction<boolean>>;
  };
  tema: {
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
  };
}

type GlobalContextTheme = {
  isDark: boolean; 
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContextTheme = React.createContext<GlobalContextTheme>({
  isDark: false,
  setIsDark: () => {}
});

export const GlobalContext = React.createContext<GlobalContextType>({
  autenticacao: {
    estaAutenticado: false,
    setEstaAutenticado: () => {}
  },
  tema: {
    isDark: false,
    setIsDark: () => {}
  }
});