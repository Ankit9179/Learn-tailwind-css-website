import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [isClick, setIsClick] = useState(true)
    return (
        <>
            <div className="bg-blue-600  p-5">
                <div className="max-w-[1240]  mx-auto flex justify-between">
                    <div className="text-3xl font-bold">Tailwind</div>
                    {
                        isClick ? <AiOutlineMenu className='md:hidden block text-white text-3xl cursor-pointer' onClick={() => setIsClick(!isClick)} />
                            : <AiOutlineClose className='md:hidden block text-white text-3xl cursor-pointer' onClick={() => setIsClick(!isClick)} />
                    }
                    <ul className='hidden md:flex gap-9 text-white'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>about</li>
                        <li className='cursor-pointer'>contact</li>
                        <li className='cursor-pointer'>servise</li>
                        <li className='cursor-pointer'>company</li>
                    </ul>
                    {/* responsive menu */}
                    <ul className={` duration-500 block  md:hidden fixed bg-black h-screen w-full  p-20 top-[76px]  
                    ${isClick ? "left-[-100%]" : "left-[-0]"}
                    text-white`}>
                        <li className='cursor-pointer text-4xl mt-20  '>Home</li>
                        <li className='cursor-pointer text-4xl mt-20  '>about</li>
                        <li className='cursor-pointer text-4xl mt-20  '>contact</li>
                        <li className='cursor-pointer text-4xl mt-20  '>servise</li>
                        <li className='cursor-pointer text-4xl mt-20  '>company</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header