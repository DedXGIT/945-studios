'use client';

import React from 'react';

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {Label, TextInput, Textarea } from 'flowbite-react';

const textBoxStyle = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '1.1rem',
}

const people = [
    { name: 'SIMPLE CARD' },
    { name: 'ADVANCED CARD' },
    { name: 'CUSTOM CARD' },
  ]


export default function Pricing() {
    const [selected, setSelected] = useState(people[0])
  return (
    <>
    <div id='Contact' className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147618483950080120/bg_rev.png')] bg-gray-700 flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div className='inline'>
            <h1 className="font-abc text-[6rem] leading-none text-white md:text-[6rem] lg:text-[7rem]">C<span className='text-[#FFD800]'>O</span>NTA<span className='text-[#FFD800]'>C</span>T</h1>  
        </div>
        <div className="w-full p-4 rounded-xl">
            {/* <!-- headers content--> */}
            <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-white max-w-[95rem] text-2xl lg:text-[1.4rem] mb-6">
                            Fill details below to fix an appointment with a <span className='text-[#FFD800]'>945 Studios</span> Employee
                </h3>
                <div className=' wrap border-[2px] rounded-[25px] px-8 py-4 border-white w-[20rem] md:w-[28rem] sm:w-[26rem] lg:w-[50rem] flex items-center justify-center'>
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="YOUR NAME"
                                className='text-white'
                                />
                            </div>
                            <TextInput
                            className='border-2 rounded-xl w-[15rem]'
                            style={textBoxStyle}
                            placeholder="Shivalik Ghosh"
                            required type="text"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="YOUR DISCORD TAG"
                                className='text-white'
                                />
                            </div>
                            <TextInput
                            className='border-2 rounded-xl w-[15rem]'
                            style={textBoxStyle}
                            placeholder="dedxgaming"
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
                            className='border-2 rounded-xl w-[15rem]'
                            style={textBoxStyle}
                            placeholder="969-2530"
                            required
                            type="number"
                            />
                        </div>
                        <div>
                        <Listbox value={selected} onChange={setSelected} >
                            <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-black text-white border-2 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                    >
                                    {({ selected }) => (
                                        <>
                                        <span
                                            className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {person.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                                </Listbox.Options>
                            </Transition>
                            </div>
                        </Listbox>
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
                                className='rounded-xl w-[15rem] border-2'
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
