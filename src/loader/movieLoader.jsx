import { getSingleMovie } from "../api/movie";

export async function movieLoader({ params }) {
  const { movieId } = params;
  const { data } = await getSingleMovie(movieId);

  return { movie: data };
}
