import React from 'react'
import Card from './Card'
import { FaGlobe } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

const Whyus = () => {
    return (
        <>

            <div className='mb-32 bg-[#F58E22] py-10'>
                <h1 className='text-4xl font-bold mx-24 text-center '>WHY CHOOSE US?</h1>


                <div className='flex flex-col items-center justify-center mx-14 mt-10  gap-10 sm:flex-row sm:gap-24'>
                    <div>
                        <Card icon={<FaIndustry />} heading={"Industry Transformation"} paragraph={"We aspire to redefine the landscape of global logistics through continuous innovation and a dedication to excellence."} />
                    </div>
                    <div>
                        <Card icon={<FaGlobe />} heading={"Global Reach"} paragraph={"With a focus on international logistics, we facilitate smooth operations for businesses worldwide."} />
                    </div>

                </div>
                <div className='flex flex-col items-center justify-center mx-14 mt-10  gap-10 sm:flex-row sm:gap-6 md:gap-14 '>
                    <div>
                        <Card icon={<HiLightBulb />} heading={"Innovative Solutions"} paragraph={"We lead the industry with cutting-edge global logistics solutions, ensuring seamless supply chain operations"} />
                    </div>
                    <div>
                        <Card icon={<IoPerson />} heading={"Client-Centric Approach"} paragraph={"Our mission is centered aroundenabling client business growth, fostering success on a global scale."} />

                    </div>
                    <div>
                        <Card icon={<MdSettings />} heading={"Operational Efficiency"} paragraph={"Our commitment to efficiency streamlines processes, saving time and resources for our clients."} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Whyus
