'use client';
import { Link } from 'react-scroll';
import React from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const textBoxStyle = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '1.1rem',
}


export default function Pricing() {
  return (
    <>
    <div id='Contact' className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147618483950080120/bg_rev.png')] bg-gray-700 flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div className='inline'>
            <h1 className="font-abc mb-1 text-[6rem] leading-none text-white md:text-[6rem] lg:text-[7rem]">C<span className='text-[#FFD800]'>O</span>NTA<span className='text-[#FFD800]'>C</span>T</h1>  
        </div>
        <div className="w-full p-10 rounded-xl">
            {/* <!-- headers content--> */}
            <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-white max-w-[95rem] mt-3 text-2xl lg:text-[1.4rem] mb-12">
                            Fill details below to fix an appointment with a <span className='text-[#FFD800]'>945 Studios</span> Employee
                </h3>
                <div className='border-[2px] rounded-[25px] p-12 border-white w-[20rem] md:w-[28rem] sm:w-[26rem] lg:w-[30rem] flex items-center justify-center'>
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="YOUR EMAIL"
                                className='text-white'
                                />
                            </div>
                            <TextInput
                            className='border-[1.5px] rounded-xl w-[15rem]'
                            style={textBoxStyle}
                            placeholder="Your Name"
                            required type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label
                                value="YOUR NUMBER"
                                className='text-white'
                                />
                            </div>
                            <TextInput
                            id="number"
                            className='border-[1.5px] rounded-xl w-[15rem]'
                            style={textBoxStyle}
                            placeholder="Your Number"
                            required
                            type="number"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    value="ADDITIONAL DETAILS"
                                    className='text-white'
                                />
                            </div>
                            <Textarea
                                id="comment"
                                className='rounded-xl w-[15rem]'
                                style={textBoxStyle}
                                placeholder="Anything you would like to add"
                                rows={4}
                                />
                        </div>
                        <button
                            className="mt-6 inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg cursor-pointer border-2 border-[#FFD800] hover:bg-[#FFD800] hover:border-[#FFD800] focus:ring-4 focus:ring-gray-400">
                                Submit Details
                        </button> 
                    </form>
                </div>
                <div className="max-w-md" id="textarea">
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
