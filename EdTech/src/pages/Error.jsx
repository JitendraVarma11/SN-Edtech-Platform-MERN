import React from 'react'
import pageNotFound from "../assets/Images/404PageNotFound.svg";

export const Error = () => {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-3.5rem)]'>
        <img src={pageNotFound} alt="404 - Page Not Found" width={500} height={500}/>
    </div>
  )
}
