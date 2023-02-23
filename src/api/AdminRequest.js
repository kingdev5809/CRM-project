import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

export const rektor = async ({
  name,
  surname,
  email,
  phone_number,
  address,
  photo,
}) =>
  API.get("/rektor/teacher", {
    name,
    surname,
    email,
    phone_number,
    address,
    photo,
  });
