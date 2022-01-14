import axios from 'axios';

export const Wisata = axios.create({
    baseURL: "http://localhost:7000/api/v1",
});
