// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Global Styles and Theme
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage/HomePage';
import CoursePage from './pages/CoursePage/CoursePage';
import QuizPage from './pages/QuizPage/QuizPage';
import ResourcePage from './pages/ResourcePage/ResourcePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import CourseCreationPage from './pages/CourseCreationPage/CourseCreationPage';
import AssignmentReviewPage from './pages/AssignmentReviewPage/AssignmentReviewPage';
import FacilitatorDashboard from './pages/FacilitatorDashboard/FacilitatorDashboard';
import EventPage from './pages/EventPage/EventPage';
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage';
import CourseFeedbackPage from './pages/CourseFeedbackPage/CourseFeedbackPage';
import ForumPage from './pages/ForumPage/ForumPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import BillingPage from './pages/BillingPage/BillingPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/courses" component={CoursePage} />
                    <Route path="/quizzes" component={QuizPage} />
                    <Route path="/resources" component={ResourcePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/admin-dashboard" component={AdminDashboard} />
                    <Route path="/course-creation" component={CourseCreationPage} />
                    <Route path="/assignment-review" component={AssignmentReviewPage} />
                    <Route path="/facilitator-dashboard" component={FacilitatorDashboard} />
                    <Route path="/events" component={EventPage} />
                    <Route path="/settings" component={UserSettingsPage} />
                    <Route path="/feedback" component={CourseFeedbackPage} />
                    <Route path="/forum" component={ForumPage} />
                    <Route path="/notifications" component={NotificationsPage} />
                    <Route path="/billing" component={BillingPage} />
                    <Route path="/search-results" component={SearchResultsPage} />
                    {/* Add other routes as necessary */}
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
