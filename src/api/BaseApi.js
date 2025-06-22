import axios from "axios";

export const BaseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: "application/json",
  },
});
