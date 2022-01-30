import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  );
};
export default MainLayout