import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333'
});

/* pra fazer um withCredentials geral:

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  withCredentials: true
});

*/