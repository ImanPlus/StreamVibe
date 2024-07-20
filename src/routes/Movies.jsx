import Banner from "../components/Banner";
import GenreList from "../components/GenreList";
import MovieList from "../components/MovieList";
import PromoSection from "../components/PromoSection";
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
          <PromoSection />
        </>
      )}

      {!isMobile && (
        <>
          <div className="container border border-black_15 my-28 rounded-xl relative min-h-80">
            <button className="absolute translate-x-[50%] translate-y-[-50%] md:translate-x-[27%] lg:translate-x-[37%] bg-red_45 rounded-md p-2 font-serif font-semibold text-base lg:text-xl text-white w-24 h-10 lg:w-28 lg:h-12">
              Movies
            </button>
            <div className="p-10 pb-4 md:pt-5 md:px-6 lg:px-10 ">
              <GenreList />
              <MovieList />
            </div>
          </div>
          <PromoSection />
        </>
      )}
    </div>
  );
}
