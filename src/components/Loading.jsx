import React from 'react';
import gymloader from '../components/images/giphy.gif'

const GymLoader = () => {
  return (
    <div className="loading-container text-center">
      <img src={gymloader} alt="Loading..." className="loading-gif img-fluid" />
    </div>
  );
}

export default GymLoader;
