import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export default api;

// https://b43.entri.api