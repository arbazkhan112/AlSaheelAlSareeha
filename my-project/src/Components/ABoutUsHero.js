import React from 'react'
import image1 from "../Assets/Images/Hero5.jpg";
import image2 from "../Assets/Images/Hero4.jpg";
import Boldtext from './Boldtext';
const ABoutUsHero = () => {
    return (
        <>
            <div>

                <section class="bg-white dark:bg-gray-900">
                    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div class="font-normal  text-gray-900 sm:text-lg ">
                            <p class="text-base font-semibold leading-7 text-[#F58E22]">About Us</p>
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold  ">Transforming Global Logistics with Innovation and Expertise</h2>
                            <p class="my-6" >Welcome to <Boldtext bold={"Al Sahel Al Sareeha"}/>, a dynamic force at the heart of the UAE's thriving business landscape. Nestled amid the energy of this vibrant region, we are a team of young and tech-savvy entrepreneurs dedicated to revolutionizing the field of logistics and custom clearance. Our commitment lies in fostering business growth through the seamless management of supply chains.</p>
                            <p className='my-6'>With specialization in logistics and custom clearance, we pride ourselves on being at the forefront of innovation, utilizing our expertise to provide precise solutions that cater to the evolving needs of businesses in the region.</p>
                            <p className='my-6'>At <Boldtext bold={"Al Sahel Al Sareeha"}/>, we are pioneers in crafting seamless global logistics solutions. Our primary goal is to lead the way in innovation when it comes to clearance services, propelling operational efficiency and fostering client business growth not only throughout the UAE but beyond borders.</p>
                            <p className='my-6'>Driven by a mission to transform global logistics, we strive to achieve this through cutting-edge clearance services. Our aim is to be a driving force behind operational efficiency, enabling the growth of client businesses on a worldwide scale.</p>
                            <p className='my-6'>Join us on this journey as we redefine the landscape of logistics and custom clearance, setting new standards and paving the way for operational excellence. At <Boldtext bold={"Al Sahel Al Sareeha"}/>, we don't just deliver goods; we deliver precision, innovation, and growth.</p>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-8">
                            <img class="w-full rounded-lg" src={image1} alt="office content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={image2} alt="office content 2" />
                        </div>
                    </div>
                </section>



               

            </div>
        </>
    )
}

export default ABoutUsHero
