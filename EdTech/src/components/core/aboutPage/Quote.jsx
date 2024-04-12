import React from 'react'
import { HighlightText } from '../HomePage/HighlightText'

export const Quote = () => {
  return (
    <div className='text-2xl font-bold text-center lg:w-[75%]'>
        We are passionate about revolutionizing the way we learn. Our innovation platform <HighlightText text={"combine technology"}/>
        <span className='font-bold bg-gradient-to-t from-[#FFFFE0] to-[#FF8C00] bg-clip-text text-transparent'>{" "} experties</span>
        , and community to create an 
        <span className='font-bold bg-gradient-to-t from-[#FF8C00] to-[#FFDAB9] bg-clip-text text-transparent'>
         {" "}unparalled education experience.
        </span>
    </div>
  )
}
