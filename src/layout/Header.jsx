import classNames from "classnames";
import MyIcon from "../components/MyIcon";
import { useState } from "react";
import useBreakpoints from "../constants/breakpoints";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rotateClasses = classNames(isMenuOpen && "transform -rotate-90");
  const { isMobile, isLaptop, isTablet } = useBreakpoints();
  const logoSize = isMobile ? "35" : isLaptop || isTablet ? "50" : "60";

  return (
    <header className="container flex justify-between px-4 pt-10 pb-4 mx-auto bg-black08">
      <div className="flex items-center">
        <MyIcon icon="logo" size={logoSize} />
        <h1 className="text-white font-bold md:text-lg lg:text-2xl">
          StreamVibe
        </h1>
      </div>
      {isMobile && (
        <div
          className="border-4 border-black15 rounded-md p-3 bg-black10"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <MyIcon className={rotateClasses} icon="hamburgerMenu" />
        </div>
      )}
    </header>
  );
}
