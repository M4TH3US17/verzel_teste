export class Carro {
    id: number;
    nome: string;
    preco: number;
    urlImagem: string;
    ano: number;
    cor: string;
    km: number;
    tipo: string;
    marca: Marca;
    modelo: string;

    constructor( id: number, nome: string, preco: number, urlImagem: string, ano: number, cor: string, km: number, tipo: string, marca: Marca,
        modelo: string) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.urlImagem = urlImagem;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
    }
}

export class Marca {
    id: number;
    marca: string;

    constructor( id: number, marca: string) {
        this.id = id;
        this.marca = marca;
    }
}

export class Usuario {
    username: string;
    senha: string;

    constructor(username: string, senha: string) {
        this.username = username;
        this.senha = senha;
    }
}