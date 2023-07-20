import React from 'react';
import './menudesktop.css';
import { Link } from 'react-router-dom';

export default function MenuDesktop() {
    return (
        <div className='menu-desktop'>
            <Link to={"/login"} className='btn btn-desktop'>Login</Link>
            <Link to={"/administracao"} className='btn btn-desktop'>Admin</Link>
            <Link to={"/carros/salvar"} className='btn btn-desktop'>Salvar</Link>
            <Link to={"/"} className='btn btn-desktop'>Voltar</Link>
            <Link to={"/"} className='btn btn-desktop'>Sair</Link>
        </div>
    );
}