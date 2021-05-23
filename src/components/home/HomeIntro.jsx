import React, { useState } from 'react';
import Particles from 'react-tsparticles';

const HomeIntro = () => {
  const [state, setState] = useState();

  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 0.1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 200,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ['polygon', 'circle'],
            },
            size: {
              random: true,
              value: 3,
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default HomeIntro;
