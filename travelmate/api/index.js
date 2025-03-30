import axios from "axios";

export default async function getTripsData(bl_latitude, tr_latitude, bl_longitude, tr_longitude, type) {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_latitude ? bl_latitude : "-37.05901990116617",
          tr_latitude: tr_latitude ? tr_latitude : "-36.66060184426172",
          bl_longitude: bl_longitude ? bl_longitude : "174.4438160493033",
          tr_longitude: tr_longitude ? tr_longitude : "174.9684260722261",
          limit: '20',
          currency: 'NZD',
          lunit: 'km',
          lang: 'en_US'
        },
        headers: {
          "X-RapidAPI-Key":
            "your_rapidapi_key",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    const { data } = response;

    return data;
  } catch (error) {
    return null;
  }
}

// console.log("##index.js## ", getTripsData());

