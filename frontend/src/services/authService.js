import { api } from "../utils/api";
import { setToken } from "../utils/auth";

export const login = async (data) => {
  const res = await api("/api/auth/login", "POST", data);
  setToken(res.token);
  return res;
};

export const register = async (data) => {
  return api("/api/auth/register", "POST", data);
};