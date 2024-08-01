import useBreakpoints from "../constants/breakpoints";
import MyIcon from "./MyIcon";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const { isMobile, isLaptop, isDesktop } = useBreakpoints();

  const ratingNumber = parseFloat(rating);
  const fullStars = Math.floor(ratingNumber);
  const halfStar = ratingNumber % 1 !== 0;

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

  const start = [];
  for (let i = 0; i < fullStars; i++) {
    start.push(
      <span key={i}>
        <MyIcon iconName="star" size={sizeStar} />
      </span>
    );
  }

  if (halfStar) {
    start.push(
      <span key="half">
        <MyIcon iconName="star-half" size={sizeStar} />
      </span>
    );
  }

  return <div className="flex items-center md:gap-1 mt-1">{start}</div>;
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.string,
};
