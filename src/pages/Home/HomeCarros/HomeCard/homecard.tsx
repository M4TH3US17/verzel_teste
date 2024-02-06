import React, { useState } from 'react';
import './homecard.css';
import { Carro } from '../../../../utils/objects';
import { Utils } from '../../../../utils/Utils';

interface HomeCardProps {
    carro: Carro;
}

const HomeCard: React.FC<HomeCardProps> = ({ carro }) => {
    const [precoDoCarro, setPrecoDoCarro] = useState<string>('R$' + Utils.formatarMilhares(carro.preco));
    const [mostrarDiv, setMostrarDiv] = useState(false);

    let toUpper = (str: string): string => {
        return str.toUpperCase();
    }

    let retornaHTMLDaCor = (cor: string) => {
        cor = cor.toUpperCase();

        switch (cor) {
            case 'AMARELO':
                return (<div className='info-color-circle color-circle-amarelo' />);
            case 'PRETO':
                return (<div className='info-color-circle color-circle-preto' />);
            case 'CINZA':
                return (<div className='info-color-circle color-circle-cinza' />);
            case 'VERMELHO':
                return (<div className='info-color-circle color-circle-vermelho' />);
            case 'PRATA':
                return (<div className='info-color-circle color-circle-prata' />);
            case 'VERDE':
                return (<div className='info-color-circle color-circle-verde' />);
            case 'BRANCO':
                return (<div className='info-color-circle color-circle-branco' />);
            case 'MARROM':
                return (<div className='info-color-circle color-circle-marrom' />);
            case 'AZUL':
                return (<div className='info-color-circle color-circle-azul' />);
            default:
                return (<div className='info-color-circle color-circle-default' />);
        }
    };

    return (
        <div className='home-card-container'>

            <div className='home-card-image-container'>
                <div className="reservado" style={{ display: carro.reservado ? 'none' : 'block' }}>RESERVADO</div>
                <img className='home-card-image' src={carro.urlImagem} alt={`Foto de um ${carro.nome}`} />
            </div>

            <div className='home-card-description-container'>
                <div className='home-card-description-text'>
                    <h3 className='home-card-description-text-title'>{carro.marca.marca + " " + carro.nome}</h3>

                    <div className='home-card-description-display-info' onMouseEnter={() => setMostrarDiv(true)} onMouseLeave={() => setMostrarDiv(false)}>
                        <div className='home-card-description-display-container'>
                            <div className='home-card-description-display-info-text'>INFORMAÇÕES</div>
                            <i className="bi bi-plus-lg"></i>
                        </div>
                        {mostrarDiv && (
                            <div className='home-card-description-text-info'>
                                <div className='home-card-description-text-info-item d-flex justify-content-between'>
                                    <div>Km</div> <div style={{ marginRight: '5px' }}>{Utils.formatarMilhares(carro.km)}</div>
                                </div>
                                <div className='home-card-description-text-info-item d-flex justify-content-between'>
                                    <div>Ano</div> <div style={{ marginRight: '5px' }}>{carro.ano}</div>
                                </div>
                                <div className='home-card-description-text-info-item d-flex justify-content-between'>
                                    <div>Cor</div> <div style={{ marginRight: '5px' }}>{retornaHTMLDaCor(carro.cor)}</div>
                                </div>
                                <div className='home-card-description-text-info-item d-flex justify-content-between'>
                                    <div>Tipo</div> <div style={{ marginRight: '5px' }}>{toUpper(carro.tipo)}</div>
                                </div>
                                <div className='home-card-description-text-info-item d-flex justify-content-between'>
                                    <div>Modelo</div> <div style={{ marginRight: '5px' }}>{toUpper(carro.modelo)}</div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                <div className='home-card-description-details'>
                    <button className='home-card-description-details-button btn btn-dark'>Ver Detalhes</button>
                    <h3 className='home-card-description-details-price'>{precoDoCarro}</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;