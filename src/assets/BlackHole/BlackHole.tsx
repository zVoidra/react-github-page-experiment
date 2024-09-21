import { useEffect, useState } from 'react';
import './BlacHole.css';

export default function BlackHoleWithOrbit() {
  const [angle, setAngle] = useState(0);

  // Use useEffect to continuously update the position of the planet
  useEffect(() => {
    const orbitSpeed = 0.02; // Adjust to control speed
    let animationFrameId : number;

    const updateOrbit = () => {
      setAngle((prevAngle) => (prevAngle + orbitSpeed) % (2 * Math.PI));
      animationFrameId = requestAnimationFrame(updateOrbit);
    };

    updateOrbit();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Calculate x and y coordinates based on the angle
  const radiusX = 300;
  const radiusY = 150;
  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;

  return (
    <>
      <div className="space">
        <div className="black-hole"/>
        <div
          className="planet"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
          />
      </div>
    </>
  );
};