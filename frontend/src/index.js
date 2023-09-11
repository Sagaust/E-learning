// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

// Main App Component
import App from './App';

// Context Providers
import {UserProvider} from './context/UserContext';
import {CourseProvider} from './context/CourseContext';
import CombinedProvider from './context/CombinedProvider';
// ... import other context providers as needed

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <CourseProvider>
		      <CombinedProvider>
                {/* ... wrap other context providers as needed */}
                <App />
		</CombinedProvider>
            </CourseProvider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
