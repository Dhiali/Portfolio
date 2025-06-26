import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Phone3D.css";

const PhoneCallScreen = () => {
  const navigate = useNavigate();
  const [slid, setSlid] = useState(false);

  const handleSlide = () => {
    setSlid(true);
    setTimeout(() => navigate("/home"), 500); // simulate call answered
  };

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <div className="top-text">ANNOUNC</div>
        <div className="logo">
          <span>S</span>
          <span className="slash"> / </span>
          <span>A</span>
        </div>
        <div className="actions">
          <span>Message</span>
          <span>Voicemail</span>
        </div>
        <div
          className={`slide-to-answer ${slid ? "slid" : ""}`}
          onClick={handleSlide}
        >
          <div className="call-icon">📞</div>
          <p>slide to answer</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCallScreen;
