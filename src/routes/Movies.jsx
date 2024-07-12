import Banner from "../components/Banner";
import GenreList from "../components/GenreList";
import MovieList from "../components/MovieList";
import useBreakpoints from "../constants/breakpoints";

export default function Movies() {
  const { isMobile } = useBreakpoints();

  return (
    <div className="container mx-auto min-h-screen flex flex-col px-4 pt-10 bg-black_08">
      <Banner />

      {isMobile && (
        <>
          <GenreList />
          <MovieList />
        </>
      )}
    </div>
  );
}
