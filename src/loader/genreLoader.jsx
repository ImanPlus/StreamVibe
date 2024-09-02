import { getGenres } from "../api/genre";
import { getMovies } from "../api/movie";

export async function genreLoader({ request, params }) {
  const { genreId } = params;
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const query = url.searchParams.get("q");

  const { data: listMovies } = await getMovies(page, query);
  const { data: selectGenre } = await getGenres(genreId, page);
  const { data: genreMovies } = await getGenres();

  return {
    movies: selectGenre.data,
    page,
    totalPages: listMovies.metadata.total_count,
    genres: genreMovies,
  };
}
