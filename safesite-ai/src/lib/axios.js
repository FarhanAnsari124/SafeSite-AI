import axios from "axios";

const API_URL = "https://safesite-ai-backend.onrender.com/api";

export async function registerUser({ name, email, password }) {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password
  });
  return response.data;
}

export async function loginUser({ email, password }) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password
  });
  // assuming backend returns { token: "...", user: {...} }
  const { token, user } = response.data;
  localStorage.setItem("authToken", token);
  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
}
