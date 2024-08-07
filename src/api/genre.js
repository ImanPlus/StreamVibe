import { createAxiosInstance } from "./http";

export const getGenres = (genreId = "", page = 1) => {
  const axiosInstance = createAxiosInstance();
  let url = "/genres";

  if (genreId) {
    url += `/${genreId}/movies?page=${page}`;
  }

  return axiosInstance.get(url);
};
