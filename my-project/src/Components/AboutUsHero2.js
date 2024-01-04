import React from 'react'
import { HiLightBulb } from "react-icons/hi";
import { PiTargetBold } from "react-icons/pi";

const AboutUsHero2 = () => {
    return (
        <div className='flex  flex-col  m-6 gap-6 mb-20 sm:flex-row  ' >
            <div className='bg-[#F58E22] p-6 rounded-3xl  w-full sm:w-1/2'>
                <div className='flex '>
                    {/* <HiLightBulb /> */}
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold underline ">OUR VISION</h2>
                </div>
                <p className='my-6 text-lg font-medium'>Pioneering seamless global logistics solutions, our goal is to lead innovation in clearance services, propelling both operational efficiency and client business growth throughout the UAE and beyond.</p>



            </div>
            <div className='bg-[#F58E22] p-6 rounded-3xl  w-full sm:w-1/2'>
                <div className='flex'>
                {/* <PiTargetBold /> */}
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold underline ">OUR MISSION</h2>
                </div>
                <p className='my-6 text-lg font-medium'>Our mission is to transform global logistics through cutting-edge clearance services, driving operational efficiency and enabling client business growth worldwide.</p>
            </div>
            
        </div>
    )
}

export default AboutUsHero2
