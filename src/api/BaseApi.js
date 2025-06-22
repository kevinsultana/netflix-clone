import axios from "axios";

export const BaseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    Accept: "application/json",
  },
});
