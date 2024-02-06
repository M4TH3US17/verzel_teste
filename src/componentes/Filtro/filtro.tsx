import React, { useContext, useEffect } from 'react';
import './filtro.css';
import { GlobalContextTheme } from '../../utils/GlobalContext';

export default function Filtro() {
    const ordem = [{ id: 1, descricao: 'Menor KM' }, { id: 2, descricao: 'Menor Preço' }, { id: 3, descricao: 'Maior KM' }, { id: 4, descricao: 'Mais Novos' }];
    return (
        <nav className={`carros-filtro-container`}>
            <div className="container d-flex justify-content-between container-nav">

                <div className='col-lg-6 search-container'>
                    <div className='input-group'>
                        <input type="text" className="form-control-md form-control-search d-none d-md-block" placeholder='Busque por marca, ano ou modelo' />

                        <span className="input-group-btn">
                            <button className='d-none d-md-block btn btn-default btn-primary btn-search' type="button">Buscar</button>
                        </span>
                    </div>
                </div>


                    <select className='form-select form-select-lg mb-2'>
                        <option disabled>Ordenar Carros</option>
                        {ordem.map(x => (<option key={x.id}>{x.descricao}</option>))}
                    </select>
            </div>
        </nav>
    );
};