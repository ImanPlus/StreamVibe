import MyIcon from "../components/MyIcon";

export default function Movies() {
  return (
    <div className="container mx-auto flex flex-col px-4 pt-10 bg-black08">
      <div className="relative flex flex-col">
        <img src="src/assets/avengersEndGame.png" alt="avengersEndGame" />
        <div className="font-serif flex flex-col justify-center items-center gap-5 p-6">
          <h1 className=" text-2xl font-bold text-white">Avengers: Endgame</h1>
          <p className="font-medium hidden md:block text-gray60 text-center">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <button
              type="button"
              className="w-full md:w-auto lg:w-auto px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="flex justify-center items-center gap-1">
                <MyIcon iconName="play" size="24" />
                <p className="font-semibold text-sm">Play Now</p>
              </div>
            </button>
            <div className="flex gap-2">
              <MyIcon size="48" iconName="add" />
              <MyIcon size="48" iconName="like" />
              <MyIcon size="48" iconName="volume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
