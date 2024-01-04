import React from 'react'
import Header from '../Components/Common/Header';
import CarouselComponent from '../Components/Carousel';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Common/Footer';
import Whyus from '../Components/Whyus';
import AboutUsComponent from '../Components/AboutUsComponent';
import HomeHeading from '../Components/HomeHeading';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-24'>
        <CarouselComponent />
        <HeroSection />
        <AboutUsComponent/>
        <Whyus/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
