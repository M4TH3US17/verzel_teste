import React from 'react';
import './homecard.css';
import { Carro } from '../../../../utils/objects';
import { Utils } from '../../../../utils/Utils';

interface HomeCardProps {
    carro: Carro;
}

const HomeCard: React.FC<HomeCardProps> = ({ carro }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3">

            <div className='cardCarro card'>
              <img src={carro.urlImagem} alt={"Foto de um " + carro.nome}/>
              <div>
                 <h3>{carro.marca.marca +" "+carro.nome}</h3>
                 <span className='card-descricao'>{carro.ano +' • ' + Utils.formatarMilhares(carro.km) + ' Km • ' + carro.tipo + ' • ' + carro.cor
                  + ' • ' + carro.modelo}</span><br/>
                 <span className='card-preco'>{'R$ ' +Utils.formatarMilhares(carro.preco)}</span>
             </div>
            </div>
        </div>
    );
};

export default HomeCard;