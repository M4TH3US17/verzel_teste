import React, {useEffect} from 'react';
import './HomeCarros.css'
import ListagemService from '../../../services/ListagemService';

const listagemService = new ListagemService();

const HomeCarros = () => {

    useEffect(() => {
        listagemService.carregaCardPorId(1).then(response => { 
            console.log(response.data.content);
        })
    }, []);

    return (<></>);
};

export default HomeCarros;