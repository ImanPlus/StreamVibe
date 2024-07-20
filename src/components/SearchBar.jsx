import MyIcon from "./MyIcon";

export default function SearchBar() {
  return (
    <div className="flex">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search a movie..."
      />
      <button className="text-white border border-gray-500 bg-red_45 hover:bg-red-400 p-3 rounded-2xl ml-2">
        <MyIcon iconName="search" size="20" />
      </button>
    </div>
  );
}
