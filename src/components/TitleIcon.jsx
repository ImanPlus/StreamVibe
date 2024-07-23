import PropTypes from "prop-types";
import MyIcon from "./MyIcon";

const TitleIcon = ({ iconName, title }) => {
  return (
    <div className="inline-flex">
      <MyIcon iconName={iconName} size="20" />
      <p className=" ml-1">{title}</p>
    </div>
  );
};

export default TitleIcon;

TitleIcon.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string.isRequired,
};
