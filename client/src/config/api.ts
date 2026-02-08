import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Health check API
export const checkHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};

// User APIs
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (userData: { name: string; email: string }) => {
  const response = await api.post("/users", userData);
  return response.data;
};

export default api;
