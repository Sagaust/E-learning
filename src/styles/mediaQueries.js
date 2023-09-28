// src/styles/mediaQueries.js

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

const mediaQueries = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = `(max-width: ${emSize}em)`;
    return accumulator;
}, {});

export default mediaQueries;
