import React, { Dispatch, SetStateAction } from 'react';

type GlobalContextType = {
  estaAutenticado: boolean; // Alterado o tipo para boolean
  setEstaAutenticado: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = React.createContext<GlobalContextType>({
  estaAutenticado: false,
  setEstaAutenticado: () => {}
});

export default GlobalContext;
