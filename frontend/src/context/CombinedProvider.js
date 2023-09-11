// src/context/CombinedProvider.js

import React from 'react';
import {  UserProvider } from './UserContext';
import { CourseProvider } from './CourseContext';
// ... import other providers

const CombinedProvider = ({ children }) => {
    return (
        <UserProvider>
            <CourseProvider>
                {/* ... other providers */}
                {children}
            </CourseProvider>
        </UserProvider>
    );
}

export default CombinedProvider;
