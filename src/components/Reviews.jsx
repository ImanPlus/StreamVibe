import Rating from "./Rating";
import MyIcon from "./MyIcon";

export default function Reviews() {
  return (
    <div className="font-serif text-sm font-medium rounded-xl border border-black_15 p-6 md:p-10 xl:p-12 bg-black_10 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-gray_60 md:text-base xl:text-lg">Reviews</h2>
        <button className="flex items-center gap-1 rounded-md border border-black_15 bg-black_08 p-2 text-white">
          <MyIcon iconName="plus" size="24" />
          <p className="xl:text-lg">Add Your Review</p>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-black_06 flex flex-col flex-wrap gap-4 p-6 rounded-xl border border-black_15">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-white text-base">Aniket Roy</h2>
              <p className="text-gray_60">From India</p>
            </div>
            <div className="border border-black_15 rounded-3xl flex items-center h-fit p-1">
              <Rating rating="4.5" className="text-gray_60" />
            </div>
          </div>
          <p className="text-gray_60 font-normal">
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </p>
        </div>
        <div className="bg-black_06 flex flex-col flex-wrap gap-4 p-6 rounded-xl border border-black_15">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-white text-base">Swaraj</h2>
              <p className="text-gray_60">From India</p>
            </div>
            <div className="border border-black_15 rounded-3xl flex items-center h-fit p-1">
              <Rating rating="5" className="text-gray_60" />
            </div>
          </div>
          <p className="text-gray_60 font-normal">
            A restless king promises his lands to the local tribals in exchange
            of a stone (Panjurli, a deity of Keradi Village) wherein he finds
            solace and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}
