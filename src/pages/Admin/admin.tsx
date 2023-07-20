import React, { useEffect, useState } from 'react';
//import Filtro   from '../../componentes/Filtro';
//import NavBar   from '../../componentes/NavBar';
/*import EditImg  from '../../assets/img/EditImg';
import TrashImg from '../../assets/img/TrashImg/index';*/
import {Link, useNavigate}  from 'react-router-dom';
import ListagemService      from '../../services/ListagemService';
import './admin.css';
//import Paginacao from '../../componentes/Paginacao';
//import UsuarioService from '../../services/UsuarioService';
import { toast } from 'react-toastify';
import NavBar from '../../componentes/NavBar/navbar';
import Filtro from '../../componentes/Filtro/filtro';

const listagemService = new ListagemService();

export default function Admin() {
    /*const [carros, setCarros]   = useState([]);
    const [display, setDisplay] = useState('');
    const [filtro, setFiltro]   = useState(null);
    const [ordem, setOrdem]     = useState('preco,desc');  
    const navigate              = useNavigate();

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState({
      content: [], last: true, totalPages: 0, totalElements: 0, size: 8, number: 0,  numberOfElements: 0, empty: true });

    let handleClick = e => {
        if(e.classList.contains('btn-proximo'))       setPageNumber(++page.number);
        if(e.classList.contains('btn-anterior'))      setPageNumber(--page.number);
        if(e.classList.contains('page-link-inicio'))  setPageNumber(0);
    };

    document.addEventListener('click', e => {
        let ordenacao = e.target.value;
    
        if(ordenacao === 'Menor KM')    setOrdem('km,asc');
        if(ordenacao === 'Maior KM')    setOrdem('km,desc');
        if(ordenacao === 'Menor Preço') setOrdem('preco,asc');
        if(ordenacao === 'Mais Novos')  setOrdem('ano,desc');

        let filtro = e.target.classList;

        if(filtro.contains('bi-search') || filtro.contains('btn-default')) {
        let value = document.querySelector('.form-control-search').value;
        setFiltro(value);
    }
      });
    
   useEffect(() => {
        if(window.matchMedia('(max-width: 414px)').matches) setDisplay('none');
 
        if(new UsuarioService().estaAutenticado()) {
            listagemService.carregarCards(pageNumber, ordem, filtro).then(response => {
                setCarros(response.data.content); 
                setPage(response.data);
            });
        } else {navigate("/")}
    }, [pageNumber, ordem, filtro]);

    const handleClickDelete = (idCarro) => {
        listagemService.deletaCard(idCarro)
           .then(()  => toast.success('Carro de ID ' + idCarro + ' foi deletado.'))
           .catch(() =>   toast.error('Esse carro já foi deletado.'));
    };*/

    return(
        <>
          <NavBar/>
          <Filtro/>

          {/*<section>
            <div className="container">
             <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID   </th>
                        <th scope="col">Nome </th>
                        <th scope="col" style={{display: display}}>Preço</th>
                        <th scope="col" style={{display: display}}>KM   </th>
                        <th scope="col" style={{display: display}}>Disponível</th>
                        <th scope="col" style={{display: display}}>Ano  </th>
                        <th scope="col" style={{display: display}}>Cor  </th>
                        <th scope="col" style={{display: display}}>Tipo </th>
                        <th scope="col" style={{display: display}}>Marca</th>
                        <th scope="col" style={{display: display}}>Modelo</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
    
                <tbody>
                    {carros.map(carro => (
                    <tr key={carro.id}>
                        <td><strong>{carro.id}</strong></td>
                        <td>{carro.nome}</td>
                        <td style={{display: display}}>{carro.preco}</td>
                        <td style={{display: display}}>{carro.km}</td>
                        <td style={{display: display}}>{carro.reservado ? 'sim' : 'não'}</td>
                        <td style={{display: display}}>{carro.ano}</td>
                        <td style={{display: display}}>{carro.cor}</td>
                        <td style={{display: display}}>{carro.tipo}</td>
                        <td style={{display: display}}>{carro.marca.marca}</td>
                        <td style={{display: display}}>{carro.modelo}</td>
                        <td>
                           <Link className="btn btn-primary btn-sm btn-edit btn-table" 
                           to={"/carros/atualizar/" + carro.id}> <EditImg/> </Link>
                           
                           <button className="btn btn-danger btn-sm btn-table" 
                           onClick={() => handleClickDelete(carro.id)}> <TrashImg/> </button>
                       </td>
                    </tr>
                    ))}
                </tbody>
            </table>
                    </div> </section>*/}

        {/*</><Paginacao page={page} click={handleClick}/>*/}
        </>
    );
};