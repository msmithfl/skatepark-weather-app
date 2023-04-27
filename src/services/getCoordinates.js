import axios from "axios";

const getCoordinates = async (city, radius) => {
  const response = await axios.get(
    `${process.env.REACT_APP_GOOGLE_MAPS_API_URL}/geocode/json?address=${city}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );
  const { lat, lng } = response.data.results[0].geometry.location;

  const radiusInMiles = radius * 1609.34;

  const placesResponse = await axios.get(
    `${process.env.REACT_APP_GOOGLE_MAPS_API_URL}/place/nearbysearch/json?location=${lat},${lng}&radius=${radiusInMiles}&keyword=skatepark&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );

  console.log(placesResponse);

  return { lat, lng };
};

export default getCoordinates;
