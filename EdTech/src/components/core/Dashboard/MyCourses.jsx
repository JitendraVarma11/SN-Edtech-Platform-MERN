import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CoursesTable } from "./InstructorCourses/CoursesTable"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import {IconButton} from "../../common/IconButton";

export const MyCourses=()=>{
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
  }, [])
  
  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="md:text-3xl sm:text-2xl font-medium text-richblack-5">My Courses</h1>
        <IconButton
          onClick={() => navigate("/dashboard/add-course")}
        >
            <div className="flex gap-2 border-[2px] rounded-md border-yellow-50 text-yellow-5 md:text-lg sm:text-sm font-bold items-center py-2 px-3">
            Add Courses
            <VscAdd />
            </div>
        </IconButton>
      </div>
      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}