import axios from "axios";

const api = axios.create({
    baseURL: 'http://34.138.22.96/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    }
});

export default api;