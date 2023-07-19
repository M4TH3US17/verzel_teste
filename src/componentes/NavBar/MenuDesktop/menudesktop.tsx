import React from 'react';
import './menudesktop.css';

export default function MenuDesktop() {
    return (
        <div className='menu-desktop'>
            <button className='btn btn-desktop'>Login</button>
            <button className='btn btn-desktop'>Admin</button>
            <button className='btn btn-desktop'>Salvar</button>
            <button className='btn btn-desktop'>Voltar</button>
            <button className='btn btn-desktop'>Sair</button>
        </div>
    );
}