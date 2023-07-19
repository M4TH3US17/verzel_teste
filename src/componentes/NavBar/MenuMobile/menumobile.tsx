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
                    <ul>
                        <li><button>Login</button></li>
                        <li><button>Admin</button></li>
                        <li><button>Salvar</button></li>
                        <li><button>Voltar</button></li>
                        <li><button>Sair</button></li>
                    </ul>
                )
                : null}
        </div>
    );
}