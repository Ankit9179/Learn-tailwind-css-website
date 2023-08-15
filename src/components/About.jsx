import React from 'react'

const About = () => {
    return (
        <>
            <div className=' w-[80%] mx-auto  py-28 flex flex-col gap-10 md:flex-row  '>
                <div className="left m-auto">
                    <img className='w-64 md:w-64 lg:w-96' src="https://www.arinfotech.co.in/images/what-we-do.png" alt="img" />
                </div>
                <div className="right m-auto w-56 ">
                    <h1 className='text-red-500 uppercase font-bold text-2xl mb-5'>You will learn</h1>
                    <p>Lorem  elit. Autem dolorum sequi maxime Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, vitae. expedita maiores minus impedit recusandae porro minima eligendi!</p>
                    <button className='bg-black text-white p-2 rounded mt-3 cursor-pointer'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default About