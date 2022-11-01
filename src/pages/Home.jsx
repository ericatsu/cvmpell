import React from 'react';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
// import About from '../components/About';
// import Skills from '../components/Skills';
import Services from '../components/Services';
//import Works from '../components/Works';
import Footer from '../components/Footer';
//import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Data';
import Message from '../components/Message';
import Clothing from '../components/Clothing';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Hero />
        {/* <About {...homeObjOne}/>
        <Skills {...homeObjTwo} /> */}
        <Message />
        <Clothing />
        <Services />
        {/* <Works {...homeObjThree}/> */}
        <Footer />
        </>
    )
}

export default Home
