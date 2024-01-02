import React from 'react'
import Header from '../Components/Common/Header';
import BGImageComponent from '../Components/BGImageComponent';
import Footer from '../Components/Common/Footer';
import bgimage from "../Assets/Images/1.jpg";

const Services = () => {
    return (
        <div>
            <Header />
            <div className='mt-24'>
                <BGImageComponent text="Home &gt; Services" heading="SERVICES" image={bgimage}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Services
