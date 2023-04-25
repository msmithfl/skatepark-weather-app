import React, { useState } from "react";
import axios from "axios";

function LocationInput() {
  const [coordinates, setCoordinates] = useState(null);

  // handle input change event
  const handleInputChange = (event) => {
    const location = event.target.value;
    getCoordinates(location);
    console.log(coordinates);
  };

  // call the geocoding API to get the coordinates of the location
  const getCoordinates = async (location) => {
    const apiKey = "AIzaSyDjUvJQstl5BvANAE0HP2vD1jJ6UOfpfKQ";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      location
    )}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const { lat, lng } = response.data.results[0].geometry.location;
      setCoordinates({ lat, lng });
    } catch (error) {
      console.error(error);
      console.log("nothing found");
    }
  };

  return (
    <input
      className="border outline-none rounded"
      placeholder="Enter city"
      type="text"
      onChange={handleInputChange}
    />
  );
}

export default LocationInput;
