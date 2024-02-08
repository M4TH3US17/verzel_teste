import React from 'react';
import './paginacao.css';
import { Link, useLocation } from 'react-router-dom';

interface PaginacaoProps {
  page: any;
  pageNumber: number;
  inicio: () => void;
  proximo: () => void;
  anterior: () => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ page, inicio, proximo, anterior }) => {
  let pageNumber: number = 0;
  const location = useLocation();

  try {
    pageNumber = page.number;
    if (pageNumber !== 0) document.querySelector('.page-item')?.classList.remove('disabled');
  } catch (error) {
    console.log("ERRO DISPARADO: " + error)
  }
  
  return (
    <div className='pagination'>
      <Link to={"/carros/salvar"} className='btn btn-desktop btn-primary isMobile btn-save' style={{ display: location.pathname == "/" ? "none" : "block" }}> 
      Cadastrar Carro</Link>

      <div className='pagination-button-list'>
        <div className='pagination-button-list-item' onClick={e => anterior()}><i className="bi bi-caret-left-fill"></i></div>

        <div className='paginacao-informations'>
          <span className='paginacao-information-text'> {pageNumber + 1} </span>
        </div>

        <div className='pagination-button-list-item' onClick={e => proximo()}><i className="bi bi-caret-right-fill"></i></div>
      </div>
    </div>
  )
};

export default Paginacao;