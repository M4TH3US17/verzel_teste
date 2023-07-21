import React, { useState } from 'react';
import './menudesktop.css';
import { Link, useLocation } from 'react-router-dom';

interface MenuDesktopProps {
    handleClickOnSair: any;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ handleClickOnSair }) => {
    const location = useLocation();

    return (
        <div className='menu-desktop'>
            <Link to={"/"} className={location.pathname === "/" ? "isSelected btn btn-desktop" : "btn btn-desktop"}>Home</Link>
            <Link to={"/administracao"} className={location.pathname === "/administracao" ? "isSelected btn btn-desktop" : "btn btn-desktop"}>Admin</Link>
            <button className='btn btn-desktop' onClick={handleClickOnSair}>Sair</button>
        </div>
    );
}

export default MenuDesktop;