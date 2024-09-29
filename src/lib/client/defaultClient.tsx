import axios from 'axios';

const defaultClient = axios.create({
    baseURL: 'https://api.doyun.dev',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default defaultClient;
