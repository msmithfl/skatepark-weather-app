import React, { useState } from "react";
import getCoordinates from "../services/getCoordinates";

const CityForm = () => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <input
        type="number"
        placeholder="Enter radius"
        value={radius}
        onChange={(event) => setRadius(event.target.value)}
      />
      <button type="submit">Submit</button>
      {coordinates && (
        <div>
          <p>
            Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
          </p>
          <p>Radius : {radius}</p>
        </div>
      )}
    </form>
  );
};

export default CityForm;
