// HomePage.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { gsap } from "gsap";

const ZodiacSign = ({ points, name, onHover, onClick }) => {
  const ref = useRef();

  // Animation loop for subtle movement or glow effect
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={ref}
      onPointerOver={(e) => onHover(name)}
      onClick={(e) => onClick(name)}
    >
      {points.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(points.flat())}
            count={points.length}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="white" />
      </line>
    </group>
  );
};

const ZodiacAnimation = ({ onSignHover, onSignClick }) => {
  const zodiacSigns = [
    { name: "Aries", points: [[0, 0, 0], [1, 1, 0], [2, 0.5, 0]] },
    { name: "Taurus", points: [[-1, 0, 0], [-2, 1, 0], [-3, 0.5, 0]] },
    // Add more zodiac signs and their points here
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#000"]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      {zodiacSigns.map((sign, index) => (
        <ZodiacSign
          key={index}
          points={sign.points}
          name={sign.name}
          onHover={onSignHover}
          onClick={onSignClick}
        />
      ))}
    </Canvas>
  );
};

const Banner = () => {
  const [hoveredSign, setHoveredSign] = useState("");
  const bannerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, repeat: -1, yoyo: true }
    );
  }, []);

  const handleSignHover = (name) => {
    setHoveredSign(name);
  };

  // const handleSignClick = (name) => {
  //   alert(`You clicked on ${name}!`);
  // };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1
        ref={bannerRef}
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "3rem",
          position: "absolute",
          top: "10%",
          width: "100%",
          zIndex: 2,
        }}
      >
        Luxury Combined with Character and Class
      </h1>
      <ZodiacAnimation
        onSignHover={handleSignHover}
        // onSignClick={handleSignClick}
      />
      {hoveredSign && (
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
            textAlign: "center",
            color: "white",
            fontSize: "1.5rem",
            zIndex: 2,
          }}
        >
        </div>
      )}
    </div>
  );
};

export default Banner;
