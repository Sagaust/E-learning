import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import './ResourcePage.css';

const ResourcePage = ({ match }) => {
  const resourceId = match.params.id;  // Assuming you're using react-router and passing resource ID in the URL

  return (
    <div className="resource-page">
      <Navbar />
      <main>
        <ResourceCard resourceId={resourceId} />
      </main>
      <Footer />
    </div>
  );
}

export default ResourcePage;
