import React from "react";
import { CTAButton } from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} justify-between gap-10  mt-20 md:flex-col sm:flex-col md:items-center sm:items-center `}>
      <div className="w-[50%] flex flex-col gap-8 md:w-11/12 sm:w-11/12">
        {heading}
        <div className=" text-richblack-300 font-bold ">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <div className="flex gap-2 items-center">{ctabtn2.btnText}</div>
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative h-fit flex text-10 w-[100%] py-4 lg:w-[500px] bg-richblue-200  bg-opacity-5">

      <div className={`absolute rounded-full mt-20 ml-24 opacity-20 shadow-[0px_0px_100px_100px] ${backgroundGradient}`}></div>      
        
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-semibold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex gap-2 font-bold font-mono ${codeColor} pr-2 `}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display:"block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};
