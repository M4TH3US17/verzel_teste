import React, { useEffect, useState } from 'react';
import './HomeCarros.css'
import ListagemService from '../../../services/ListagemService';
import HomeCard from './HomeCard/homecard';
import { Carro } from '../../../utils/objects';
import Paginacao from '../../../componentes/Paginacao/paginacao';
import Filtro from '../../../componentes/Filtro/filtro';

const listagemService = new ListagemService();

const HomeCarros = () => {
    const [carros, setCarros] = useState<Carro[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [statusCode, setStatusCode] = useState(0);
    const [page, setPage] = useState({ content: [], last: true, totalPages: 0, totalElements: 0, size: 8, number: 0, numberOfElements: 0, empty: true });

    const [filtro, setFiltro] = useState<string>();
    const [ordem, setOrdem] = useState('preco,desc');

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
        listagemService.carregarCards(pageNumber, ordem, filtro).then(response => {
            const info = response.data;
            let totalPaginas = info.data.totalPages

            console.log("SERVER RESPONSE: ", info);

            if (info.code != 404) setCarros(info.data.content);

            if(typeof (totalPages) !== 'undefined' && totalPages !== null) {
                console.log("entrou")
                setTotalPages(totalPaginas);
            }
            setStatusCode(info.code)
        })
    }, [pageNumber, setStatusCode, ordem, filtro, setTotalPages, totalPages]);

    const inicio = () => {
        setPageNumber(0);
    }

    const anterior = () => {
        if (pageNumber > 0) setPageNumber(--page.number);
    }

    const proximo = () => {
        if (pageNumber <= totalPages!) {
            setPageNumber(++page.number);
        }
    }

    return (
        <div className="container">

            <Filtro />
            <section className="row">
                {carros.map(carro => (<HomeCard key={carro.id} carro={carro} />))}
            </section>

            <Paginacao page={page} inicio={inicio} proximo={proximo} anterior={anterior} pageNumber={pageNumber} />
        </div>
    );
};

export default HomeCarros;