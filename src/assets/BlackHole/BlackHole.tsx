import React, { useEffect, useState } from 'react';
import './BlacHole.css';

export default function BlackHoleWithOrbit() {
  const [angle, setAngle] = useState(0);

  // Use useEffect to continuously update the position of the planet
  useEffect(() => {
    const orbitSpeed = 0.02; // Adjust to control speed
    const updateOrbit = () => {
      setAngle((prevAngle) => prevAngle + orbitSpeed);
      requestAnimationFrame(updateOrbit);
    };

    updateOrbit();
  }, []);

  // Calculate x and y coordinates based on the angle
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div className="black-hole-container">
      <div className="black-hole"></div>
      <div
        className="planet"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
    </div>
  );
};