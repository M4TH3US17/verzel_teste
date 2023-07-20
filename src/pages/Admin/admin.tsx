import React, { useEffect, useState } from 'react';
//import Filtro   from '../../componentes/Filtro';
//import NavBar   from '../../componentes/NavBar';
/*import EditImg  from '../../assets/img/EditImg';
import TrashImg from '../../assets/img/TrashImg/index';*/
import { Link, useNavigate } from 'react-router-dom';
import ListagemService from '../../services/ListagemService';
import './admin.css';
import { toast } from 'react-toastify';
import NavBar from '../../componentes/NavBar/navbar';
import Filtro from '../../componentes/Filtro/filtro';
import Paginacao from '../../componentes/Paginacao/paginacao';
import UsuarioService from '../../services/UsuarioService';
import { Carro } from '../../utils/objects';
import EditImg from '../../assets/img/EditImg/edit';
import TrashImg from '../../assets/img/TrashImg/trash';

const listagemService = new ListagemService();

export default function Admin() {
    const [carros, setCarros] = useState<Carro[]>([]);
    const [filtro, setFiltro] = useState<string>();
    const [isMobile, setIsMobile] = useState<boolean>();
    const [ordem, setOrdem] = useState('preco,desc');

    const navigate = useNavigate();
    const [statusCode, setStatusCode] = useState(0);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [page, setPage] = useState({ content: [], last: true, totalPages: 0, totalElements: 0, size: 8, number: 0, numberOfElements: 0, empty: true });

    const inicio = () => {
        setPageNumber(0);
    }

    const anterior = () => {
        if (pageNumber > 0) setPageNumber(--page.number);
    }

    const proximo = () => {
        console.log("pageNumber: " + pageNumber + " / " + page.number)
        if (pageNumber < 1) setPageNumber(++page.number);
    }


    document.addEventListener('click', (e: MouseEvent) => {
        let ordenacao = (e.target as HTMLInputElement).value;

        if (ordenacao === 'Menor KM') setOrdem('km,asc');
        if (ordenacao === 'Maior KM') setOrdem('km,desc');
        if (ordenacao === 'Menor Preço') setOrdem('preco,asc');
        if (ordenacao === 'Mais Novos') setOrdem('ano,asc');

        let filtro = (e.target as HTMLElement).classList;

        if (filtro.contains('bi-search') || filtro.contains('btn-default')) {
            let value = (document.querySelector('.form-control-search') as HTMLInputElement).value;
            setFiltro(value);
        }
    });

    useEffect(() => {
        if (window.matchMedia('(max-width: 414px)').matches) setIsMobile(true);
        else setIsMobile(false);

        // if(new UsuarioService().estaAutenticado()) {
        listagemService.carregarCards(pageNumber, ordem, filtro).then(response => {
            const info = response.data;
            console.log("SERVER RESPONSE: ", info);

            if (info.code != 404) setCarros(info.data.content);
            setPage(info.data);
            setStatusCode(info.code)
        });
        // } else {/*navigate("/login")*/}
    }, [pageNumber, setIsMobile, setPage, setStatusCode, ordem, filtro]);

    const handleClickDelete = (idCarro: number) => {
        listagemService.deletaCard(idCarro)
            .then(() => toast.success('Carro de ID ' + idCarro + ' foi deletado.'))
            .catch(() => toast.error('Esse carro já foi deletado.'));
    };

    const naoExibirEsteCampoSeForMobile = () => {
        return { display: isMobile ? 'none' : 'table-cell' };
    }
    return (
        <>
            <NavBar />
            <Filtro />

            {<section>
                <div className="container">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID   </th>
                                <th scope="col">Nome </th>
                                <th scope="col">Preço</th>

                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">KM   </th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Disponível</th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Ano  </th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Cor  </th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Tipo </th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Marca</th>
                                <th style={naoExibirEsteCampoSeForMobile()} scope="col">Modelo</th>

                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {carros.map(carro => (
                                <tr key={carro.id}>
                                    <td><strong>{carro.id}</strong></td>
                                    <td>{carro.nome}</td>
                                    <td>{carro.preco}</td>

                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.km}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.reservado ? 'sim' : 'não'}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.ano}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.cor}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.tipo}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.marca.marca}</td>
                                    <td style={naoExibirEsteCampoSeForMobile()}>{carro.modelo}</td>

                                    <td>
                                        <Link className="btn btn-primary btn-sm btn-edit btn-table" to={"/carros/atualizar/" + carro.id}> <EditImg /> </Link>

                                        <button className="btn btn-danger btn-sm btn-table" onClick={() => handleClickDelete(carro.id)}> <TrashImg /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> </section>}

            <Paginacao page={page} inicio={inicio} proximo={proximo} anterior={anterior} pageNumber={pageNumber} />
        </>
    );
};