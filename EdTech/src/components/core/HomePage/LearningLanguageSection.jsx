import React from 'react'
import {HighlightText} from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import { CTAButton } from './CTAButton';

export const LearningLanguageSection = () => {
  return (
    <div className='mt-[100px]'>
        <div className='flex flex-col gap-5 items-center mb-20'>
            <div className='lg:text-4xl sm:text-3xl font-semibold text-center'>
              Your Swiss Knife for <HighlightText text={"learning any language"}/>
            </div>
            <div className='lg:text-center text-richblack-600 text-base font-medium mx-auto w-[70%]'>
              Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progess tracking, custom schedule and more.
            </div>

            <div className='flex lg:flex-row sm:flex-col items-center justify-center mt-5'>
                <img src={know_your_progress} alt="know_your_image" className='object-contain lg:-mr-32'/>
                <img src={compare_with_others} alt="compare_with_other" className='object-contain' />
                <img src={Plan_your_lessons} alt="plan_yoour_lessons" className='object-contain lg:-ml-36'/>
            </div>

            <div className='w-fit'>
              <CTAButton active={true} linkto={"/signup"}>Learn more</CTAButton>
            </div>
        </div>
    </div>
  )
}
