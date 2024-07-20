import { Button } from "flowbite-react";
import useBreakpoints from "../constants/breakpoints";
import classNames from "classnames";

export default function PromoSection() {
  const { isMobile, isTablet } = useBreakpoints();
  const pClasses = classNames({
    "text-sm  lg:text-lg text-gray_60": true,
    "text-x": isTablet,
  });

  return (
    <div className=" py-12">
      <div className="relative border border-black_15 rounded-xl">
        {isMobile ? (
          <img
            src="src/assets/PromoSection-mobile.png"
            alt="PromoSection-mobile"
            className="rounded-xl object-cover h-full w-full"
          />
        ) : (
          <img
            src="src/assets/PromoSection-laptop.png"
            alt="PromoSection-mobile"
            className="rounded-xl object-cover h-full w-full"
          />
        )}
        <div className="absolute inset-0 font-serif flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 py-12 px-8 md:px-5 lg:px-8">
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left gap-3">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-5xl text-white">
              Start your free trial today!
            </h1>
            <p className={pClasses}>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button
            className="p-1 bg-red_45 hover:bg-red-400 font-semibold md:text-sm lg:text-lg"
            size="lg"
          >
            Start a Free Trail
          </Button>
        </div>
      </div>
    </div>
  );
}
