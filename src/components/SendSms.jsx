import React from 'react'

const SendSms = () => {
    return (
        <>
            <div className='bg-blue-600 p-6 mb-4'>
                <div className='space-y-9 w-[80%] mx-auto md:flex justify-between   '>
                    <div className='left text-white my-3 text-start'>
                        <h1 className='text-2xl font-bold font-serif'>You can send a message </h1>
                        <p>Assumenda voluptatibus inventore libero?</p>
                    </div>
                    <div className="rightjustify-start">
                        <input className='p-2 rounded-xl' type="text" name="name" id="name" placeholder='Enter your email' />
                        <button className='bg-black p-2 mb-4 rounded-xl mx-2 text-white'>Send</button>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, incidunt!</p>
                        <h5>Privacy Polaicy</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendSms