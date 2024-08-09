import MyIcon from "../components/MyIcon";
import useBreakpoints from "../constants/breakpoints";
import defaultBanner from "../assets/avengersEndGame.png";
import PropTypes from "prop-types";

export default function Banner({
  poster = defaultBanner,
  title = "Avengers : Endgame",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, deserunt!",
}) {
  const { isDesktop } = useBreakpoints();
  const iconSize = isDesktop ? "56" : "44";
  const playIcon = isDesktop ? "28" : "24";

  return (
    <div className="relative rounded-xl flex flex-col">
      <img
        src={poster}
        alt={title}
        className="rounded-xl object-cover w-full h-114 lg:h-auto"
      />
      <div className="absolute inset-0 font-serif flex flex-col justify-end items-center gap-5 p-6 bg-gradient-to-t from-gray-950 to-transparent rounded-xl">
        <h1 className=" text-2xl lg:text-3xl md:text-3xl xl:text-4xl font-bold text-white">
          {title}
        </h1>
        <p className="font-medium hidden md:block text-gray_60 text-center text-base xl:text-lg">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
          <button
            type="button"
            className="w-full md:w-auto lg:w-auto px-6 py-3.5 text-base font-medium text-white bg-red_45 hover:bg-red_50 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red_45 dark:hover:bg-red_50 dark:focus:ring-red-800"
          >
            <div className="flex justify-center items-center gap-1">
              <MyIcon iconName="play" size={playIcon} />
              <p className="font-semibold text-sm xl:text-lg">Play Now</p>
            </div>
          </button>
          <div className="flex gap-2">
            <MyIcon
              className="hover:fill-red-600 cursor-pointer"
              size={iconSize}
              iconName="add"
            />
            <MyIcon
              className="hover:fill-red-600 cursor-pointer"
              size={iconSize}
              iconName="like"
            />
            <MyIcon
              className="hover:fill-red-600 cursor-pointer"
              size={iconSize}
              iconName="volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  poster: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
};
