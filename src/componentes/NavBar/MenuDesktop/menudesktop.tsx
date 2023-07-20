import React from 'react';
import './menudesktop.css';
import { Link } from 'react-router-dom';

interface MenuDesktopProps {
    handleClickOnSair: any;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ handleClickOnSair }) => {
    return (
        <div className='menu-desktop'>
            <Link to={"/login"} className='btn btn-desktop'>Login</Link>
            <Link to={"/administracao"} className='btn btn-desktop'>Admin</Link>
            <Link to={"/carros/salvar"} className='btn btn-desktop'>Salvar</Link>
            <Link to={"/"} className='btn btn-desktop'>Voltar</Link>
            <button className='btn btn-desktop' onClick={handleClickOnSair}>Sair</button>
        </div>
    );
}

export default MenuDesktop;