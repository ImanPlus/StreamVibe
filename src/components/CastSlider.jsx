import PropTypes from "prop-types";
import defaultPicture from "../assets/director.png";
import MyIcon from "./MyIcon";
import { useState } from "react";

export default function CastSlider({ actors }) {
  const actorList = actors.split(", ");
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 4;

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
    <div className="font-serif text-sm font-medium rounded-xl border border-black_15 p-6 bg-black_10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-gray_60">Cast</h2>
          <div className="flex justify-end gap-2">
            <button
              onClick={handlePrevClick}
              className="border border-black_15 bg-black_08 rounded-full p-2"
            >
              <MyIcon iconName="arrow-left" size="30" />
            </button>
            <button
              onClick={handleNextClick}
              className="border border-black_15 bg-black_08 rounded-full p-2"
            >
              <MyIcon iconName="arrow-right" size="30" />
            </button>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3">
          {actorList
            .slice(
              activeIndex,
              Math.min(activeIndex + itemsPerPage, actorList.length) // Slice items < Array.length
            )
            .map((index) => (
              <div key={index} className="w-16 h-auto">
                <img
                  src={defaultPicture}
                  alt="cast"
                  className="w-full h-full rounded-xl"
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
