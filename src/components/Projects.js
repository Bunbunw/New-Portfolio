// Project data

// const projects = [
//   {
//     name: 'Eventful',
//     date: '2023 Oct',
//     description: 'React Native App with AI to simplify event planning process. Ranked 14 of 80 in Hack the Valley 8.',
//     link: 'https://devpost.com/software/eventful-puhaj9',
//   },
//   {
//     name: 'Portfolio',
//     date: '2023 Oct',
//     description: 'Personal Portfolio Built Using React. Integrated a lot of animations.',
//     link: 'https://www.sigmund-wang.com/',
//   },
//   {
//     name: 'CyberDash',
//     date: '2022 Dec',
//     description: 'Ball rolling game created with Unity, blender, soundtrack by FL Studio. Multi-level hard game.',
//     link: 'https://www.linkedin.com/in/sigmund-wang/details/projects/',
//   },
//   {
//     name: 'SustainU',
//     date: '2023 Oct',
//     description: 'Figma app prototype of a recycling app in campus. Winner of Best Nature Hack in Hack the Valley 7.',
//     link: 'https://devpost.com/software/sustainu-app',
//   },
// ];

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import "./Projects.css";
import Eventful from '../assets/eventful_box.png';
import Portfolio from '../assets/portfolio_box.png';
import CyberDash from '../assets/cyberdash_box.png';
import SustainU from '../assets/sustainU_box.png';
import Doge from '../assets/Doge.jpg';

const images = [Eventful, Portfolio, CyberDash, SustainU];
const links = [
  "https://devpost.com/software/eventful-puhaj9",
  "https://www.sigmund-wang.com/",
  "https://www.linkedin.com/in/sigmund-wang/details/projects/",
  "https://devpost.com/software/sustainu-app"
];

function ImageBox({ image, position, rotation, onClick }) {
  const texture = useTexture(image);
  // Calculate the aspect ratio of the texture
  const aspectRatio = texture.image.width / texture.image.height;
  // Calculate box dimensions based on aspect ratio
  const width = 5;
  const height = width / aspectRatio;
  return (
    <mesh position={position} rotation={rotation} onClick={onClick}>
      <boxGeometry args={[width, height, 0.1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function Carousel() {
  const groupRef = useRef();

  // Use a frame loop to rotate the carousel
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {images.map((image, index) => {
        const angle = (index / images.length) * Math.PI * 2;
        const x = Math.sin(angle) * 5;
        const z = Math.cos(angle) * 5;

        // Calculate the rotation to face the center
        const rotation = [0, angle + Math.PI, 0];

        return (
          <ImageBox
            key={index}
            image={image}
            position={[x, 0, z]}
            rotation={rotation}
            onClick={() => window.open(links[index], "_blank")}
          />
        );
      })}
      <ImageBox
        image={Doge}
        position={[0, -5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => alert("In memorial of Doge")}
      />
    </group>
  );
}

function Project() {
  const [enableOrbitControls, setEnableOrbitControls] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 950) {
        setEnableOrbitControls(false);
      } else {
        setEnableOrbitControls(true);
      }
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h2 className="project-title">PROJECTS</h2>
      <div className="projects-carousel-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 2]} />
          {enableOrbitControls && <OrbitControls enableZoom={false} />}
          <Carousel />
        </Canvas>
      </div>
    </>
  );
}

export default Project;