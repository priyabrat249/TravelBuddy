import React from 'react';

const AboutPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.4',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About TravelBuddy</h1>
      <p style={paragraphStyle}>
        Welcome to TravelBuddy, your ultimate travel companion! We are passionate about exploring the world and making your travel experience unforgettable.
      </p>
      <p style={paragraphStyle}>
        Our mission is to provide you with the best travel information, tips, and recommendations. Whether you're a seasoned traveler or planning your first trip, TravelBuddy is here to help you every step of the way.
      </p>
      <p style={paragraphStyle}>
        At TravelBuddy, you'll find:
      </p>
      <ul style={paragraphStyle}>
        <li>Travel guides to the most exciting destinations around the globe.</li>
        <li>Tips for budget-friendly travel and making the most of your adventures.</li>
        <li>Insider insights on hidden gems and local experiences.</li>
        <li>Reviews of accommodations, restaurants, and activities.</li>
      </ul>
      <p style={paragraphStyle}>
        Explore our website, get inspired, and start planning your next journey with TravelBuddy by your side.
      </p>
    </div>
  );
};

export default AboutPage;
