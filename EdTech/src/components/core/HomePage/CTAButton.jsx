import React from 'react'
import { Link } from 'react-router-dom'

export const CTAButton = ({children,active, linkto}) => {
  return (
    <div>
        <Link to={linkto}>
            <div className={`text-center rounded-md text-[13px] py-3 px-6 font-bold ${active ?"bg-yellow-50 text-black": "bg-richblack-800 "} hover:scale-95 transition-all duration-200 shadow shadow-richblack-700`}>
                {children}
            </div> 
        </Link>
    </div>
  )
}
