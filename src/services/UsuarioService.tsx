import { Usuario } from '../utils/objects';
import CarrosApiService from './CarroApiServics';

export default class UsuarioService extends CarrosApiService {
    async login(dadosDoUsuario: Usuario) {
        const {data} = await this.post("/usuarios/login", dadosDoUsuario);
        localStorage.setItem("token", data.token);
    }

    async logout() {
        localStorage.removeItem("token");
    }

    estaAutenticado() {
        return localStorage.getItem('token') !== null;
    }
};