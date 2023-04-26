import React, { useState } from "react";
import getCoordinates from "../services/getCoordinates";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [radius, setRadius] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { lat, lng } = await getCoordinates(city);

    setCoordinates({ lat, lng });
    console.log(radius);
    console.log(lat, lng);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 mx-2 sm:flex-row sm:justify-center"
        onSubmit={handleSubmit}
      >
        <p className="text-center italic text-gray-500">
          Search skateparks in your area.
        </p>
        <input
          className="border outline-none rounded"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          className="border outline-none rounded"
          type="number"
          placeholder="Enter radius"
          value={radius}
          onChange={(event) => setRadius(event.target.value)}
        />
        <button
          className="bg-slate-100 p-1 rounded hover:duration-100 hover:bg-slate-200"
          type="submit"
        >
          Submit
        </button>
        {/* {coordinates && (
          <div>
            <p>
              Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
            </p>
            <p>Radius : {radius}</p>
          </div>
        )} */}
      </form>
    </div>
  );
};

export default SearchForm;
