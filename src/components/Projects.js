// import "./Projects.css";
// import Eventful from "../assets/Eventful.jpeg";
// import Portfolio from "../assets/Portfolio.png";
// import CyberDash from "../assets/CyberDash.png";
// import SustainU from "../assets/SustainU.png";

// function Projects() {
//   return (
//     <div className="projects-main">
//       <h2 className="project-title">PROJECTS</h2>
//       <div className="project-wrapper">
//         <div className="project Eventful">
//           <a
//             href="https://devpost.com/software/eventful-puhaj9"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img className="noedge fit" src={Eventful} alt="Eventful" />
//           </a>
//           <h2 className="project-name">
//             Eventful <span className="regular">2023 Oct</span>
//           </h2>
//           <p className="project-description">
//             React Native App with AI to simplify event planning process. Ranked
//             14 of 80 in Hack the Valley 8.
//           </p>
//         </div>

//         <div className="project Portfolio">
//           <img className="noedge fit" src={Portfolio} alt="Portfolio" />
//           <h2 className="project-name">
//             Portfolio <span className="regular">2023 Oct</span>
//           </h2>
//           <p className="project-description">
//             Personal Portfolio Built Using React. Intergrated a lot of
//             animations.
//           </p>
//         </div>

        // <div className="project CyberDash">
        //   <img className="noedge fit" src={CyberDash} alt="CyberDash" />
        //   <h2 className="project-name">
        //     CyberDash <span className="regular">2022 Dec</span>
        //   </h2>
        //   <p className="project-description">
        //     Ball rolling game created with Unity, blender, soundtrack by FL
        //     Studio. Multi-level hard game.
        //   </p>
        // </div>

//         <div className="project SustainU">
//           <a
//             href="https://devpost.com/software/sustainu-app"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img className="noedge fit" src={SustainU} alt="SustainU" />
//           </a>
//           <h2 className="project-name">
//             SustainU <span className="regular">2023 Oct</span>
//           </h2>
//           <p className="project-description">
//             Figma app prototype of a recycling app in campus. Winner of Best
//             Nature Hack in Hack the Valley 7.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;

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

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import "./Projects.css";
import Eventful from '../assets/Eventful.jpeg';
import Portfolio from '../assets/Portfolio.png';
import CyberDash from '../assets/CyberDash.png';
import SustainU from '../assets/SustainU.png';
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
  return (
    <mesh position={position} rotation={rotation} onClick={onClick}>
      <boxGeometry args={[5, 5, 0.1]} />
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
  return (
    <>
      <h2 className="project-title">PROJECTS</h2>
      <div className="projects-carousel-container">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 2]} />
          <OrbitControls enableZoom={false} />
          <Carousel />
        </Canvas>
      </div>
    </>
  );
}

export default Project;