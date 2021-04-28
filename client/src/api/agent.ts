import axios, { AxiosResponse } from "axios";

import "react-toastify/dist/ReactToastify.css";

import Users from "./users/users";

axios.defaults.baseURL = "http://localhost:5000/";

const response = <T>(response: AxiosResponse<T>) => response;

export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(response),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(response),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(response),
  delete: <T>(url: string) => axios.delete<T>(url).then(response),
};

const agent = {
  Users,
};

export default agent;
