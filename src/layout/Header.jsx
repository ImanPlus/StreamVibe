import classNames from "classnames";
import MyIcon from "../components/MyIcon";
import { useState } from "react";
import useBreakpoints from "../constants/breakpoints";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rotateClasses = classNames({ "transform-rotate-90": isMenuOpen });
  const { isMobile, isLaptop, isTablet } = useBreakpoints();
  const logoSize = isMobile ? "35" : isLaptop || isTablet ? "50" : "60";
  const searchNotifSize = isTablet || isLaptop ? "24" : "34";

  return (
    <header className="w-full bg-black08">
      <div className="container flex justify-between px-4 pt-10 pb-4 mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <MyIcon iconName="logo" size={logoSize} />
            <h1 className="text-white font-bold md:text-lg lg:text-2xl">
              StreamVibe
            </h1>
          </div>
        </Link>
        {isMobile && (
          <div
            className="border-4 border-black15 rounded-md p-3 bg-black10 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {/* <MyIcon iconName="hamburgerMenu" className={rotateClasses} /> */}
            <img
              src="src/assets/icons/hamburgerMenu.svg"
              alt="hamburgerMenu"
              className={rotateClasses}
            />
          </div>
        )}
        {!isMobile && (
          <div className="flex justify-between items-center gap-2">
            <MyIcon
              iconName="search"
              size={searchNotifSize}
              className="cursor-pointer"
            />
            <MyIcon
              iconName="notification"
              size={searchNotifSize}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </header>
  );
}
