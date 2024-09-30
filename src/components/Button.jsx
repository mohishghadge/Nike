import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <>
    <button className='flex justify-center items-center px-7 text-white py-4 border font-montserrat text-lg leading-none
             bg-coral-red rounded-full hover:bg-white hover:text-coral-red hover:border-slate-500'>
        {label}

      { iconURL &&
          <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full bg-white w-5 h-5'/>
      }  
    </button>
    </>
  )
}

export default Button