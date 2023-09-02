import React from 'react';

export default function Hero() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/abstract-gold-light-lines-pipe-speed-zoom-black-background-technology_1142-10659.jpg?w=1380&t=st=1693676962~exp=1693677562~hmac=94ee112dce5f8917098b9821002bfa2dc54d5a84106409fb1bbbe88c494c0c2e')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">945 STUDIOS</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Premium Quality ID Cards for Business Individuals and Organisations</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#eeff2b] hover:bg-[#D8E827] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Order Yours
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    About
                </a>  
            </div>
        </div>
    </section>
  )
}