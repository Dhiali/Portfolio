import React from "react";
import BandApp from '../components/band/App';

const HomePage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#000", // Set background to black
      color: "#fff" // Ensure text is visible on black
    }}>
      <BandApp />
      <h1 style={{ color: "#4caf50", fontSize: "3rem", marginBottom: "1rem" }}>Welcome Home!</h1>
      <p style={{ fontSize: "1.3rem", color: "#fff" }}>You have answered the call. This is your home page.</p>
    </div>
  );
};

export default HomePage;
