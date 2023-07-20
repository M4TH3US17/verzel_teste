import React, { useEffect, useState } from 'react';
import './menumobile.css';
import { Link, useNavigate } from 'react-router-dom';

interface MenuMobileProps {
    handleClickOnSair: any;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ handleClickOnSair }) => {
    const [menuAberto, setMenuAberto] = useState<boolean>(false);

    const openMenu = (e: any) => {
        setMenuAberto(!menuAberto);
    }

    return (
        <div className='menu-mobile'>
            <button className='btn btn-burguer' onClick={e => openMenu(e)}>
                {menuAberto ? (<i className="bi bi-x-lg"></i>) : (<i className='bi bi-list'></i>)}
            </button>

            {menuAberto ?
                (
                    <ul className='menu-options animate__animated animate__fadeInRightBig'>
                        <li><Link to={"/login"} className='btn btn-option'>Login</Link></li>
                        <li><Link to={"/administracao"} className='btn btn-option'>Admin</Link></li>
                        <li><Link to={"/carros/salvar"} className='btn btn-option'>Salvar</Link></li>
                        <li><Link to={""} className='btn btn-option'>Voltar</Link></li>
                        <li><button className='btn btn-option' onClick={handleClickOnSair}>Sair</button></li>
                    </ul>
                )
                : null}
        </div>
    );
}

export default MenuMobile;