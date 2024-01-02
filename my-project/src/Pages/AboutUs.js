import React from 'react'
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import bgimage from "../Assets/Images/1.1.jpg";
import BGImageComponent from '../Components/BGImageComponent';
import ABoutUsHero from '../Components/ABoutUsHero';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className="mt-24 relative">
                {/* <img
                    className="w-full h-auto object-cover"
                    src={bgimage}
                    alt="image description"
                    style={{ maxHeight: '200px' }} // Adjust the maxHeight as needed
                />
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[#F58E22] text-4xl sm:text-5xl md:text-6xl font-bold">
                    ABOUT US
                </div> */}

                <BGImageComponent text="Home &gt; About Us" heading="ABOUT US" image={bgimage}/>
                <ABoutUsHero/>
                
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
