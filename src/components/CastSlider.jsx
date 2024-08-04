import PropTypes from "prop-types";
import defaultPicture from "../assets/director.png";
import MyIcon from "./MyIcon";
import { useState } from "react";
import useBreakpoints from "../constants/breakpoints";
import classNames from "classnames";

export default function CastSlider({ actors }) {
  const { isMobile, isTablet } = useBreakpoints();
  const actorList = actors.split(", ");
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = isMobile ? 4 : 8;
  const sizeIcon = isTablet ? "15" : "30";

  const currentPageItems = actorList.slice(
    activeIndex,
    Math.min(activeIndex + itemsPerPage, actorList.length)
  );
  const isLastPage = currentPageItems.length < itemsPerPage;

  const listClasses = classNames("flex  items-center gap-2", {
    "justify-between": !isLastPage,
    "justify-start": isLastPage,
  });

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? actorList.length - itemsPerPage : newIndex;
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + itemsPerPage >= actorList.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="font-serif text-sm font-medium rounded-xl border border-black_15 p-6 md:p-10 xl:p-12 bg-black_10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-gray_60 md:text-base xl:text-lg">Cast</h2>
          <div className="flex justify-end gap-2">
            <button
              onClick={handlePrevClick}
              className="border border-black_15 bg-black_08 rounded-full p-2"
            >
              <MyIcon iconName="arrow-left" size={sizeIcon} />
            </button>
            <button
              onClick={handleNextClick}
              className="border border-black_15 bg-black_08 rounded-full p-2"
            >
              <MyIcon iconName="arrow-right" size={sizeIcon} />
            </button>
          </div>
        </div>
        <div className={listClasses}>
          {actorList
            .slice(
              activeIndex,
              Math.min(activeIndex + itemsPerPage, actorList.length) // Slice items < Array.length
            )
            .map((index) => (
              <div key={index} className="w-16 md:w-10 xl:min-w-20 h-auto">
                <img
                  src={defaultPicture}
                  alt="cast"
                  className="w-full h-full rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

CastSlider.propTypes = {
  actors: PropTypes.string.isRequired,
};
