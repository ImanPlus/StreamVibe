import { Pagination } from "flowbite-react";
import GenreCard from "./GenreCard";
import customTheme from "../theme/paginationMobile";
import useBreakpoints from "../constants/breakpoints";

export default function GenreList() {
  const { isMobile } = useBreakpoints();
  return (
    <div className="flex flex-col justify-between py-12">
      {isMobile && (
        <>
          <h1 className="font-serif font-bold text-2xl text-white">
            Our Genres
          </h1>

          <div className="overflow-x-hidden py-5">
            <div className="flex gap-4">
              <GenreCard />
              <GenreCard />
            </div>
          </div>

          <Pagination
            theme={customTheme.pagination}
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
              theme={customTheme.pagination}
              currentPage={1}
              totalPages={3}
            />
          </div>

          {/* <div className="overflow-x-hidden py-5"> */}
          <div className="grid grid-cols-5 gap-4 md:pt-9 lg:pt-11">
            <GenreCard />
            <GenreCard />
            <GenreCard />
            <GenreCard />
            <GenreCard />
          </div>
          {/* </div> */}
        </>
      )}
    </div>
  );
}
