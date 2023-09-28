// src/context/CourseContext.js

import React, { createContext, useState } from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    return (
        <CourseContext.Provider value={{ courses, setCourses }}>
            {children}
        </CourseContext.Provider>
    );
}

export { CourseContext, CourseProvider };
