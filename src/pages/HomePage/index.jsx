import React from 'react';
import HomeIntro from '@components/home/HomeIntro';
import HomeWelcome from '@components/home/HomeWelcome';
import HomeIntern from '@components/home/HomeIntern';

const HomePage = () => {
  const name = (params) => {};

  return (
    <div>
      <HomeWelcome />
      <HomeIntro />
      <HomeIntern />
    </div>
  );
};

export default HomePage;
