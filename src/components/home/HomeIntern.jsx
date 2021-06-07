import {
  Card, Col, Image, Row,
} from 'antd';
import React from 'react';
import EHLogo from '@assets/earlham-logo.png';
import SAVISLogo from '@assets/savis-logo.png';
import InfoReLogo from '@assets/infore-logo.png';
import CVSLogo from '@assets/cvs-logo.png';
import MisaLogo from '@assets/misa-logo.jpg';
import { HomeInternStyles } from './HomePage.styled';

const HomeIntern = () => {
  const comps = [
    {
      name: 'Earlham College',
      logo: EHLogo,
    },
    {
      name: 'SAVIS Technology Group',
      logo: SAVISLogo,
    },
    {
      name: 'InfoRe Technology',
      logo: InfoReLogo,
    },
    {
      name: 'Computer Vision Vietnam',
      logo: CVSLogo,
    },
    {
      name: 'MISA Joint Stock Company',
      logo: MisaLogo,
    },
  ];

  return (
    <HomeInternStyles>
      <h1>Where I've interned/ worked at</h1>
      <Row align="middle" justify="space-around">
        {comps.map((comp) => (
          <Col span={Math.floor(24 / comps.length)} style={{ justifyContent: 'center' }}>
            <Image src={comp.logo} height={150} width={150} preview={false} />
            <Card bordered={false} style={{ width: 195, marginTop: 15, opacity: 0 }}>
              <h3>{comp.name}</h3>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        ))}
      </Row>
    </HomeInternStyles>
  );
};

export default HomeIntern;
