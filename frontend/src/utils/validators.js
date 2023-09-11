// src/utils/validators.js

export const isEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const isEmpty = (str) => {
  return (!str || str.length === 0);
};

// Add more validation functions as needed.
