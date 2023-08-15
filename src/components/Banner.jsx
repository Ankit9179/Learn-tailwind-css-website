import React from 'react'
import Typewriter from 'typewriter-effect';


const Banner = () => {
    return (
        <>
            <div className='bg-blue-600 h-[300px] py-30 flex place-items-center justify-center'>
                <div className='space-y-9'>
                    <h2 className='font-bold text-s text-center md:font-serif text-2xl'>learn with us</h2>

                    <h1 className='text-center text-white text-3xl md:font-serif text-5xl'>Grow with us</h1>
                    <h4 className='text-center font-serif text-2xl text-white'>
                        <Typewriter

                            options={{
                                strings: [
                                    "hello everyone !",
                                    "i'm ankit rahi !",
                                    "how are you....?"
                                    ,],
                                autoStart: true,
                                loop: true,
                            }} />
                    </h4>
                    <button className=' border-2 p-2 mx-auto  rounded bg-red-950 text-white flex flex-row justify-center ml-20 md:ml-24'>Get Started</button>
                </div>
            </div>

        </>
    )
}

export default Banner