import React from 'react'
import image from "../Assets/Images/Carouselimg4.jpg";
import Boldtext from './Boldtext';

const ServicesHero = () => {
    return (
        <>

            <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div class="absolute inset-0 -z-10 overflow-hidden">

                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </div>
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div class="lg:pr-4">
                            <div class="lg:max-w-lg">
                                <p class="text-base font-semibold leading-7 text-[#F58E22]">Services</p>
                                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Comprehensive Services: Navigating Success in Global Business</h1>
                            </div>
                        </div>
                    </div>
                    <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={image} alt="" />
                    </div>
                    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div class="lg:pr-4">
                            <div class="max-w-xl text-lg leading-7 text-gray-800 lg:max-w-lg">
                                <p>We bring a spectrum of services designed to elevate your business. Our Customs Clearance Expertise ensures that you navigate regulatory complexities seamlessly, minimizing delays and reducing the risk of fines. With our Professional PRO Services, administrative processes become a breeze as we facilitate permits, visas, and document processing, allowing you to focus on your core operations. Experience Cost Reduction through our streamlined logistics, supply chain management, and efficient customs clearance and PRO processes. We don't just offer services; we provide a Competitive Advantage, positioning your business as agile, reliable, and responsive globally. Join us at <Boldtext bold={"Al Sahel Al Sareeha"} /> and unlock the potential for growth, efficiency, and a distinct edge in the international business arena.</p>
                                <ul role="list" class="mt-8 space-y-4 text-gray-600">
                                    <li class="flex gap-x-3">

                                        <strong class="font-semibold text-gray-900">Customs Clearance Expertise:</strong>

                                    </li>
                                    <ul>
                                        <li>- Navigate regulatory complexities swiftly</li>
                                        <li>- Ensure smooth and compliant transactions</li>
                                        <li>- Minimize delays and reduce the risk of fines or penalties</li>
                                    </ul>
                                    <li class="flex gap-x-3">

                                        <strong class="font-semibold text-gray-900">Professional PRO Services:</strong>

                                    </li>
                                    <ul>
                                        <li>- Expedite administrative processes</li>
                                        <li>- Provide a seamless interface with government authorities</li>
                                        <li>- Facilitate permits, visas, and document processing</li>
                                    </ul>
                                    <li class="flex gap-x-3">

                                        <strong class="font-semibold text-gray-900">Cost Reduction:</strong>

                                    </li>
                                    <ul>
                                        <li>- Streamlined logistics and supply chain management</li>
                                        <li>- Efficient customs clearance and PRO processes</li>
                                        <li>- Optimization of transportation, inventory, and administrative workflows</li>
                                    </ul>
                                    <li class="flex gap-x-3">

                                        <strong class="font-semibold text-gray-900">Competitive Advantage:</strong>

                                    </li>
                                    <ul>
                                        <li>- Position your business as agile, reliable, and responsive globally</li>
                                    </ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ServicesHero
