import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '3f27f651bdmsh22b944e7767ab77p13eb38jsn7a99c6ec1d66',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlaceData = async () => {
  try {
    // request
    const { data: { data } } = await axios.get(url, options);
    
    return data
  } catch (error) {
    console.log(error)

  }
}