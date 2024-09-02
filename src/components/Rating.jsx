import useBreakpoints from "../constants/breakpoints";
import MyIcon from "./MyIcon";
import PropTypes from "prop-types";

const Rating = ({ rating, showRate }) => {
  const { isMobile, isLaptop, isDesktop } = useBreakpoints();

  const calcRate = (number) => {
    const halfNumber = parseFloat(number) / 2;

    return halfNumber % 1 === 0
      ? Math.round(halfNumber)
      : parseFloat(halfNumber.toFixed(1));
  };

  const ratingNumber = calcRate(rating); // The input score is converted to a number
  const fullStars = Math.floor(ratingNumber); // Number of full stars
  const halfStar = ratingNumber % 1 !== 0; // Checking the existence of a half star
  const totalStars = 5;

  let sizeStar = "1";
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

  const star = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      star.push(
        <span key={i}>
          <MyIcon iconName="star" size={sizeStar} fill="red" />
        </span>
      );
    } else if (i === fullStars && halfStar) {
      star.push(
        <span key="half">
          <MyIcon iconName="star-half" size={sizeStar} />
        </span>
      );
    } else {
      star.push(
        <span key={i}>
          <MyIcon iconName="star" size={sizeStar} fill="gray" />
        </span>
      );
    }
  }

  return (
    <div className="flex items-center md:mt-1 lg:mt-0">
      {star}
      <span className="pl-1">{showRate && ratingNumber}</span>
    </div>
  );
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.string,
  showRate: PropTypes.bool,
};
