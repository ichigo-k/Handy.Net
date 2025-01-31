import React from 'react'


function Hero() {
  return (
    <section className='w-full mt-[4rem] p-[5rem]'>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-red-300 to-red-600 opacity-20 -z-10"></div> */}

        <div className="mx-auto contain flex flex-col md:flex-row items-center justify-between p-5 relative">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center relative z-10">
            hello
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
            hello
        </div>
      </div>
      
    </section>
  )
}

export default Hero