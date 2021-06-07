import { Col, Image, Row } from 'antd';
import React from 'react';
import Avatar from '@assets/avatar.jpg';
import { NotificationOutlined } from '@ant-design/icons';
import { HomeIntroStyles } from './HomePage.styled';

const HomeIntro = () => {
  const name = (params) => {};

  return (
    <HomeIntroStyles id="intro">
      <Col span={12} offset={6}>
        <Image width={200} height={200} src={Avatar} preview={false} />
        <Row align="center" justify="center" style={{ alignItems: 'center' }}>
          <h1>Hi, I'm Linh</h1>
          <NotificationOutlined size="large" />
        </Row>
        <p>
          I'm a Computer Science senior at Earlham College with a Math minor.
        </p>
      </Col>
    </HomeIntroStyles>
  );
};

export default HomeIntro;
