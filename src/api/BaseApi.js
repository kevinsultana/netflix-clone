import axios from "axios";

export const BaseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGY3ZjcwMmQ5YjcxMzc0YjFhNDlmNzJjMWQ1NTVlMiIsIm5iZiI6MTc0MzMyODM4Mi42NDMwMDAxLCJzdWIiOiI2N2U5MTQ3ZTNmY2E5MGQyZGZmNmQxMDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.40inLzUrjzgAU2f4xd_x3_CZpW067_ou0sCXU0bmiew",
    Accept: "application/json",
  },
});
