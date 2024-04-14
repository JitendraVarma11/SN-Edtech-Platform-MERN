import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import { CountryCode } from "../../data/countrycode";
import { toast } from "react-hot-toast";

export const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log(data);
    try {
    const toastId = toast.loading("Loading...");
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );

      console.log(response);
      toast.success("Your message sent successfully");
      toast.dismiss(toastId);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong,try again");
      toast.dismiss(toastId);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phonenumber: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-3">
        <div className="flex lg:flex-row sm:flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
              className="rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
            />
            {errors.firstname && (
              <span className="text-[10px] text-pink-200">
                Please enter your name
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              {...register("lastname")}
              className="rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
          />
          {errors.email && (
            <span className=" text-[10px] text-pink-200">
              Please Enter Email
            </span>
          )}
        </div>

        {/* phoneno */}
        <div className="flex flex-col mt-5">
          <label htmlFor="phonenumber">Phone Number</label>
          {/* dropdown */}
          <div className="flex gap-5">
            <select
              name="dropdown"
              id="dropdown"
              {...register("countrycode", { required: true })}
              className="w-[18%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
            >
              {CountryCode.map((element, index) => {
                return (
                  <option value={element.code} key={index}>
                    {element.code}-{element.country}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="1234567890"
              {...register("phonenumber", {
                required: {
                  value: true,
                  message: "Please Enter Phone Number",
                },
                maxLength: { value: 10, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
              className="w-[80%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
            />
          </div>
          {errors.phonenumber && (
            <span className=" text-[10px] text-pink-200">
              Please Enter Valid Phone Number
            </span>
          )}
        </div>

        {/* message */}
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message here"
            {...register("message", { required: true })}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border-b-[0.5px] border-richblack-100"
          />
          {errors.message && (
            <span className=" text-[10px] text-pink-200">
              Please Enter your message.
            </span>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-bold text-richblack-900"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
