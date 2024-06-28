import PropTypes from "prop-types";

const MyIcon = ({ icon, size, color, ...props }) => {
  const iconPath = `./src/assets/icons/${icon}.svg`;

  return (
    <img
      src={iconPath}
      alt={icon}
      width={size}
      height={size}
      style={{ fill: color }}
      {...props}
    />
  );
};

export default MyIcon;

MyIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
