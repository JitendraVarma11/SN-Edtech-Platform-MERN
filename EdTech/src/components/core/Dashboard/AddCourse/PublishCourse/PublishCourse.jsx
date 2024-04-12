import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../../../../common/IconButton";
import { resetCourseState } from "../../../../../slices/courseSlice";
import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI";
import {COURSE_STATUS} from "../../../../../utils/constants"
import {useNavigate } from "react-router-dom";
import  {setStep} from "../../../../../slices/courseSlice";

export const PublishCourse = () => {
  
    const { register, handleSubmit, setValue,getValues,   formState: { errors }} = useForm();

  const { course } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    if(course?.status === COURSE_STATUS.PUBLISHED){
      setValue("public",true);
    }
  })

  const goToCourses=()=>{
    dispatch(resetCourseState());
    navigate("/dashboard/my-courses");
  }
const handleCoursePublish=async ()=>{
  if(course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true || (course.status === COURSE_STATUS.DRAFT && getValues("public") === false)){
    // no updation form 
    //no need to api call 
    goToCourses();
    return;
  }


  //if form is updated
  const formData=new FormData()
  formData.append("courseId",course._id);
  const courseStatus=getValues("public") ?COURSE_STATUS.PUBLISHED :COURSE_STATUS.DRAFT;

  formData.append("status", courseStatus);

  setLoading(true);

  const result=await editCourseDetails(formData, token);

  if(result){
    goToCourses();
  }
  setLoading(false);
}

  const onSubmit = () => {
    handleCoursePublish();
  };
  return (
    <div className="text-white rounded-md bg-richblack-800 p-6 border border-richblack-700">
      <p className="text-lg font-bold mb-5">Publish Course</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex gap-3 items-center font-medium">
          <input
            type="checkbox"
            name="public"
            id="public"
            {...register("public", { required: true })}
            className="rounded h-4 w-4"
          />
          <label htmlFor="public" className="text-richblack-300">Make this Course as Public</label>
          </div>
          {
            errors.public && (
              <span className="text-sm text-pink-200 tracking-wide ml-7">please check the box before publish</span>
            )
          }
          

        </div>

        <div className="flex justify-end gap-x-2">
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Back
          </button>
        <IconButton
          disabled={loading}
          // type={"submit"}
        >
          <div className="flex gap-2 items-center justify-center bg-yellow-50 text-richblack-900 py-2 px-4 font-bold rounded-md">
          Publish
          </div>
        </IconButton>

        </div>

      </form>
    </div>
  );
};
