import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CastSlider from "../components/CastSlider";
import DescriptionMovie from "../components/DescriptionMovie";
import MovieDetails from "../components/MovieDetails";
import PromoSection from "../components/PromoSection";
import Reviews from "../components/Reviews";

import useBreakpoints from "../constants/breakpoints";

export default function Movie() {
  const { isMobile } = useBreakpoints();
  const { movie } = useLoaderData();

  return (
    <div className="container mx-auto min-h-screen flex flex-col px-4 pt-10 bg-black_08">
      <Banner
        title={movie.title}
        poster={movie.images}
        description={movie.plot}
      />
      {isMobile && (
        <div className="flex flex-col pt-14 pb-8 gap-5">
          <DescriptionMovie description={movie.plot} />
          <MovieDetails
            released={movie.year}
            language={movie.language}
            imdbRating={movie.imdb_rating}
            metaScore={movie.metascore}
            genres={movie.genres}
            director={movie.director}
            country={movie.country}
            writer={movie.writer}
          />
          <CastSlider actors={movie.actors} />
          <Reviews />
        </div>
      )}

      {!isMobile && (
        <div className="grid grid-cols-12 gap-5 pt-20 pb-8">
          <div className="col-span-8 md:col-span-7 xl:col-span-8 flex flex-col gap-8">
            <DescriptionMovie description={movie.plot} />
            <CastSlider actors={movie.actors} />
            <Reviews />
          </div>
          <div className="col-span-4 md:col-span-5 xl:col-span-4">
            <MovieDetails
              released={movie.year}
              language={movie.language}
              imdbRating={movie.imdb_rating}
              metaScore={movie.metascore}
              genres={movie.genres}
              director={movie.director}
              country={movie.country}
              writer={movie.writer}
            />
          </div>
        </div>
      )}
      <PromoSection />
    </div>
  );
}
