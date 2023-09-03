import React from 'react';

export default function Hero() {
  return (
    <section className="pb-[120px] flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147796900687392788/bg.jpg?')] bg-gray-700 bg-blend-multiply">
        <div className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
                    <h1 className="font-abc mb-4 text-[6rem] leading-none text-white md:text-[6rem] lg:text-[9rem]">945 STUDIOS</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-4">Premium Quality ID Cards for Business Organisations and Individuals</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#FFD800] hover:bg-[#3F4C03] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Order Yours
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            About
                        </a>  
                    </div>
        </div>
    </section>
  )
}
