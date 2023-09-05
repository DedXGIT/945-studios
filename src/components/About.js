import React from 'react'

export default function About() {
  return (
    <>
    <div id='About' className="bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('https://media.discordapp.net/attachments/781836268849987605/1147618483950080120/bg_rev.png')] bg-gray-700 flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div className='inline'>
        <h1 className="font-abc mt-0 mb-[7rem] text-[6rem] leading-none text-white md:text-[6rem] lg:text-[7rem]">AB<span className='text-[#FFD800]'>O</span>UT</h1>
            
        </div>
        <div className="w-full p-10 rounded-xl">
            {/* <!-- headers content--> */}
            <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-white max-w-[95rem] mt-2 text-2xl lg:text-[1.4rem]">
                <span className='text-[#FFD800]'>945 Studios</span> offers business ID card services to all businesses and individuals located in 
                Los Santos. Our services include designing, printing, and delivering high-quality ID cards that meet the specific needs of our clients. 
                
                At <span className='text-[#FFD800]'>945 Studios</span> , We understand the importance of building strong relationships with our clients. We aim to provide excellent customer service by working closely with our clients to understand their unique requirements and preferences. Our team of experienced designers will ensure that each ID card is tailored to the client's needs and delivered on time.
                
                <span className='text-[#FFD800]'>945 Studios</span> is committed to providing high-quality business ID card services to all businesses and individuals located in Los Santos. Our services are designed to meet the specific needs of our clients and provide them with a hassle-free experience. We are confident that our services will enhance the security and professionalism of our client's business or organization.
                </h3>
            </div>
            
        </div>
    </div>

    </>
  )
}