import axios from "axios";

export const createAxiosInstance = () => {
  const baseURL = import.meta.env.REACT_APP_BASE_URL;
  const instance = axios.create({ baseURL });
  return instance;
};
