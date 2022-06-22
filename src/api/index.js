import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlaceData = async (sw, ne) => {
  try {
    // request
    const { data: { data } } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '3f27f651bdmsh22b944e7767ab77p13eb38jsn7a99c6ec1d66',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data
  } catch (error) {
    console.log(error)

  }
}