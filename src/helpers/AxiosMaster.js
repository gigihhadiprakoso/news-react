import axios from 'axios';

const URL = 'http://localhost:8000/api/';

export const api = axios.create({
    baseURL:URL,
    headers:{
        'Content-Type':'multipart/form-data'
    }
});

export const apiLogin = axios.create({
    baseURL:URL,
    headers:{
        'Content-Type':'application/json'
    }
});

