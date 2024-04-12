const express = require("express");
const router = express.Router();

const {
  createCourse,
  editCourse,
  deleteCourse,
  getAllCourses,
  getInstructorCourses,
  getFullCourseDetails,
  getCourseDetails,
} = require("../controllers/Course");

const {
  createCategory,
  showAllCategories,
  categoryPageDetails,
} = require("../controllers/Category");

const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/SubSection");

const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

//important middleware
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");


const {
  updateCourseProgress
} = require("../controllers/courseProgress");

//courses can only be created by instructors
router.post("/createCourse", auth, isInstructor, createCourse);

//update course
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse);

//add a section to a course
router.post("/addSection", auth, isInstructor, createSection);

//update section
router.post("/updateSection", auth, isInstructor, updateSection);

//delete a section
router.post("/deleteSection", auth, isInstructor, deleteSection);

//add subsection
router.post("/addSubSection", auth, isInstructor, createSubSection);

//update subSection
router.post("/updateSubSection", auth, isInstructor, updateSubSection);

//delete subsection
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

//get all registered courses
router.post("/getAllCourses", getAllCourses);

// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails)

//get details for specific course
router.post("/getCourseDetails", getCourseDetails);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// *******************************************************************
//                  Category
// **********************************************************************

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

//********************************************************************
//                  Rating and Review router
//********************************************************************

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRAting", getAverageRating);
router.get("/getReviews", getAllRating)

module.exports = router;
