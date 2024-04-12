import React from 'react';

export const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-t from-blue-100 to-blue-500 bg-clip-text text-transparent'>
       {" "} {text}
    </span>
  )
}
