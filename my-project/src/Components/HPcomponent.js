import React from 'react'

const HPcomponent = ({ heading, paragraph }) => {
    return (
        <>
        <div>
            <div className='flex flex-col gap-2 mt-16 '>
            <h2 class="text-2xl font-bold border-b-2 border-[#F58E22] dark:text-white">{heading}</h2>
            <p className='text-xs md:text-base'>{paragraph}</p>
            </div>
        </div>
        </>
    )
}

export default HPcomponent
