import { Carro } from "../utils/objects";
import CarrosApiService from "./CarroApiServics";

export default class ListagemService extends CarrosApiService {

   /* async carregarCards(page = 0, sort='preco,desc', filtro = null) {
        if(filtro !== null && filtro !== '') {
            let urlFiltroMarca  =  `/carros/filtro/marca/${filtro}?page=${page}&sort=${sort}`;
            let urlFiltroAno    =    `/carros/filtro/ano/${filtro}?page=${page}&sort=${sort}`;
            let urlFiltroModelo = `/carros/filtro/modelo/${filtro}?page=${page}&sort=${sort}`;

            let marcas = ['BMW', 'NISSAN', 'AUDI', 'CHERY', 'CHEVROLET', 'CITROEN', 'DODGE'];

            if(marcas.includes(filtro.toUpperCase())) return await  this.get(urlFiltroMarca);
            else if(Number.isInteger(Number(filtro))) return await    this.get(urlFiltroAno);
            else if(typeof(filtro) === 'string')      return await this.get(`/carros/filtro/modelo/${filtro}?page=${page}&sort=${sort}`);
        }
        let url = `/carros?size=8&page=${page}&sort=${sort}`;
        return await this.get(url);
    }*/

    async carregarCards(page = 0, sort='preco,desc', filtro: any = null) {
        if(filtro !== null && filtro !== '') {
            let urlFiltroMarca  =  `/carros/filtro/marca/${filtro}?page=${page}&sort=${sort}`;
            let urlFiltroAno    =    `/carros/filtro/ano/${filtro}?page=${page}&sort=${sort}`;
            let urlFiltroModelo = `/carros/filtro/modelo/${filtro}?page=${page}&sort=${sort}`;

            let marcas = ['BMW', 'NISSAN', 'AUDI', 'CHERY', 'CHEVROLET', 'CITROEN', 'DODGE'];

            if(marcas.includes(filtro.toUpperCase())) return await  this.get(urlFiltroMarca);
            else if(Number.isInteger(Number(filtro))) return await    this.get(urlFiltroAno);
            else if(typeof(filtro) === 'string')      return await this.get(`/carros/filtro/modelo/${filtro}?page=${page}&sort=${sort}`);
        }
        let url = `/carros?size=8&page=${page}&sort=${sort}`;
        return await this.get(url);
    }

    async carregaCardPorId(carroId: number) {
        let url = '/carros/'+carroId;
        return await this.get(url);
    }

    async deletaCard(idCarro: number) {
        let url = '/carros/'+ idCarro;
        return await this.delete(url);
    }

    async atualizarCard(idCarro: number, dados: Carro) {
        let url = '/carros/atualizar/' + idCarro;
        return await this.put(url, dados);
    }

    async criarCard(dados: Carro) {
        return await this.post('/carros/salvar', dados);
    }
};