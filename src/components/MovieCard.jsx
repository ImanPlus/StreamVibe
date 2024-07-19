import useBreakpoints from "../constants/breakpoints";
import MyIcon from "./MyIcon";

export default function MovieCard() {
  const { isMobile, isLaptop, isDesktop } = useBreakpoints();
  let sizeClock = "1";
  let sizeStar = "1";

  switch (true) {
    case isLaptop || isMobile:
      sizeClock = "20";
      break;
    case isDesktop:
      sizeClock = "24";
      break;
    default:
      sizeClock = "11";
  }

  switch (true) {
    case isMobile || isLaptop:
      sizeStar = "14";
      break;
    case isDesktop:
      sizeStar = "18";
      break;
    default:
      sizeStar = "10";
      break;
  }

  return (
    <div className="p-3 rounded-xl bg-black_10 flex flex-col gap-2 min-w-60 md:min-w-0 border border-black_15">
      <img src="src/assets/movie-poster.png" alt="movie-poster" />
      <div className="flex justify-between items-center w-full max-h-full gap-1">
        <div className="flex items-center justify-between rounded-full bg-black_08 p-2 md:p-0 lg:p-2 border border-black_15 h-full">
          <MyIcon
            iconName="clock"
            size={sizeClock}
            className="mr-1 md:mr-0 lg:mr-1"
          />
          <p className="font-serif font-medium text-xs lg:text-base md:text-[8px] text-gray_60">
            1h 57min
          </p>
        </div>

        <div className="flex justify-between items-center rounded-full bg-black_08 p-2 md:p-0 lg:p-2 border border-black_15 h-full">
          <div className="flex text-red-500">
            <MyIcon iconName="star" size={sizeStar} />
            <MyIcon iconName="star" size={sizeStar} />
            <MyIcon iconName="star" size={sizeStar} />
            <MyIcon iconName="star" size={sizeStar} />
            <MyIcon iconName="star-half" size={sizeStar} />
          </div>
          <p className="font-serif font-medium text-xs md:text-x lg:text-xs xl:text-sm text-gray_60 ml-1">
            20K
          </p>
        </div>
      </div>
    </div>
  );
}
