// src/api-client.js
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchFromAPI = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
