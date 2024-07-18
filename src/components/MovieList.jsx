import { Pagination } from "flowbite-react";
import MovieCard from "./MovieCard";
import customTheme from "../theme/paginationMobile";
import useBreakpoints from "../constants/breakpoints";

export default function MovieList() {
  const { isMobile } = useBreakpoints();
  return (
    <div className="flex flex-col justify-between py-12">
      <h1 className="font-serif font-bold text-2xl text-white">Our Movies</h1>

      <div className="overflow-x-hidden py-5">
        <div className="flex gap-4">
          <MovieCard />
          <MovieCard />
        </div>
      </div>

      <Pagination
        theme={customTheme.pagination}
        className="mx-auto"
        currentPage={1}
        totalPages={3}
      />
    </div>
  );
}
