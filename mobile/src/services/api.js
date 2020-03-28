import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.0.141:3333'
    baseURL: 'http://192.168.42.112:3333'
});

export default api;