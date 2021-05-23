import { Col, Image, Row } from 'antd';
import React from 'react';
import Avatar from '@assets/avatar.jpg';
import { HomeIntroStyles } from './HomePage.styled';

const HomeIntro = () => {
  const name = (params) => {

  };

  return (
    <HomeIntroStyles id="intro">
      <Row>
        <Col span={12} offset={6}>
          <Image
            width={200}
            height={200}
            src={Avatar}
            preview={false}
          />
          <h1>Hi, I'm Linh</h1>
          <p>I'm a Computer Science senior at Earlham College with a Math minor.</p>
        </Col>
      </Row>
    </HomeIntroStyles>
  );
};

export default HomeIntro;
