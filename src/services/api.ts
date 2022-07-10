import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/api/V1/categories",
});

export { api };
