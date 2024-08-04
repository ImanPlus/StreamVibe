import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({ q: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    const newSearchParams = { ...searchParams, q: e.target.value };
    setSearchParams(newSearchParams);
    navigate(`/movies/?q=${newSearchParams.q}`);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search a movie..."
        value={searchParams.q}
        onChange={handleSearch}
      />
    </div>
  );
}
