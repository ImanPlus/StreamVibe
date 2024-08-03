import { Pagination } from "flowbite-react";
import MovieCard from "./MovieCard";
import customThemeMobile from "../theme/paginationMobile";
import customThemeDesktop from "../theme/paginationDesktop";
import useBreakpoints from "../constants/breakpoints";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function MovieList({
  movies = [],
  page = 1,
  totalPages = 1,
  onPageChange,
}) {
  const { isMobile } = useBreakpoints();

  return (
    <div className="flex flex-col justify-between py-12">
      {isMobile && (
        <>
          <h1 className="font-serif font-bold text-2xl text-white">
            Our Movies
          </h1>

          <div className="py-5 overflow-auto">
            <div className="flex gap-4">
              {movies.length !== 0 &&
                movies.map((item) => (
                  <Link to={`/movies/${item.id}`} key={item.id}>
                    <MovieCard
                      movies={movies}
                      image={item.images}
                      rating={item.imdb_rating}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <Pagination
            theme={customThemeMobile.pagination}
            className="mx-auto"
            currentPage={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}

      {!isMobile && (
        <>
          <div className="flex justify-between items-center">
            <h1 className="font-serif font-bold text-2xl text-white">
              Our Movies
            </h1>
            <Pagination
              theme={customThemeDesktop.pagination}
              currentPage={page}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
              previousLabel=""
              nextLabel=""
            />
          </div>

          <div className="grid grid-cols-4 gap-4 md:gap-2 lg:gap-4 md:pt-9 lg:pt-11">
            {movies.length !== 0 &&
              movies.map((item) => (
                <Link to={`/movies/${item.id}`} key={item.id}>
                  <MovieCard
                    movies={movies}
                    image={item.images}
                    rating={item.imdb_rating}
                  />
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
