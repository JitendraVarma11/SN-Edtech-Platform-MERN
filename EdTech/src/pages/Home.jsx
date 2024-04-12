import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HighlightText } from "../components/core/HomePage/HighlightText";
import { CTAButton } from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import { CodeBlocks } from "../components/core/HomePage/CodeBlocks";
import { TimeLineSection } from "../components/core/HomePage/TimeLineSection";
import { LearningLanguageSection } from "../components/core/HomePage/LearningLanguageSection";
import { InstructorSection } from "../components/core/HomePage/InstructorSection";
import { ExploreMore } from "../components/core/HomePage/ExploreMore";
import {Footer} from "../components/common/Footer";
import { ProfileDropDown } from "../components/core/Auth/ProfileDropDown";
import { ReviewSlider } from "../components/common/ReviewSlider";
export const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto max-w-maxContent flex flex-col w-11/12 items-center text-white justify-between mt-16 p-1">
        <Link to={"/signup"}>
          <div className="group mx-auto rounded-full bg-richblack-800 text-richblack-200 shadow-md shadow-richblack-700 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center lg:text-4xl sm:text-3xl font-semibold mt-7">
          Empower your future with <HighlightText text={"Coding Skill"} />
        </div>
        <div className="lg:w-[90%] text-center lg:text-lg sm:text-md mt-4 text-richblack-300 font-semibold">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn more
          </CTAButton>
          <CTAButton active={false} linkto={"/signup"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="relative mx-3 my-12 w-8/12 object-fit-cover shadow-[12px_12px_0px] shadow-white">
          <div
            className={`absolute rounded-full ml- mt-48 opacity-20 shadow-[0px_0px_80px_80px] shadow-blue-400 z-10`}
          ></div>

          <div
            className={`absolute rounded-full ml-72 mt-10 w-[200px] opacity-20 shadow-[0px_0px_80px_80px] shadow-blue-400 z-10`}
          ></div>
          <video muted loop autoPlay className="z-20 relative">
            <source src={Banner} />
          </video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"Coding Potential"} />
                with out online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing thier knowledge with you"
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport", initial-scale=1.0">
          <title>Example</title>
          </head>
          <body>
          <h1>This is Example</h1>
          </body> 
          </html>`}
            codeColor={"text-white"}
            backgroundGradient={"shadow-yellow-25"}
          />

          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighlightText text={"Coding in seconds"} />
                with out online courses
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment neabs you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport", initial-scale=1.0">
          <title>Example</title>
          </head>
          <body>
          <h1>This is Example</h1>
          </body> 
          </html>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"shadow-blue-100"}
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg lg:h-[310px] s:h-full">
          <div className="w-11/12 flex-col max-w-maxContent flex items-center gap-5 mx-auto justify-between">
            <div className="lg:h-[150px]"></div>

            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gag-3 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 flex-col max-w-maxContent flex items-center gap-5 mx-auto justify-between">
          <div className="flex lg:flex-row gap-5 mb-10 lg:mt-[95px] sm:flex-col items-center">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-[1rem]">
                The modern StudyNotion is the dictates its own term. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              
              <CTAButton active={true} linkto={"/signup"}>
                Learn more
              </CTAButton>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* Section 3 */}
      <div className="mx-auto max-w-maxContent flex flex-col w-11/12 items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h2 className="text-center lg:text-4xl font-semibold lg:mt-10">
          Review from others Learners
        </h2>
       <ReviewSlider/>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};
