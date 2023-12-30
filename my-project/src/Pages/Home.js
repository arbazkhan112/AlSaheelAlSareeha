import React from 'react'
import Header from '../Components/Common/Header';
import CarouselComponent from '../Components/Carousel';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Common/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-24'>
        <CarouselComponent />
        <HeroSection />
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
