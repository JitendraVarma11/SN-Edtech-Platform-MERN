import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import { HighlightText } from "./HighlightText";
import { CTAButton } from "./CTAButton";
import {FaArrowRight} from "react-icons/fa";

export const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex lg:flex-row sm:flex-col gap-20 lg:items-center">
        <div className="lg:w-[50%]">
          <img src={Instructor} alt="instructor_image"  className="lg:w-[350px] sm:w-[300px] object-fit-cover shadow-[15px_15px]" />
        </div>

        <div className="lg:w-[50%] flex flex-col gap-10">
            <div className="text-4xl font-semibold lg:w-[50%]">Become an <HighlightText text={"Intructor"}/></div>
            <p className="font-medium text-[1rem] lg:w-[80%] text-richblack-300"> Instructor from around the world tech millions of strudents on StudyNotion. We provide the tools and skills to teach what you love </p>

            <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center ">
                    Start Learning Today
                    <FaArrowRight/>
                </div>
            </CTAButton>
            </div> 
        </div>
      </div>
    </div>
  );
};
