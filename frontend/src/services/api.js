import axios from "axios";

const API = axios.create({
  baseURL: "https://payflow-backend-7ylu.onrender.com",
});

export default API;