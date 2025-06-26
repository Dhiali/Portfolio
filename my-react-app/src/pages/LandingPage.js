import React from 'react';
import '../style/LandingPage.css';
import Phone3D from './Phone3D';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="organic-blob" aria-hidden="true">
        <Phone3D />
      </div>
      <h1 className="heading">
        Someones
        <br />
        Calling!
      </h1>
      <div className="bottom-text below-heading">Its your next hire...</div>
    </div>
  );
}

export default LandingPage;
