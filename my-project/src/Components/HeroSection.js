import React from 'react'
import HPcomponent from './HPcomponent'

const HeroSection = () => {
    return (
        <div>
            <div className='flex flex-col gap-10 m-10 my-14 items-center justify-center lg:m-20 md:m-16'>

                <h1 className=' text-3xl font-semibold text-[#F58E22] md:text-3xl lg:text-5xl'>WELCOME TO AL SAHEL AL SAREEHA</h1>

                <div className='flex flex-col justify-start items-start'>
                    <HPcomponent heading={"OUR STROY"} paragraph={"In the heart of the UAE's vibrant business scene, we are a dynamic team of young and tech-savvy entrepreneurs. Specializing in logistics and custom clearance, we are committed to enhancing business growth through streamlined supply chain management. Our focus on innovation and expertise ensures that we deliver precise solutions for the evolving needs of businesses in the region."} />

                    <HPcomponent heading={"OUR VISION"} paragraph={"Pioneering seamless global logistics solutions, our goal is to lead innovation in clearance services, propelling both operational efficiency and client business growth throughout the UAE and beyond."} />

                    <HPcomponent heading={"OUR MISSION"} paragraph={"Our mission is to transform global logistics through cutting-edge clearance services, driving operational efficiency and enabling client business growth worldwide."} />

                </div>



                {/* <div className='flex flex-col gap-3 mt-16'>

                    <h2 class="text-2xl font-bold border-b-2 border-[#F58E22] dark:text-white">OUR STROY</h2>

                    <p className='text-xs md:text-base'>In the heart of the UAE's vibrant business scene, we are a dynamic team of young and tech-savvy entrepreneurs. Specializing in logistics and custom clearance, we are committed to enhancing business growth through streamlined supply chain management. Our focus on innovation and expertise ensures that we deliver precise solutions for the evolving needs of businesses in the region.</p>
                </div>



                <div className='flex flex-col gap-3 mt-10'>

                    <h2 class="text-2xl font-bold border-b-2 border-[#F58E22] dark:text-white">OUR VISION</h2>

                    <p className='text-xs md:text-base'>Pioneering seamless global
                        logistics solutions, our goal is to
                        lead innovation in clearance
                        services, propelling both
                        operational efficiency and client
                        business growth throughout
                        the UAE and beyond.</p>
                </div>

                <div className='flex flex-col gap-3 mt-10'>

                    <h2 class="text-2xl font-bold border-b-2 border-[#F58E22] dark:text-white">OUR MISSION</h2>

                    <p className='text-xs md:text-base'>Our mission is to transform
                        global logistics through
                        cutting-edge clearance
                        services, driving operational
                        efficiency and enabling client
                        business growth worldwide.</p>
                </div>
 */}



            </div>
        </div>
    )
}

export default HeroSection
