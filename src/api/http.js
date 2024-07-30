import axios from "axios";

const API_Base_URL = "https://moviesapi.codingfront.dev/api/v1";

export const createAxiosInstance = () => {
  const instance = axios.create({ baseURL: API_Base_URL });
  return instance;
};
