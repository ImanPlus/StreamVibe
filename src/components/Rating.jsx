import MyIcon from "./MyIcon";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const start = [];
  for (let i = 0; i < fullStars; i++) {
    start.push(
      <span key={i}>
        <MyIcon iconName="star" />
      </span>
    );
  }

  if (halfStar) {
    start.push(
      <span key="half">
        <MyIcon iconName="star-half" />
      </span>
    );
  }

  return (
    <div>
      {start}
      <span>{rating}</span>
    </div>
  );
};

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
