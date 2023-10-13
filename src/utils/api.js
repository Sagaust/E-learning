// src/utils/api.js

import axios from 'axios';

const API_URL = 'https://www.africanphilosophers.online/api/';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API call methods as required (POST, PUT, DELETE, etc.)
