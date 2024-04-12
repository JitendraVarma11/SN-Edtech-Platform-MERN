import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { formattedDate } from "../../../../utils/dateFormatter";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI";
import { COURSE_STATUS } from "../../../../utils/constants";
import { ConfirmationModal } from "../../../common/ConfirmationModal";

export const CoursesTable = ({ courses, setCourses }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const TRUNCATE_LENGTH = 15;

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  // console.log("All Course ", courses)

  return (
    <div>
      <table>
        <thead>
          <tr className="hidden md:flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
            <th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Courses
            </th>
            <th className="text-left text-sm font-medium uppercase text-richblack-100">
              Price
            </th>
            <th className="text-left text-sm font-medium uppercase text-richblack-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {courses?.length === 0 ? (
            <tr>
              <td className="py-10 text-center text-2xl font-medium text-richblack-100">
                No courses found
                {/* TODO: Need to change this state */}
              </td>
            </tr>
          ) : (
            courses?.map((course) => (
              <tr
                key={course._id}
                className="flex flex-col md:flex-row md:gap-x-10 border-b border-richblack-800 px-6 py-8"
              >
                <td className="flex gap-x-4 md:flex-1">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="md:h-[150px] md:w-[220px] sm:w-[130px] sm:h-[90px]  rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-richblack-5">
                      {course.courseName}
                    </p>
                    <div className="text-xs text-richblack-300 sm:hidden md:block">
                      {course.courseDescription.split(" ").length >
                      TRUNCATE_LENGTH
                        ? `${course.courseDescription
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ")}...`
                        : course.courseDescription}
                    </div>

                    <p className="text-[12px] text-white">
                      Created: {formattedDate(course.createdAt)}
                    </p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    ) : (
                      <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-yellow-50 px-2 py-[2px] text-[12px] font-medium text-yellow-50 bg-opacity-20">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-50 text-richblack-700">
                          <FaCheck size={8} />
                        </div>
                        Published
                      </div>
                    )}
                  </div>
                </td>
              
                <td className=" text-sm font-medium text-richblack-100 md:mt-16">
                  ₹{course.price}
                </td>
                <td className="text-sm font-medium text-richblack-100 flex gap-x-1">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-course/${course._id}`);
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300 sm:ml-40 md:ml-0"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2:
                          "All the data related to this course will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleCourseDelete(course._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      });
                    }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000] sm:-mr-40 md:mr-0"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </td>
                
              </tr>
            ))
          )}
        </tbody>
      </table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};
