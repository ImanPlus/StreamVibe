import Banner from "../components/Banner";
import DescriptionMovie from "../components/DescriptionMovie";
import MovieDetails from "../components/MovieDetails";

import useBreakpoints from "../constants/breakpoints";

export default function Movie() {
  const { isMobile } = useBreakpoints();

  return (
    <div className="container mx-auto min-h-screen flex flex-col px-4 pt-10 bg-black_08">
      <Banner />
      {isMobile && (
        <div className="flex flex-col py-14 gap-5">
          <DescriptionMovie />
          <MovieDetails />
        </div>
      )}
    </div>
  );
}
