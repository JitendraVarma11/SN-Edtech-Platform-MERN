import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline=[
    {
        logo: logo1,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        logo: logo2,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        logo: logo3,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
    {
        logo: logo4,
        heading:"Leadership",
        description:"Fully commited to the success company",
    },
]
export const TimeLineSection = () => {
  return (
    <div className=''>
        <div className='lg:flex gap-48'>
            <div className='flex flex-col lg:w-[45%] gap-5 lg:ml-[-150px]'>
                {
                    timeline.map((element,index)=>{
                        return(
                            <div className='flex flex-col' key={index} >
                            <div className='flex gap-6'>
                                <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                                    <img src={element.logo} alt="timeline_image" />

                                </div>
                                <div >
                                        <h2 className='font-semibold tex-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.description}</p>
                                </div>
                            </div>
                            {
                                index!=timeline.length-1?<div className=' w-[1px] h-10 ml-6 bg-richblack-100'></div> :""
                            }
                        </div> 
                        )
                    })
                }
            </div>
            <div className='relative sm:mt-10'> 
                    <div className='absolute lg:w-[300px] rounded-full lg:mt-40  sm:mt-32 ml-28 opacity-50 shadow-[0px_0px_100px_100px] shadow-blue-300 z-10'></div>
                    <img src={timelineImage} alt='timelineimage' className=' relative h-fit object-fit-cover lg:w-[550px] z-40'/>

                    <div className='absolute bg-caribbeangreen-700 flex lg:flex-row sm:flex-col text-white uppercase left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] sm:translate-x-[-50%] sm:translate-y-[-50%] lg:p-6 sm:p-4 z-50'>

                        <div className='flex gap-5 items-center lg:border-r sm:mb-6 lg:mb-0 border-caribbeangreen-300 px-6'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className=' text-caribbeangreen-300 text-sm sm:ml-6'>Years of Experince</p>
                        </div>
                        <div className='flex gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250</p>
                            <p className=' text-caribbeangreen-300  text-sm'>Types of Courses</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
