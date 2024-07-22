import PropTypes from "prop-types";

const Badge = ({ label, className }) => {
  return (
    <div
      className={`rounded-xl border border-black_15 bg-black_08 py-2 px-3 text-white ${className}`}
    >
      {label}
    </div>
  );
};

export default Badge;

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// How to use
// The class name is for adding more classes

{
  /* <Badge label="Important" className="bg-blue-500 text-white" /> */
}
