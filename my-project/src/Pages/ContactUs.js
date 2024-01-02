import React from 'react'
import Header from '../Components/Common/Header';
import ContactUsComponent from '../Components/ContactUsComponent';
import Footer from '../Components/Common/Footer';
import BGImageComponent from '../Components/BGImageComponent';
import bgimage from "../Assets/Images/3.jpg"

const ContactUs = () => {
    return (
        <div>
            <Header />
            <div className='mt-24'>
                <BGImageComponent image={bgimage} heading="CONTACT US" text="Home &gt; Contact Us" />
                <ContactUsComponent/>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs
