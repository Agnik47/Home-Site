import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full min-h-screen p-5 mt-12  felx flex-col justify-center items-center'>
            <p className='text-4xl text-center '><span className='font-bold'>About</span> <span className='underline font-thin'>Our Brand</span></p>
            <p className='text-center mt-2 mb-2 text-gray-400 '>Passionate About Properties, Dedicated to <br /> Your Vision</p>
            <div className="Acontainer w-[70vw] ml-[14vw] h-[40vw] g-red-900 flex">
                <div className="left w-1/2  h-full p-[2vw] ">
                    <img src={assets.brand_img} className='object-cover mt-16' alt="" />
                </div>
                <div className="right w-1/2   flex flex-col">
                    <div className="r-top w-full h-1/2">
                        
                    </div>
                    <div className="r-bottom  h-1/2 px-12" >
                        <p className='text-gray-700'>Our website is dedicated to providing exceptional service and innovative solutions in the home rental industry. We are a trusted name, setting the standard with our commitment to quality and excellence, ensuring you find the perfect home that meets your needs and vision.</p>
                        <button className='px-5 py-3 bg-blue-500 text-white rounded mt-6'>Learn More</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About    