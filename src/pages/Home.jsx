import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
//import Vision from '../components/Vision';
import Products from '../components/Products';
import Cloths from '../components/Cloths';

const Home = () => {
    


    return (
      <>
        <Hero />
        {/* <Vision /> */}
        <Products />
        <Feature />
        <Cloths />
      </>
    );
}

export default Home
