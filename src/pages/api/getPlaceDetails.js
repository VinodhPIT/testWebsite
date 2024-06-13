// pages/api/getPlaceDetails.js

const axios = require("axios");

const getPlaceDetails = async (location) => {
  let latitude = "";
  let longitude = "";

  const apiKey = process.env.googlePlacesApiKey;
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    location
  )}&inputtype=textquery&key=${apiKey}`;

  try {
    if (location === "") {
      return {
        latitude: "",
        longitude: "",
      };
    } else {
      const response = await axios.get(searchUrl);

      const candidates = response.data.candidates;

      if (candidates && candidates.length > 0) {
        const placeId = candidates[0].place_id;
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

        try {
          const detailsResponse = await axios.get(detailsUrl);
          const result = detailsResponse.data.result;
          const geometry = result.geometry;

          if (geometry && geometry.location) {
            latitude = geometry.location.lat;
            longitude = geometry.location.lng;

            return {
              latitude,
              longitude,
            };
          } else {
            return null;
          }
        } catch (detailsError) {
          //console.log("detailsError:", detailsError);
          return null;
        }
      } else {
        return null;
      }
    }
  } catch (error) {
    //console.log("Catch Error:", error);
    return null;
  }
};

export default async function handler(req, res) {
  const { location } = req.query;

  const placeDetails = await getPlaceDetails(location);

  res.status(200).json(placeDetails);
}
