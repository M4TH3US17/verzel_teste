import React, {useEffect, useState} from 'react';
import './HomeCarros.css'
import ListagemService from '../../../services/ListagemService';
import HomeCard from './HomeCard/homecard';
import { Carro } from '../../../utils/objects';

const listagemService = new ListagemService();

const HomeCarros = () => {
    const [carros, setCarros] = useState<Carro[]>([]);

    useEffect(() => {
        listagemService.carregarCards(1).then(response => {
            setCarros(response.data.data.content);
        })
    }, []);

    return (
        <div className="container">
           <section className="row">
             {carros.map(carro => (<HomeCard key={carro.id} carro={carro} />))}
           </section>
        </div>
    );
};

export default HomeCarros;