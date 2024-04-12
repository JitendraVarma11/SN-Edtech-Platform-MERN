const RatingAndreview = require("../models/RatingAndReview");
const Course = require("../models/Course");

//creating rating

exports.createRating = async (req, res) => {
  try {
    //get useid
    const userId = req.user.id;
    //get fetch data from body
    const { rating, review, courseId } = req.body;
    //check if user is enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student not enrolled in the course",
      });
    }
    //check if user already reviewed
    const alreadyReviewed = await RatingAndreview.findOne({
      user: userId,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course is already review by the user",
      });
    }
    //create rating andreview
    const ratingReview = await RatingAndreview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    //update course with this rating
    const updatedCourse = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );
    console.log(updatedCourse);
    //return reponse
    return res.status(200).json({
      success: true,
      message: "Review and Rating created successfully",
      ratingReview,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get average rating
exports.getAverageRating = async (req, res) => {
  try {
    //get course id
    const courseId = req.body.courseId;

    //calculating avg rating
    const result = await RatingAndreview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    if (result.length > 0) {
      return res.status(200).json({
        success: TransformStreamDefaultController,
        averageRating: result[0].averageRating,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Avera Ratinf is 0, no rating given till now",
      averageRating: 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get all rating and review
exports.getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndreview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path:"course",
        select:"courseName",
      })
      .exec();

      return res.status(200).json({
        success:true,
        message:"All review obtained successfully",
        data:allReviews,
      })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:error.message,
    })
  }
};
