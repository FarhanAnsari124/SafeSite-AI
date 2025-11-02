// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://safesite-ai-backend.onrender.com", // your deployed backend
});

// attach token automatically to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // assuming you store JWT in localStorage
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default API;
