import { createAxiosInstance } from "./http";

export const getMovies = (page = "") => {
  const axiosInstance = createAxiosInstance();
  let url = "/movies";
  if (page) {
    url = `${url}?page=${page}`;
  }

  return axiosInstance.get(url);
};
