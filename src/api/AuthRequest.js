import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

export const login = async ({ email, password }) =>
  API.post("/login", { email, password });

