import PropTypes from "prop-types";
import Rating from "./Rating";
import classNames from "classnames";

const Badge = ({ label, className, rate }) => {
  const badgeClasses = classNames(
    "rounded-xl border border-black_15 bg-black_08 py-2 px-3 text-white",
    className,
    { "flex-grow": rate && !undefined }
  );
  return (
    <div className={badgeClasses}>
      {label}
      {rate && <Rating rating={rate} />}
    </div>
  );
};

export default Badge;

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  rate: PropTypes.string,
};

// How to use
// The class name is for adding more classes

{
  /* <Badge label="Important" className="bg-blue-500 text-white" /> */
}
