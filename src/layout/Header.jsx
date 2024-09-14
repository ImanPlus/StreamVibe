import MyIcon from "../components/MyIcon";
import { useState } from "react";
import useBreakpoints from "../constants/breakpoints";
import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/icons/hamburgerMenu.svg?react";
import SearchBar from "../components/SearchBar";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const rotateClasses = isMenuOpen ? "90deg" : "0deg";
  const { isMobile, isLaptop, isTablet } = useBreakpoints();
  const logoSize = isMobile ? "35" : isLaptop || isTablet ? "50" : "60";
  const searchNotifSize = isTablet || isLaptop ? "24" : "34";

  const handleHeaderIcons = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  //Change language
  const { i18n } = useTranslation("en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-black_08 fixed top-0 left-0 right-0 z-10 shadow">
      <div className="container flex justify-between items-center px-4 pt-10 pb-4 mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <MyIcon iconName="logo" size={logoSize} />
            <h1 className="text-white font-bold md:text-lg lg:text-2xl">
              StreamVibe
            </h1>
          </div>
        </Link>

        <div className="flex justify-start flex-1 flex-nowrap items-center gap-2 ml-4">
          <button onClick={() => changeLanguage("en")}>
            <MyIcon
              iconName="flag-us"
              className="w-4 md:w-5 xl:w-6 hover:scale-150"
              size={logoSize}
            />
          </button>
          <button onClick={() => changeLanguage("fa")}>
            <MyIcon
              iconName="flag-ir"
              className="w-4 md:w-5 xl:w-6 hover:scale-150"
              size={logoSize}
            />
          </button>
        </div>

        {isMobile && (
          <div className="flex flex-col items-end gap-3">
            <div
              className="border-4 border-black_15 rounded-md p-3 bg-black_10 cursor-pointer"
              onClick={handleHeaderIcons}
            >
              <HamburgerMenu
                style={{ transform: `rotate(${rotateClasses})` }}
              />
            </div>
            {isMenuOpen && <SearchBar />}
          </div>
        )}
        {!isMobile && (
          <div className="flex justify-between items-center gap-2">
            <MyIcon
              iconName="search"
              size={searchNotifSize}
              className="cursor-pointer"
              onClick={handleSearchClick}
            />
            {isSearchVisible && <SearchBar />}
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
