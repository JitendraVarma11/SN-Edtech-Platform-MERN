import React from "react";
import { HighlightText } from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import { Quote } from "../components/core/aboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import { StatsComponent } from "../components/core/aboutPage/StatsComponent";
import { LearningGrid } from "../components/core/aboutPage/LearningGrid";
import { ContactFormSection } from "../components/core/aboutPage/ContactFormSection";
import {Footer} from "../components/common/Footer";
import { ReviewSlider } from "../components/common/ReviewSlider";


export const About = () => {
  return (
    <div className="text-white">
      {/* section 1 */}
      <section className="mx-auto flex items-center flex-col justify-between text-white bg-richblack-700 p-7">
        <div className="flex flex-col items-center gap-10">
          <header className="flex flex-col items-center gap-10 text-center">
            <p className="text-3xl font-bold lg:w-[50%] text-center">
            Driving Innovation in Online Education for a{" "}
            <HighlightText text={"Brighter Future"} />
            </p>
            <p className=" text-richblack-200 lg:w-[50%] text-center text-sm">
              StudyNotion is at the forefront of driving innovation in online
              education. We're passionate about creatinf a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex lg:flex-row sm:flex-col lg:gap-x-10 sm:gap-y-6  lg:-mb-32">
            <img src={BannerImage1} width={300} height={300}/>
            <img src={BannerImage2} width={300} height={300}/>
            <img src={BannerImage3} width={300} height={300}/> 
          </div>
        </div>
      </section>
 
      {/* section2 */}
      <section className="mx-auto lg:mt-44 sm:mt-10 flex w-11/12 max-w-maxContent items-center flex-col justify-between gap-10 text-white">
        <Quote />
      </section>

      {/* section 3 */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent items-center flex-col justify-between gap-10 text-white">
        <div className="flex flex-col gap-32">
          {/* story div */}
          <div className="flex lg:flex-row sm:flex-col items-center justify-between lg:w-[90%]">
            <div className="flex flex-col gap-5 lg:w-[50%] sm:mb-10 lg:mb-0">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-3xl font-semibold text-transparent lg:w-[70%] ">Our Founding Strory</h1>
              <p className="text-richblack-300 text-sm font-medium"> 
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-richblack-300 text-sm font-medium">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="lg:w-50% shadow-[0_0_15px_0] shadow-brown-50">
              <img src={FoundingStory} alt="founding_story" width={400}/>
            </div>
          </div>

          {/* vision and mission div */}
          <div className="flex lg:flex-row sm:flex-col lg:gap-28 sm:gap-14">
            {/* left */}
            <div className="flex flex-col lg:gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl font-semibold text-transparent lg:w-[70%] ">Our Vision</h1>
              <p className="text-richblack-300 text-l font-medium">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* right */}
            <div className="flex flex-col lg:gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-3xl font-semibold lg:w-[70%] ">Our Mission</h1>
              <p className="text-richblack-300 text-l font-medium">Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="mx-auto mt-20 flex items-center flex-col justify-between gap-10 text-white bg-richblack-700 p-7">
      <StatsComponent/>
      </section>

        {/* section 5 */}
        <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent items-center flex-col justify-between gap-10 text-white">
          <LearningGrid/>
          <ContactFormSection/>
        </section>

        {/* section 6 */}
        <section className="mx-auto my-20 flex w-11/12 flex-col items-center text-white">
          <h1 className="text-center lg:text-4xl sm:text-2xl font-semibold mt-8">Review from other learners</h1>

          <ReviewSlider/>

        </section>

        <Footer/>   
         </div>
  );
};
