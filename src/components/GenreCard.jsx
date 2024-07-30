import MyIcon from "./MyIcon";
import defaultPicture from "../assets/genre-action.png";

export default function GenreCard() {
  return (
    <div className="p-5 md:p-2 lg:p-5 rounded-xl bg-black_10 flex flex-col gap-2 md:gap-3 lg:gap-4 min-w-60 md:min-w-0 border border-black_15">
      <img src={defaultPicture} alt="genre-action" />
      <div className="flex justify-between items-center">
        <p className="font-serif font-semibold text-sm text-white">Action</p>
        <MyIcon iconName="arrow-right" size="20" />
      </div>
    </div>
  );
}
