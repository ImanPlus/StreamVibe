import { useLoaderData, useSearchParams } from "react-router-dom";
import { getMovies } from "../api/movie";
import Banner from "../components/Banner";
import GenreList from "../components/GenreList";
import MovieList from "../components/MovieList";
import PromoSection from "../components/PromoSection";
import useBreakpoints from "../constants/breakpoints";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const query = url.searchParams.get("q");
  const { data } = await getMovies(page, query);

  return { movies: data.data, page, totalPages: data.metadata.total_count };
}

export default function Movies() {
  const { isMobile } = useBreakpoints();
  const { movies, page, totalPages } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const onPageChange = (page) => {
    setSearchParams({ page });
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col px-4 pt-10 bg-black_08 mt-20">
      <Banner />

      {isMobile && (
        <>
          <GenreList />
          <MovieList
            movies={movies}
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
          <PromoSection />
        </>
      )}

      {!isMobile && (
        <>
          <div className="container border border-black_15 mt-28 mb-8 rounded-xl relative min-h-80">
            <button className="absolute translate-x-[50%] translate-y-[-50%] md:translate-x-[27%] lg:translate-x-[37%] bg-red_45 rounded-md p-2 font-serif font-semibold text-base lg:text-xl text-white w-24 h-10 lg:w-28 lg:h-12">
              Movies
            </button>
            <div className="p-10 pb-4 md:pt-5 md:px-6 lg:px-10 ">
              <GenreList />
              <MovieList
                movies={movies}
                page={page}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          </div>
          <PromoSection />
        </>
      )}
    </div>
  );
}
