import React from "react"; 
import { useState } from "react";

const TrafficLight = () => {
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeLight = () => {
    setCurrentIndex(i => (i + 1) % lights.length);
  };

  return (
    <div className="traffic-light">
      {lights.map((lightColor, i) => (
        <div key={lightColor} onClick={() => setCurrentIndex(i)} className={'light ' + (i === currentIndex ? lightColor : '')}
        />
      ))}
        <button type="button" onClick={changeLight}>
          Change Color
        </button>
      </div>
  );
};

export default TrafficLight;