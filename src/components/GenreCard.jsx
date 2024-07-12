import MyIcon from "./MyIcon";

export default function GenreCard() {
  return (
    <div className="p-5 rounded-xl bg-black_10 flex flex-col gap-2 min-w-60 border border-black_15">
      <img src="src/assets/genre-action.png" alt="genre-action" />
      <div className="flex justify-between items-center">
        <p className="font-serif font-semibold text-sm text-white">Action</p>
        <MyIcon iconName="arrow-right" size="20" />
      </div>
    </div>
  );
}
