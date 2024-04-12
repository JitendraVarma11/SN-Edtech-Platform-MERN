import React, { useState } from "react";
import { HighlightText } from "./HighlightText";
import { HomePageExplore } from "../../../data/homepage-explore";
import { CourseCard } from "./CourseCard";
const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

export const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag == value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div className="mt-10">
      <div className="lg:text-4xl md:text-2xl font-semibold text-center">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richblack-300 lg:text-[1rem]  mt-3">
        Learn to build anything you can imagine
      </p>

      <div className="hidden md:flex rounded-full bg-richblack-800 border-r-richblack-100 mt-5 px-1 py-1 mb-40">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`lg:text-[1rem] md:text-sm sm:text-sm flex items-center lg:gap-2 md:gap-1 ${
                currentTab == element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200 "
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="lg:h-[150x] "></div>

      {/* course card ka group */}
      <div className="lg:absolute lg:ml-[-200px] md:flex md:flex-row flex-col gap-8  lg:mt-[-120px] sm:mt-4 items-center">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};
