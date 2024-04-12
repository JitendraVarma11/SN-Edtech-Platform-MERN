import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../common/IconButton";
import { FiEdit } from "react-icons/fi";

export const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-richblack-5">My Profile</h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 my_profile">
        <div className="flex gap-6 items-center my_profile1">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="">
            <p className="text-richblack-5 font-bold text-lg">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-richblack-300 font-medium">{user?.email}</p>
          </div>
        </div>

        <IconButton
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <div className="flex gap-2 items-center justify-center bg-yellow-50 text-richblack-900 py-2 px-4 font-bold rounded-md">
            Edit <FiEdit />
          </div>
        </IconButton>
      </div>

      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 my_profile_about">
        <div className="flex flex-col gap-7 ">
          <p className="text-richblack-5 font-bold text-lg">About</p>
          <p className="text-richblack-300 font-medium">
            {
            user?.additionalDetails?.about ?? "Write something about yourslef"
            }
          </p>
        </div>
        <IconButton
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <div className="flex gap-2 items-center justify-center bg-yellow-50 text-richblack-900 py-2 px-4 font-bold rounded-md about_btn">
            Edit <FiEdit />
          </div>
        </IconButton>
      </div>

      <div className="flex flex-col justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 gap-5">
        <div className="flex items-center justify-between">
          <p className="text-richblack-5 font-bold text-lg">Personal Details</p>
          <IconButton
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <div className="flex gap-2 items-center justify-center bg-yellow-50 text-richblack-900 py-2 px-4 font-bold rounded-md">
              Edit <FiEdit />
            </div>
          </IconButton>
        </div>

        <div className="flex gap-20 my_profile_details">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-richblack-300 font-medium">First Name</p>
              <p className="text-richblack-5 font-bold">{user?.firstName}</p>
            </div>
            <div>
              <p className="text-richblack-300 font-medium">Email</p>
              <p className="text-richblack-5 font-bold">{user?.email}</p>
            </div>
            <div>
              <p className="text-richblack-300 font-medium">Gender</p>
              <p className="text-richblack-5 font-bold">{user?.additionalDetails?.gender ?? "Add Your Gender"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-richblack-300 font-medium">Last Name</p>
              <p className="text-richblack-5 font-bold">{user?.lastName ?? "Add Your Last Name"}</p>
            </div>
            <div>
              <p className="text-richblack-300 font-medium">Phone Number</p>
              <p className="text-richblack-5 font-bold">
                {user?.additionalDetails?.contactNumber ??
                  "Add Your Contact Number"}
              </p>
            </div>
            <div>
              <p className="text-richblack-300 font-medium">Date of Birth</p>
              <p className="text-richblack-5 font-bold">{user?.additionalDetails?.dateOfBirth ?? "Add Your DOB"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
