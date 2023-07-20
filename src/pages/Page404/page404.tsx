import React    from 'react';
import { Link } from 'react-router-dom';
import          './page404.css';

export default function Page404() {
    return (
        <>
          <div className="page404-div">
            <h1>Erro 404 - Página inexistente.</h1>
            <Link to={"/"}><strong>Clique Aqui</strong></Link>
          </div>
        </>
    );
};