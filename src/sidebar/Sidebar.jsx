import React from 'react'
import Location from './Location'

const Sidebar = ({handleChange, handleClick}) => {
    // console.log(handleChange)
  return (
    <div className='space-y-5'>
        
            {/* <input type='radio' onChange={handleChange} />
            <button className='bg-blue rounded' onClick={handleClick}>Click me</button> */}

            <h3 className='text-lg font-bold mb-2'>Filter Jobs</h3>

            <Location handleChange={handleChange} />

    </div>
  )
}

export default Sidebar
