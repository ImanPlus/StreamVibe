import axios from "axios";

export const createAxiosInstance = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const instance = axios.create({ baseURL });
  return instance;
};
