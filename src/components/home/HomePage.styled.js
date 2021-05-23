import styled from 'styled-components';

export const HomeIntroText = styled.div`
  position: absolute;
  top: 50%;
  padding-left: 100px;
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  .ant-row {
    margin-bottom: 20px;
  }
`;

export const HomeIntroScrollButton = styled.div`
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
        0%   { transform:  translateY(0); }
        10%  { transform: translateY(0); }
        30%  { transform:  translateY(-10px); }
        50%  { transform:  translateY(0); }
        57%  { transform:  translateY(-5px); }
        64%  { transform:  translateY(0); }
        100% { transform:  translateY(0); }
    }
    
`;
