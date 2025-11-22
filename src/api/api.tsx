import axios from "axios";

const api = axios.create({
    baseURL: "https://api.opendota.com"
})

export default api;