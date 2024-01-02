import React from 'react'
import Header from '../Components/Common/Header'
import FAQComponent from '../Components/FAQComponent'
import Footer from '../Components/Common/Footer'
import BGImageComponent from '../Components/BGImageComponent'
import bgimage from "../Assets/Images/3.jpg"

const FAQs = () => {
  return (
    <div>
      <Header/>
      <div className='mt-24'>
        <BGImageComponent image={bgimage} heading="FAQS" text="Home &gt; FAQS"/>
        <FAQComponent/>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQs
