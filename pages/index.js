import React from 'react';
import Accordion from '../components/accordion';
import Hero from '../components/hero';

import MainLayout from '../components/layout';

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <Accordion/>
    </MainLayout>
  );
};
export default Home
