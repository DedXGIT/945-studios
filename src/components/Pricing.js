import React from 'react'

export default function Pricing() {
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147618483950080120/bg_rev.png')] bg-gray-700 flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div className="bg-[#F4F5FA] p-10 rounded-xl">
            {/* <!-- headers content--> */}
            <div className="flex flex-col justify-center items-center text-center">
                <div className="max-w-sm font-bold font-sans">
                    Pricing as per your requirements
                </div>
                <div className="font-light max-w-lg mt-5 text-sm">
                    We Have different Packages for different requirements
                </div>
            </div>

            {/* <!-- subscriptions --> */}
            <div
                className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#FFFBEC] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 h-[15.375rem] md:w-auto">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" alt='img' className="w-8"/> */}
                        <div className="mt-3 font-semibold text-2xl">SIMPLE CARD</div>
                        <div className="flex flex-wrap text-sm font-light">Perfect for people who</div>
                        <div className="flex flex-wrap text-sm font-light">want simple ID Cards</div>
                        <div className="my-4">
                            <span className="font-abc font-bold text-4xl">$ 1499 /-</span>
                        </div>
                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>

                <div className="bg-[#F9ECFF] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 h-[15.375rem] md:w-auto">
                        {/* <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" alt='img' className="w-12"/> */}
                        <div className="mt-3 font-semibold text-lg">ADVANCED CARD</div>
                        <div className="text-sm font-light w-60 md:w-auto">For all business</div>
                        <div className="text-sm font-light w-60 md:w-auto">Individuals & Organisations</div>
                        <div className="my-4">
                            <span className="font-abc font-bold text-4xl">$ 2499 /-</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>


                <div className="bg-[#ECEEFF] rounded-xl">
                    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 h-[15.375rem] md:w-auto">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" alt='img' className="w-12"/> */}
                        <div className="mt-3 font-semibold text-lg">LEGENDARY CARD</div>
                        <div className="text-sm font-light w-60 md:w-auto">Perfect for those who</div>
                        <div className="text-sm font-light w-60 md:w-auto">Up to 100Mbit/s</div>
                        <div className="my-4">
                            <span className="font-abc font-bold text-4xl">$ 3499 /-</span>
                        </div>

                        <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Add subscription
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">See all subscriptions</button>
            </div>
        </div>
    </div>

    </>
  )
}
