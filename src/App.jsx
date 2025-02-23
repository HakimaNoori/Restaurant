import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import WhyChoose from './components/WhyChoose/WhyChoose';
import About from './components/About/About';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
      <Banner />
    </div>
  );
};

export default App;