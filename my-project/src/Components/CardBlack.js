import React from 'react'

const CardBlack = ({heading, paragraph}) => {
    return (
        <>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 text-[#F58E22]">{heading}</h5>
                <p class="font-normal text-black ">{paragraph}</p>
            </a>

        </>
    )
}

export default CardBlack
