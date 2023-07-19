import React, { useState } from 'react';
import './navbar.css'
import Logo from '../../assets/img/Logo/logo';
import MenuMobile from './MenuMobile/menumobile';
import MenuDesktop from './MenuDesktop/menudesktop';

const NavBar = () => {
  
    return (
        <header className='carros-header-container'>
        <nav className='container'>
            <div className='carros-nav-content'>
               <Logo/>
               
               <MenuDesktop />
               <MenuMobile />
            </div>
        </nav>
    </header>
    );
};

export default NavBar;