const express = require("express");
const router = express.Router();
const { auth, isInstructor } = require("../middlewares/auth");


const {
  deleteProfile,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
} = require("../controllers/Profile");

//delete user routes
router.delete("/deleteProfile",auth, deleteProfile);
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);

//get enrolled course
router.get("/getEnrolledCourses",auth, getEnrolledCourses)
router.put(
  "/updateDisplayPicture",
  auth,
  updateDisplayPicture
);
router.get("/instructorDashboard",auth,isInstructor,instructorDashboard);

module.exports = router;
