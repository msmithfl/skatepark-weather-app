import axios from "axios";

const getCoordinates = async (city) => {
  const API_KEY = "AIzaSyDjUvJQstl5BvANAE0HP2vD1jJ6UOfpfKQ";
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`
  );
  const { lat, lng } = response.data.results[0].geometry.location;

  return { lat, lng };
};

export default getCoordinates;
