import axios    from 'axios';
import { Carro } from '../utils/objects';

export default class CarrosApiService {
   axios
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:8084/api/v1'
        });

        this.axios.interceptors.request.use(config => {
            const token = localStorage.getItem('token');
            if (token) config.headers.Authorization = 'Bearer ' + token
    
            return config;
        });
    };

    get(url: string) {
        return this.axios.get(url);
    }

    delete(url: string) {
        return this.axios.delete(url);
    }

    post(url: string, data: any) {
        return this.axios.post(url, data);
    }

    put(url: string, data: any) {
        return this.axios.put(url, data);
    }
};