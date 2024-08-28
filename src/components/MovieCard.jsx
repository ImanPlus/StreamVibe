import useBreakpoints from "../constants/breakpoints";
import MyIcon from "./MyIcon";
import defaultPicture from "../assets/movie-poster.png";
import PropTypes from "prop-types";
import Rating from "./Rating";

export default function MovieCard({ image = { defaultPicture } }) {
  const { isMobile, isLaptop, isDesktop } = useBreakpoints();
  let sizeClock = "1";

  switch (true) {
    case isMobile:
      sizeClock = "20";
      break;
    case isLaptop:
      sizeClock = "15";
      break;
    case isDesktop:
      sizeClock = "24";
      break;
    default:
      sizeClock = "11";
  }

  return (
    <div className="p-3 md:p-2 lg:p-3 rounded-xl bg-black_10 flex flex-col gap-2 min-w-60 md:min-w-0 border border-black_15 h-full">
      <img
        src={image}
        alt="movie-poster"
        className="w-full h-full object-cover"
      />

      <div className="flex justify-between items-center flex-wrap w-full max-h-full gap-1">
        <div className="flex items-center justify-between rounded-full bg-black_08 p-2 md:p-0 lg:p-1 border border-black_15 h-full">
          <MyIcon
            iconName="clock"
            size={sizeClock}
            className="mr-1 md:mr-0 lg:mr-1"
          />
          <p className="font-serif font-medium text-xs lg:text-xs md:text-[8px] text-gray_60">
            1h 57min
          </p>
        </div>

        <div className="flex justify-between items-end md:items-start lg:items-end flex-nowrap rounded-full bg-black_08 p-2 md:p-0 lg:p-1 border border-black_15 h-full">
          <Rating rating="4.5" />
          <p className="font-serif font-medium text-xs md:text-x lg:text-xs xl:text-sm text-gray_60 ml-1">
            20K
          </p>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string,
};
