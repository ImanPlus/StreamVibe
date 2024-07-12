import MyIcon from "./MyIcon";

export default function MovieCard() {
  return (
    <div className="p-3 rounded-xl bg-black_10 flex flex-col gap-2 min-w-60 border border-black_15">
      <img src="src/assets/movie-poster.png" alt="movie-poster" />
      <div className="flex justify-between items-center w-full h-full gap-1">
        <div className="flex items-center justify-between rounded-full bg-black_08 p-1 border border-black_15 h-full">
          <MyIcon iconName="clock" size="20" className="mr-1" />
          <p className="font-serif font-medium text-xs text-gray_60">
            1h 57min
          </p>
        </div>
        <div className="flex justify-between rounded-full bg-black_08 p-2 h-full border border-black_15">
          <div className="flex text-red-500">
            <MyIcon iconName="star" size="15" />
            <MyIcon iconName="star" size="15" />
            <MyIcon iconName="star" size="15" />
            <MyIcon iconName="star" size="15" />
            <MyIcon iconName="star-half" size="15" />
          </div>
          <p className="font-serif font-medium text-xs text-gray_60 ml-1">
            20K
          </p>
        </div>
      </div>
    </div>
  );
}
