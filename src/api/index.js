// const fetch = require('node-fetch'); // Only if running in a Node.js environment

const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=58ae7813f1b2419b8b0123838222406";

export const getWeatherDataForCity = async (city) => {
  try {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getWeatherDataForLocation = async (lat, lon) => {
  try {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
