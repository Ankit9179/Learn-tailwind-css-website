import React from 'react'

const Cart = () => {
    return (
        <>
            <div className="py-[40px]">
                <div className="max-w-[1240px] mx-auto gap-2 md:grid p-4 grid-cols-3 ">
                    <div className='border-2 my-4  h-[350px] shadow-xl rounded text-center flex flex-col gap-5  hover:bg-gray-400  hover:text-white hover:transition hover:scale-105 duration-500 '>
                        <h4 className='font-bold text-3xl'>Web development</h4>
                        <h1 className='font-bold text-3xl'>$ 111</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                        <hr />
                        <p>Loreipsumng elit.icing elit. Dolorem, nam!</p>
                        <hr />
                        <p>Lorem ipsum dolor sit ametl Lorem ipsum dolor sit amet. consectetur.</p>
                        <button className='bg-green-500 text-black p-2 rounded-sm '>Start Now</button>
                    </div>

                    <div className='border-2 my-4 h-[350px] shadow-xl rounded text-center bg-gray-400 text-white flex flex-col gap-5 hover:bg-white   hover:text-black  hover:transition hover:scale-105 duration-500 '>
                        <h4 className='font-bold text-3xl'>App development</h4>
                        <h1 className='font-bold text-3xl'>$ 222</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                        <hr />
                        <p>Loreipsumng elit.icing elit. Dolorem, nam!</p>
                        <hr />
                        <p>Lorem ipsum dolor sit ametl Lorem ipsum dolor sit amet. consectetur.</p>
                        <button className='bg-green-500 text-black p-2 rounded-sm '>Start Now</button>
                    </div>
                    <div className='border-2 my-4  h-[350px] shadow-xl rounded text-center flex flex-col gap-5  hover:bg-gray-400  hover:text-white hover:scale-105 duration-500 '>
                        <h4 className='font-bold text-3xl'>Full stack development</h4>
                        <h1 className='font-bold text-3xl'>$ 333</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                        <hr />
                        <p>Loreipsumng elit.icing elit. Dolorem, nam!</p>
                        <hr />
                        <p>Lorem ipsum dolor sit ametl Lorem ipsum dolor sit amet. consectetur.</p>
                        <button className='bg-green-500 text-black p-2 rounded-sm '>Start Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart 