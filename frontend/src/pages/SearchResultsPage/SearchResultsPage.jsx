import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CourseList from '../../components/courselist/CourseList';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  // Here, you might want to fetch search results based on user query.
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="search-results-page">
      <Navbar />
      <main>
        <h2>Search Results</h2>
        <div className="results-list">
          {searchResults.map(result => (
            // Depending on the type of result (course or resource), render the appropriate component
            result.type === 'course' ? <CourseList course={result} /> : <ResourceCard resource={result} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SearchResultsPage;
