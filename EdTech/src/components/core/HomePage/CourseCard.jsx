import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

export const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[330px] rounded-sm gap-10 p-5 cursor-pointer mb-6
      ${
        currentCard == cardData?.heading
          ? "bg-white text-black shadow-[15px_15px] shadow-yellow-25"
          : "bg-richblack-700"
      }
       transition-all duration-400
    `}
      onClick={() => {
        setCurrentCard(cardData.heading);
      }}
    >
      <p className="text-xl font-semibold">{cardData.heading}</p>
      <p className="text-sm text-richblack-300 py-4">
        {cardData.description.length > 100
          ? cardData.description.substring(0, 160) + "..."
          : cardData.description}
      </p>

      <div
        className={`flex justify-between mt-16 text-richblack-300`}
      >
        <div className={`flex gap-2 items-center ${currentCard == cardData?.heading ? "text-blue-300" :""}`}>
          <div>
            <FaUserGroup />
          </div>
          {cardData.level}
        </div>

        <div className={`flex gap-2 items-center ${currentCard == cardData?.heading ? "text-blue-300" :""}`}>
          <div>
            <ImTree/>
          </div>
          {cardData.lessonNumber + " Lesson"}
        </div>
      </div>
    </div>
  );
};
