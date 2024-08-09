import { createAxiosInstance } from "./http";

export const getMovies = (page = "", query = "") => {
  const axiosInstance = createAxiosInstance();
  const queryParams = [];

  let url = "/movies";
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (query) {
    queryParams.push(`q=${query}`);
  }
  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  return axiosInstance.get(url);
};

export const getSingleMovie = (movieId) => {
  const axiosInstance = createAxiosInstance();
  if (!movieId) {
    return;
  }

  return axiosInstance.get(`/movies/${movieId}`);
};
