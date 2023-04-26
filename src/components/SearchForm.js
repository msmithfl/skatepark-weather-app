import React, { useState } from "react";
import getCoordinates from "../services/getCoordinates";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [radius, setRadius] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { lat, lng, response } = await getCoordinates(city, radius);

    setCoordinates({ lat, lng });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 mx-2 sm:items-center sm:flex-row sm:justify-center"
        onSubmit={handleSubmit}
      >
        <p className="text-center italic text-gray-300">
          Search skateparks in your area.
        </p>
        <input
          className="border outline-none rounded text-black"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          className="border outline-none rounded text-black"
          type="text"
          placeholder="Enter radius"
          value={radius}
          onChange={(event) => setRadius(event.target.value)}
        />
        <button
          className="bg-slate-100 p-1 rounded hover:duration-100 hover:bg-slate-200 text-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
