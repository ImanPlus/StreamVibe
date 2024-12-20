import { getMovies } from "../api/movie";
import { getGenres } from "../api/genre";

export async function moviesLoader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const query = url.searchParams.get("q");

  const { data: listMovies } = await getMovies(page, query);
  const { data: genreMovies } = await getGenres();

  return {
    movies: listMovies.data,
    page,
    totalPages: listMovies.metadata.total_count,
    genres: genreMovies,
  };
}
