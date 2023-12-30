import React from 'react'
import Card from './Card'
import CardBlack from './CardBlack'

const Whyus = () => {
    return (
        <>

            <div className='my-32'>
                <h1 className='text-3xl font-medium mx-24 text-center'>WHY CHOOSE US?</h1>


                <div className='flex flex-row items-center justify-center mx-14 my-8  gap-24 '>
                    <div>
                        <CardBlack heading={"Industry Transformation"} paragraph={"We aspire to redefine the landscape ofglobal logistics through continuous innovation and a dedication to excellence."} />
                    </div>
                    <div>
                        <Card heading={"Global Reach"} paragraph={"With a focus on international logistics, we facilitate smooth operations for businesses worldwide."} />
                    </div>

                </div>
                <div className='grid grid-flow-row grid-cols-3 mx-14 my-8 gap-3 '>
                    <div>
                        <Card heading={"Innovative Solutions"} paragraph={"We lead the industry with cutting-edge global logistics solutions, ensuring seamless supply chain operations"} />
                    </div>
                    <div>
                        <CardBlack heading={"Client-Centric Approach"} paragraph={"Our mission is centered aroundenabling client business growth, fostering success on a global scale."} />

                    </div>
                    <div>
                        <Card heading={"Operational Efficiency"} paragraph={"Our commitment to efficiency streamlines processes, saving time and resources for our clients."} />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Whyus
