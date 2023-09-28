// src/styles/mixins.js

import { css } from 'styled-components';

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const responsiveFont = css`
    font-size: calc(1rem + 0.5vw);
`;

// Add other mixins as required
