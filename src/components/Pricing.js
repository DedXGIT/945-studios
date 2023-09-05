import React from 'react';
import { Link } from 'react-scroll';

export default function Pricing() {
  return (
    <>
    <div id='Pricing' className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147796900687392788/bg.jpg')] bg-gray-700  flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div className='inline'>
        <h1 className="font-abc mb-2 text-[6rem] leading-none text-white md:text-[6rem] lg:text-[7rem]">P<span className='text-[#FFD800]'>R</span>ICI<span className='text-[#FFD800]'>N</span>G</h1>
            
        </div>
        <div className="w-full p-10 rounded-xl">
            {/* <!-- headers content--> */}
            <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-white max-w-lg mt-3 text-2xl lg:text-[1.4rem]">
                            Different Packages for different requirements
                </h3>
            </div>

            {/* <!-- subscriptions --> */}
            <div
                className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-evenly items-center mt-10 z-1">
                <div className="border-[3.5px] border-[#FFFBEC] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl border-[3.5px] border-[#FFD800] bg-black text-white shadow-xl translate-x-4 translate-y-4 w-[16rem] h-[22rem] md:w-[228px] sm:w-[16rem]">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" alt='img' className="w-8"/> */}
                        <div className="mt-3 font-abc text-[2rem]">SIMPLE CARD</div>
                        <div className="flex flex-wrap text-md font-light">Perfect for people who</div>
                        <div className="flex flex-wrap text-md font-light">want simple ID Cards</div>
                        <div className="mt-8">
                            <span className="font-abc text-4xl text-[#FFD800]">$ 1499 /-</span>
                        </div>
                        <Link
                        to="Contact"
                        smooth={true}
                        offset={-60}
                        duration={500}  
                        className="bg-[#F4F5FA] text-black text-center cursor-pointer font-abc text-xl px-2 py-2 rounded-full  border border-[#F0F0F6] shadow-xl mt-10">
                            P u r c h a s e
                        </Link>
                    </div>
                </div>                
                <div className="border-[3.5px] border-[#FFFBEC] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl border-[3.5px] border-[#FFD800] bg-black text-white shadow-xl translate-x-4 translate-y-4 w-[16rem] h-[22rem] md:w-[228px] sm:w-[16rem]">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" alt='img' className="w-8"/> */}
                        <div className="mt-3 font-abc text-[2rem]">ADVANCED CARD</div>
                        <div className="flex flex-wrap text-md font-light">For business Individuals</div>
                        <div className="flex flex-wrap text-md font-light">& organisations</div>
                        <div className="mt-8">
                            <span className="font-abc text-4xl text-[#FFD800]">$ 2499 /-</span>
                        </div>
                        {/* <button className="bg-[#F4F5FA] text-black font-abc text-xl px-2 py-2 rounded-full  border border-[#F0F0F6] shadow-xl mt-10">
                            P u r c h a s e
                        </button> */}

                        <Link
                        to="Contact"
                        smooth={true}
                        offset={-60}
                        duration={500}  
                        className="bg-[#F4F5FA] text-black text-center cursor-pointer font-abc text-xl px-2 py-2 rounded-full  border border-[#F0F0F6] shadow-xl mt-10">
                            P u r c h a s e
                        </Link>
                        
                    </div>
                </div>                
                <div className="border-[3.5px] border-[#FFFBEC] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl border-[3.5px] border-[#FFD800] bg-black text-white shadow-xl translate-x-4 translate-y-4 w-[16rem] h-[22rem] md:w-[228px] sm:w-[16rem]">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" alt='img' className="w-8"/> */}
                        <div className="mt-3 font-abc text-[2rem]">CUSTOM CARD</div>
                        <div className="flex flex-wrap text-md font-light">Perfect for those who</div>
                        <div className="flex flex-wrap text-md font-light">everything customised</div>
                        <div className="mt-8">
                            <span className="font-abc text-4xl leading-none text-[#FFD800]">$ 3499 /-</span>
                        </div>
                        <Link
                        to="Contact"
                        smooth={true}
                        offset={-60}
                        duration={500}  
                        className="bg-[#F4F5FA] text-black text-center cursor-pointer font-abc text-xl px-2 py-2 rounded-full  border border-[#F0F0F6] shadow-xl mt-10">
                            P u r c h a s e
                        </Link>
                    </div>
                </div>                
            </div>

            {/* <div className="flex justify-center">
                <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">See all subscriptions</button>
            </div> */}
        </div>
    </div>

    </>
  )
}
