import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { Link} from "react-router-dom";
import { getPasswordResetToken } from '../services/operations/authAPI';
import { CgArrowLongLeft } from "react-icons/cg"

export const ForgotPassword = () => {
const [emailSent,setEmailSent]=useState(false);  
const [email,setEmail]=useState("");
const dispatch=useDispatch();

const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent));
}

const {loading}=useSelector((state)=>state.auth);
  return (
    <div className='text-white flex flex-col place-items-center justify-center min-h-[calc(100vh-3.5rem)]'>
    {
        loading?(
            <div className='spinner'></div>
        ):(
            <div className='w-[28%]'>
                <h1 className='text-4xl font-bold'>{
                    !emailSent?"Reset Your Password":"Check Your Email"
                    }
                </h1>
                <p className='text-richblack-300 py-3'>
                    {
                        !emailSent?"Have no fear. We'll email you instructions to reset your password. If you yoou don't have access to your email we can try account recovery.":`We have sent the reset email to ${email}`
                    }
                </p>

                <form onSubmit={handleOnSubmit} className='flex flex-col'>
                    {
                    !emailSent && (
                        <label>
                            <p className='text-richblack-50 mt-4 py-2'>Email Address <sup className=' text-[#FF0000]'>*</sup> :</p>
                        <input type="email" name='email' value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Enter Your Email address'
                        className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100'
                        />
                        </label>
                    )
                    }          
                    <button type='submit' className='w-full text-center my-7 text-richblack-700 rounded-md text-[13px] py-3 px-6 font-bold bg-yellow-50 shadow shadow-richblack-700 hover:scale-105 transition-all duration-200'>
                        {
                        !emailSent ? "Reset Password": "Resend Email"
                            
                        }
                    </button>

                    <div className='flex gap-3 cursor-pointer hover:-translate-x-1 transition-all duration-200'>
                    < CgArrowLongLeft fontSize={24}/>
                        <Link to="/login">
                            <p>Back to Login</p>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
    </div>
  )
}
