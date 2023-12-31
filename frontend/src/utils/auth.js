// src/utils/auth.js

export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

// Add more auth related utility functions as needed.
