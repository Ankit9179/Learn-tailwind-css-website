import React from 'react'
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter, BsTelephoneInbound } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className='py-[60px] bg-black text-white '>
                <div className='md:grid grid-cols-3 mx-6 '>
                    <div className='py-4'>
                        <h1 className='text-2xl font-bold'>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur.</p>
                    </div>
                    <div className='py-4 mx-auto'>
                        <h1 className='text-2xl font-bold'> Contact </h1>
                        <p className='flex justify-center gap-7 mt-7'>
                            <BsInstagram />
                            <BsLinkedin />
                            <BsFacebook />
                            <BsTwitter />
                        </p>
                    </div>
                    <div className='py-4 mx-auto'>
                        <h1 className='text-2xl font-bold'> <BsTelephoneInbound className='inline' /> - 123456789</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer