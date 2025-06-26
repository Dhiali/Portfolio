import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Phone3D.css";
import { ReactComponent as PhoneSVG } from '../assets/answer phone.svg';

const PhoneCallScreen = () => {
  const navigate = useNavigate();
  const [vibrating, setVibrating] = useState(true);

  useEffect(() => {
    let vibrateTimeout, pauseTimeout;
    function loop() {
      setVibrating(true);
      vibrateTimeout = setTimeout(() => {
        setVibrating(false);
        pauseTimeout = setTimeout(loop, 2000);
      }, 2000);
    }
    loop();
    return () => {
      clearTimeout(vibrateTimeout);
      clearTimeout(pauseTimeout);
    };
  }, []);

  const handleAccept = () => {
    navigate('/home');
  };

  return (
    <div className="phone-svg-wrapper">
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <PhoneSVG
          className={`phone-svg${vibrating ? ' vibrating' : ''}`}
          onClick={handleAccept}
          style={{ cursor: 'pointer' }}
        />
        <button
          className="accept-btn-overlay"
          aria-label="Accept Call"
          onClick={handleAccept}
          style={{ pointerEvents: 'auto' }}
        />
      </div>
    </div>
  );
};

export default PhoneCallScreen;
