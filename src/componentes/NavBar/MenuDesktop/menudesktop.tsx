import React from 'react';
import './menudesktop.css';
import { Link, useLocation } from 'react-router-dom';

interface MenuDesktopProps {
    handleClickOnSair: any;
    estaAutenticado: boolean;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({ handleClickOnSair, estaAutenticado }) => {
    const location = useLocation();

    return (
        <div className='menu-desktop'>
            <Link to={"/"} className={location.pathname === "/" ? "isSelected btn btn-desktop" : "btn btn-desktop"}>Home</Link>

            {estaAutenticado ? (
                <>
                    <Link to={"/administracao"} className={location.pathname === "/administracao" ? "isSelected btn btn-desktop" : "btn btn-desktop"}>
                        Admin
                    </Link>
                    <button className="btn btn-desktop" onClick={handleClickOnSair}> Sair </button>
                </>
            ) : (
                <Link to={"/login"} className={"btn btn-desktop"}>Login</Link>
            )}
        </div>
    );
}

export default MenuDesktop;