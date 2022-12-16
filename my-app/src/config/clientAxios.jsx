import axios from "axios";

const baseUrl = "http://localhost:3001" || process.env.BACKEND_URL;

const clientAxios = axios.create({
  baseURL: baseUrl,
});

export default clientAxios;
