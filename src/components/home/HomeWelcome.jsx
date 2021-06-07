import {
  Button, Col, Input, Row,
} from 'antd';
import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import ScrollAnimation from 'react-animate-on-scroll';
import { DownOutlined } from '@ant-design/icons';
import { HomeWelcomeText, HomeWelcomeScrollButton } from './HomePage.styled';

const HomeWelcome = () => (
  <div>
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: '#0d47a1',
          },
        },
        fpsLimit: 80,
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
            value: ['#ffffff', 'yellow'],
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
            value: 300,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: ['polygon', 'circle'],
          },
          size: {
            random: true,
            value: 2,
            animation: {
              enable: true,
              speed: 6,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
    <HomeWelcomeText>
      <Row gutter={[16, 32]} align="center" justify="start">
        <Col>
          <h1>Hello,</h1>
        </Col>
        <Col>
          <Input defaultValue="there" size="large" autoFocus />
        </Col>
        <Col>
          <h1>!</h1>
        </Col>
      </Row>
      <Row>
        <h2>Welcome to my portfolio!</h2>
      </Row>
    </HomeWelcomeText>
    <HomeWelcomeScrollButton>
      <Button type="text" href="#intro">
        <h3 className="bounce">Scroll down</h3>
        <DownOutlined />
      </Button>
    </HomeWelcomeScrollButton>
  </div>
);

export default HomeWelcome;
