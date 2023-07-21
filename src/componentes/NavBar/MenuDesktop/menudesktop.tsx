import React, { useState } from 'react';
import './menudesktop.css';
import { Link } from 'react-router-dom';

interface MenuDesktopProps {
    handleClickOnSair: any;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ handleClickOnSair }) => {

    return (
        <div className='menu-desktop'>
            <Link to={"/"} className='btn  btn-desktop'>Home</Link>
            <Link to={"/administracao"} className='btn btn-desktop'>Admin</Link>
            <button className='btn btn-desktop' onClick={handleClickOnSair}>Sair</button>
        </div>
    );
}

export default MenuDesktop;