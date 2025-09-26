import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
