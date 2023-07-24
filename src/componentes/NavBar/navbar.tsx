import React, { useState, useContext } from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo/logo';
import MenuMobile from './MenuMobile/menumobile';
import MenuDesktop from './MenuDesktop/menudesktop';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';
import { GlobalContext } from '../../utils/GlobalContext';

const NavBar = () => {
    let navigate = useNavigate();
    const { autenticacao, tema } = useContext(GlobalContext);
    const { estaAutenticado, setEstaAutenticado } = autenticacao;

    const handleClickOnSair = () => {
        new UsuarioService().logout();
        // window.location.reload();
        navigate("/");
        setEstaAutenticado(false);
    }

    return (
        <>
            <header className='carros-header-container'>
              <nav className='container'>
                <div className='carros-nav-content'>
                  <Link to={"/"} className='logo'><Logo /></Link>

                  <MenuDesktop handleClickOnSair={handleClickOnSair} estaAutenticado={estaAutenticado}/>
                  <MenuMobile handleClickOnSair={handleClickOnSair} estaAutenticado={estaAutenticado} />
                </div>
              </nav>
            </header>
        </>
      );
};

export default NavBar;