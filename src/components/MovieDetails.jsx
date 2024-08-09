import ProfileCard from "../components/ProfileCard";
import TitleIcon from "../components/TitleIcon";
import Badge from "../components/Badge";
import PropTypes from "prop-types";

export default function MovieDetails({
  released = "",
  language = "",
  imdbRating = "1",
  metaScore = "4",
  genres = [],
  director = "",
  country = "",
  writer = "",
}) {
  const languageList = language.split(",");
  const streamVibeRate = (parseInt(metaScore) / 10).toString();

  return (
    <div className="font-serif text-sm font-medium text-gray_60 rounded-xl border border-black_15 p-6 md:p-7 xl:p-12 flex flex-col gap-5 md:gap-6 xl:gap-8 bg-black_10">
      <div>
        <TitleIcon iconName="date" title="Released Year" />
        <p className="font-semibold text-base text-white">{released}</p>
      </div>

      <div>
        <TitleIcon iconName="lan" title="Available Languages" />
        <div className="flex flex-wrap mt-1 gap-2">
          {languageList.length !== 0 &&
            languageList.map((lan, index) => <Badge label={lan} key={index} />)}
        </div>
      </div>

      <div>
        <TitleIcon iconName="empty-star" title="Ratings" />
        <div className="flex mt-1 justify-between flex-wrap gap-4">
          <Badge label="IMDb" rate={imdbRating} />
          <Badge label="Streamvibe" rate={streamVibeRate} />
        </div>
      </div>

      <div>
        <TitleIcon iconName="squares-2x2" title="Gernes" />
        <div className="flex flex-wrap mt-1 gap-2">
          {genres.length !== 0 &&
            genres.map((genre, index) => <Badge label={genre} key={index} />)}
        </div>
      </div>

      <ProfileCard
        title="Director"
        name={director}
        country={country}
        // img="../assets/director.png"
      />

      <ProfileCard
        title="Writer"
        name={writer}
        country={country}
        // img="../assets/director.png"
      />
    </div>
  );
}

MovieDetails.propTypes = {
  released: PropTypes.string,
  language: PropTypes.string,
  imdbRating: PropTypes.string,
  metaScore: PropTypes.string,
  genres: PropTypes.array,
  director: PropTypes.string,
  country: PropTypes.string,
  writer: PropTypes.string,
};
