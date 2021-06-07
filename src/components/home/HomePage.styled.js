import { Row } from 'antd';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

// Home Welcome
export const HomeWelcomeText = styled.div`
  position: absolute;
  top: 50%;
  width: fit-content;
  left: 0;
  right: 0;
  margin: auto;
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
    text-align: center;
  }
  .ant-row {
    margin: auto;
    margin-bottom: 24px;
    width: fit-content;
  }

  .ant-row:first-child {
    animation: 500ms ${keyframes`${fadeInUp}`};
  }
  .ant-row:nth-child(2) {
    animation: 500ms ${keyframes`${fadeInUp}`} 400ms;
  }
`;

export const HomeWelcomeScrollButton = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  margin: auto;
  h3 {
    animation-name: bounce-5;
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-delay: 2s;
    animation-iteration-count: infinite;
  }
  @keyframes bounce-5 {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0);
    }
    57% {
      transform: translateY(-5px);
    }
    64% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// Home Intro
export const HomeIntroStyles = styled(Row)`
  margin-top: 100px;
  background: #fff;
  padding: 70px;
  img {
    object-fit: cover;
    border-radius: 50%;
  }
  h1 {
    margin: 16px;
  }
`;

export const HomeInternStyles = styled.div`
  img {
    background: white;
    border-radius: 50%;
    padding: 10px;
    object-fit: contain;
    transition: all 300ms ease-in-out;
  }

  img:hover {
    transform: scale(1.3);
    transition: all 0.2s ease-in-out;
    border-radius: 0;
  }

  .ant-card {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    margin: auto;
    top: -10px;
  }

  .ant-image:hover + .ant-card {
    opacity: 1 !important;
    transition: all 300ms ease-in-out;
    top: 0;
  }
`;
