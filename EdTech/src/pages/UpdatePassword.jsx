import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { resetPassword } from "../services/operations/authAPI";
import {CgArrowLongLeft} from "react-icons/cg"

export const UpdatePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const { password, confirmPassword } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };
  return (
    <div className="text-white flex flex-col place-items-center justify-center min-h-[calc(100vh-3.5rem)]">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-[30%]">
          <h1 className="text-4xl font-bold">Choose new Password</h1>
          <p className="text-richblack-300 py-3">Almost done. Enter your new password and you are all set.</p>

          <form onSubmit={handleOnSubmit}>
            <label>
              <p className="text-richblack-50 mt-4 py-2">
                New Password <sup className="text-[#ff0000]">*</sup>
              </p>
              <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="New Password"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
              />

              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <AiFillEyeInvisible fontSize={24} className="-ml-10 cursor-pointer" />
                ) : (
                  <AiFillEye fontSize={24} 
                  className="-ml-10 cursor-pointer"
                  />
                )}
              </span>
              </div>
            </label>

            <label>
              <p className="text-richblack-50 mt-4 py-2">
                Confirm New Password <sup className="text-[#ff0000]">*</sup>
              </p>
              <div className="flex items-center">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
              />

              <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (
                  <AiFillEyeInvisible fontSize={24} className="-ml-10 cursor-pointer"  />
                ) : (
                  <AiFillEye fontSize={24} className="-ml-10 cursor-pointer" />
                )}
              </span>
              </div>
            </label>

            <button type="submit" className="text-center my-7 w-full text-richblack-700 rounded-md text-[13px] py-3 px-6 font-bold bg-yellow-50 shadow shadow-richblack-700 hover:scale-105 transition-all duration-200">Reset Password</button>
          </form>

          <div className="flex gap-3 cursor-pointer hover:-translate-x-1 transition-all duration-200">
            <CgArrowLongLeft fontSize={24} />
            <Link to="/login">
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
