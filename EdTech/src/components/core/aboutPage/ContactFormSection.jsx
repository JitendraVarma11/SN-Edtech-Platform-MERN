import React from 'react'
import { ContactUsForm } from '../../ContactPage/ContactUsForm'

export const ContactFormSection = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-richblack-5 text-3xl font-bold'>Get in Touch</h1>
        <p className='text-richblack-300 mb-7'>
            We'd love to here for you, please dill out this form.
        </p>
        <div className='lg:w-[77%]'>
            <ContactUsForm/>
        </div>
    </div>
  )
}
