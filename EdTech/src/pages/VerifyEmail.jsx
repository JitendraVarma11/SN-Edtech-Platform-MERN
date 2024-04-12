import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate, Link } from "react-router-dom";
import {CgArrowLongLeft} from "react-icons/cg";
import { RxCountdownTimer } from "react-icons/rx";

export const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { loading, signupData } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="lg:w-[25%] sm:p-5">
          <h1 className="text-4xl font-bold">Verify Email</h1>
          <p className="text-richblack-300 py-3">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span style={{margin: '0 10px'}}></span>}
              renderInput={(props) => (
                <input {...props} className="bg-richblack-700 rounded-[5px] " />
              )}
              inputStyle={{
                width: '40px',
                height: '40px',
                fontSize: '22px'
              }}
            />

            <button
              type="submit"
              className="text-center my-7 w-[340px] text-richblack-700 rounded-md text-[13px] py-3 px-6 font-bold bg-yellow-50 shadow shadow-richblack-700 hover:scale-105 transition-all duration-200"
            >
              Verify Email
            </button>
          </form>

         <div className="flex justify-between md:w-[75%] lg:w-[100%]">
          <div className="flex gap-3 cursor-pointer hover:-translate-x-1 transition-all duration-200">
            <CgArrowLongLeft fontSize={24} />
            <Link to="/login">
              <p>Back to Login</p>
            </Link>
          </div>

          <button onClick={() => dispatch(sendOtp(signupData.email, navigate))} className="flex gap-2 items-center text-blue-300">
            <RxCountdownTimer fontSize={20}/>
            <p>Resend it</p>
          </button>
          </div>         
        </div>
      )}
    </div>
  );
};
