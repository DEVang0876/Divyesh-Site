import React from "react";
import "./Anime.css";

export default function Anime() {
  return (
    <div className="anime-container">
      {/* Centered Content */}
      <div className="content">
        <div className="bulb-wrapper">
          <div className="spark"></div>
          <div className="bulb"></div>
        </div>
        <h1 className="title">Divyesh Dhandhukiya</h1>
        <p className="subtitle">Electrical Engineer</p>
      </div>
    </div>
  );
}
