import React, { useState } from 'react';
import './menumobile.css';

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
                        <li><button className='btn btn-option'>Login</button></li>
                        <li><button className='btn btn-option'>Admin</button></li>
                        <li><button className='btn btn-option'>Salvar</button></li>
                        <li><button className='btn btn-option'>Voltar</button></li>
                        <li><button className='btn btn-option'>Sair</button></li>
                    </ul>
                )
                : null}
        </div>
    );
}