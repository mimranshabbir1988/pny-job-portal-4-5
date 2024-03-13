import React, { useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'

const Banner = ({query, handleInputChange}) => {
 
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 '>
        <h1 className='text-5xl font-bold text-primary mb-3'><span className='text-red-700'>Find</span> your <span className='text-blue'>new job</span> today</h1>
        <p className='text-base text-black/70 mb-8'>Millions of Jobs in the Computer Web, Graphics, Digital Marketing, Engineering and Technology sector are waiting for you.</p>

        {/* creating form for searching jobs with location in the main page */}
        <form>
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>

                <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
                    <input type='text' name='title' id='title' placeholder='Search the job you are looking for with PNY Job Portal.....?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                    onChange={handleInputChange}
                    value={query}
                    />
                    {/* Search icon */}
                    <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
                </div>
                
                <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
                    <input type='text' name='title' id='title' placeholder='Search Location.....?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                    // onChange={handleInputChange}
                    // value={""}
                    />
                    {/* Search icon */}
                    <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
                </div>
                <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>

            </div>
        </form>
    </div>
  )
}

export default Banner
