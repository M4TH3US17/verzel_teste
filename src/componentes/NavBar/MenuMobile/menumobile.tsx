import React, { useState } from 'react';
import './menumobile.css';
import { Link } from 'react-router-dom';

export default function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState<boolean>(false);

    const clicou = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <div className='menu-mobile'>
            <button className='btn btn-burguer' onClick={clicou}>
                {menuAberto ? (<i className="bi bi-x-lg"></i>) : (<i className='bi bi-list'></i>)}
            </button>

            {menuAberto ?
                (
                    <ul className='menu-options animate__animated animate__fadeInRightBig'>
                        <li><Link to={"/login"} className='btn btn-option'>Login</Link></li>
                        <li><Link to={"/administracao"} className='btn btn-option'>Admin</Link></li>
                        <li><Link to={"/carros/salvar"} className='btn btn-option'>Salvar</Link></li>
                        <li><Link to={""} className='btn btn-option'>Voltar</Link></li>
                        <li><Link to={""} className='btn btn-option'>Sair</Link></li>
                    </ul>
                )
                : null}
        </div>
    );
}