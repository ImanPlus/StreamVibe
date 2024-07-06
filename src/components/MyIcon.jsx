import PropTypes from "prop-types";
import React from "react";

const MyIcon = ({ iconName, size, ...props }) => {
  if (!iconName) {
    console.log("Error loading icon, iconName is empty...");
    return;
  }

  const IconComponent = React.lazy(() =>
    import(`../assets/icons/${iconName}.svg?react`)
  );

  return (
    <React.Suspense fallback={<div className="text-red-500">Loading...</div>}>
      <IconComponent width={size} height={size} {...props} />
    </React.Suspense>
  );
};

export default MyIcon;

MyIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.string,
};

// **Sample code to use**
// --------------------------
// import MyIcon from "../components/MyIcon";

// <MyIcon
//           iconName="facebook"
//           fill="red"
//           className="hover:fill-blue-800"
//           width="70"
//           height="70"
//         />
