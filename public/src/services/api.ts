import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async <T>(url: string) => {
  const response = await api.get<T>(url);
  return response.data;
};

export const postRequest = async <T, D>(url: string, data: D) => {
  const response = await api.post<T>(url, data);
  return response.data;
};
