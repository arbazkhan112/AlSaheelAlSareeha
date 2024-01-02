import React from 'react'
import image1 from "../Assets/Images/Hero2.jpg";
import image2 from "../Assets/Images/Hero3.jpg";

const ABoutUsHero = () => {
  return (
    <>
        <section class="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
        <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                <div class="bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <a href="" class="">
                        <img src={image1} alt=""
                            class="object-cover w-full h-64 rounded-t-lg"/>
                    </a>
                    <div class="p-5">
                        <a href="" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
                            Community hub
                        </a>
                        <p class="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                            lorem ipsum dor amit isoeirspus soiduitrsas orem ipsum dor ami
                        </p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800">
                            Read more</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <a href="" class="">
                        <img src={image2} alt=""
                            class="object-cover w-full h-64 rounded-t-lg"/>
                    </a>
                    <div class="p-5">
                        <a href="" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
                            Awars and reputation
                        </a>
                        <p class="mt-3 mb-4 font-normal text-gray-700 dark:text-gray-400">
                            lorem ipsum dor amit isoeirspus soiduitrsas orem ipsum dor ami
                        </p>
                        <a href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-800">
                            Read more</a>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    </>
  )
}

export default ABoutUsHero
