import { Pagination } from "flowbite-react";
import GenreCard from "./GenreCard";
import customThemeMobile from "../theme/paginationMobile";
import customThemeDesktop from "../theme/paginationDesktop";
import useBreakpoints from "../constants/breakpoints";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function GenreList({ genres = [] }) {
  const { isMobile } = useBreakpoints();
  return (
    <div className="flex flex-col justify-between py-12">
      {isMobile && (
        <>
          <h1 className="font-serif font-bold text-2xl text-white">
            Our Genres
          </h1>

          <div className="overflow-auto py-5">
            <div className="flex gap-4">
              {genres.length !== 0 &&
                genres.map((genre) => (
                  <Link to={`/movies/genres/${genre.id}`} key={genre.id}>
                    <GenreCard name={genre.name} />
                  </Link>
                ))}
            </div>
          </div>

          <Pagination
            theme={customThemeMobile.pagination}
            className="mx-auto"
            currentPage={1}
            totalPages={3}
          />
        </>
      )}

      {!isMobile && (
        <>
          <div className="flex justify-between items-center">
            <h1 className="font-serif font-bold text-2xl text-white">
              Our Genres
            </h1>
            <Pagination
              theme={customThemeDesktop.pagination}
              currentPage={1}
              totalPages={3}
              showIcons
              previousLabel=""
              nextLabel=""
            />
          </div>

          <div className="flex flex-nowrap md:pt-9 lg:pt-11 gap-4 overflow-x-auto touch-action-pan-x scrollbar-none">
            {genres.length !== 0 &&
              genres.map((genre) => (
                <Link to={`/movies/genres/${genre.id}`} key={genre.id}>
                  <GenreCard name={genre.name} />
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

GenreList.propTypes = {
  genres: PropTypes.array,
};
