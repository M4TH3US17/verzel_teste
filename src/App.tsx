import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Admin from './pages/Admin/admin';
import Modify from './pages/Admin/componentes/Modify/modify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Page404 from './pages/Page404/page404';
import Login from './pages/Login/login';
import GlobalContext from './utils/GlobalContext';
import UsuarioService from './services/UsuarioService';

function App() {
  const [estaAutenticado, setEstaAutenticado] = useState<boolean>(new UsuarioService().estaAutenticado());

  return (
    <Router>
      <GlobalContext.Provider value={{ estaAutenticado, setEstaAutenticado }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administracao" element={<Admin />} />
          <Route path="/carros/salvar" element={<Modify isUpdate={false} />} />
          <Route path="/carros/atualizar/">
            <Route path=":carroId" element={<Modify isUpdate={true} />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </GlobalContext.Provider>
      <ToastContainer />
    </Router>
  );
}

export default App;
