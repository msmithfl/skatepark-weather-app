import axios from "axios";

const getCoordinates = async (city, radius) => {
  const response = await axios.get(
    `${process.env.REACT_APP_GOOGLE_MAPS_API_URL}/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );
  const { lat, lng } = response.data.results[0].geometry.location;

  return { lat, lng, response };
};

export default getCoordinates;
