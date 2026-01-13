import api from "./axios";

// LOGIN
export const loginUser = async (data) => {
  const res = await api.post("/api/auth/login", data);
  return res.data;
};

// REGISTER
export const registerUser = async (data) => {
  const res = await api.post("/api/auth/register", data);
  return res.data;
};