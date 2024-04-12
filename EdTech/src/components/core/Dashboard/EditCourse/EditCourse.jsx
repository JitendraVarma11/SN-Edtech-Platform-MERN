import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { RenderStep } from '../AddCourse/RenderStep';
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { setCourse, setEditCourse } from '../../../../slices/courseSlice';

export const EditCourse = () => {

    const dispatch=useDispatch();
    const {courseId}=useParams();
    const {course}=useSelector((state)=>state.course);
    const [loading,setLoading]=useState();
    const {token}=useSelector((state)=>state.auth);


    useEffect(()=>{
        const populateCourseDetails=async()=>{
            setLoading(true);
            const result=await getFullDetailsOfCourse(courseId,token);

            if(result){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result.courseDetails));
            }
            setLoading(false);

        }
        populateCourseDetails();
    },[])


    if(loading){
        return (
            <div>Loading...</div>
        )
    }

  return (
    <div>

        <h1>Edit Course</h1>
        <div>
            {
                course ? (<RenderStep/>):(<p>Course Not Found</p>)
            }
        </div>

    </div>
  )
}
