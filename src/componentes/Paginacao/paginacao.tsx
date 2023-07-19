import React from 'react';
import './paginacao.css';
//<span className="page-link btn-anterior">Anterior</span>
// 
interface PaginacaoProps {
    page: any;
    pageNumber: number;
    inicio: () => void;
    proximo: () => void;
    anterior: () => void;
  }

const Paginacao: React.FC<PaginacaoProps> = ({page, inicio, proximo, anterior}) => {
  let pageNumber = page.number;
  if(pageNumber !== 0) document.querySelector('.page-item')?.classList.remove('disabled');

    return (
    <div className='paginacao d-flex justify-content-center'>
        <div>
          <ul className="pagination justify-content-center">

             <li className="page-item disabled" onClick={e => anterior()}>
               <span className="page-link btn-anterior">Anterior</span>
             </li>

           {/* <li className="page-item" onClick={e => inicio()}>
                <span className="page-link page-link-inicio">Inicio</span>
    </li>*/}
            
            <li className="page-item" onClick={e => proximo()}>
                <span className="page-link btn-proximo">Próximo</span>
            </li>
        </ul>
        </div>

        <div className='paginacao-informations'>
            <span className='paginacao-information-text'>page: </span> {pageNumber + 1}
        </div>
    </div>)};

export default Paginacao;