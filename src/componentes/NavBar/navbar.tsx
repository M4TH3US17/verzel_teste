import React, { useState, useContext } from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo/logo';
import MenuMobile from './MenuMobile/menumobile';
import MenuDesktop from './MenuDesktop/menudesktop';
import { useNavigate } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';
import GlobalContext from '../../utils/GlobalContext';

const NavBar = () => {
    let navigate = useNavigate();
    const { estaAutenticado, setEstaAutenticado } = useContext(GlobalContext);

    const handleClickOnSair = () => {
        new UsuarioService().logout();
        // window.location.reload();
        navigate("/login");
        setEstaAutenticado(false);
    }

    return (
        <>
          {estaAutenticado ? (
            <header className='carros-header-container'>
              <nav className='container'>
                <div className='carros-nav-content'>
                  <Logo />
                  <MenuDesktop handleClickOnSair={handleClickOnSair} />
                  <MenuMobile handleClickOnSair={handleClickOnSair} />
                </div>
              </nav>
            </header>
          ) : (
            <></>
          )}
        </>
      );
};

export default NavBar;