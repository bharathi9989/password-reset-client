import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:3030/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
