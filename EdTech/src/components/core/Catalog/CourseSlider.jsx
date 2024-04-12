import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Includes core Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Pagination, Autoplay, Navigation} from "swiper/modules";
import { Course_Card } from './Course_Card'; // Assuming correct import path

export const CourseSlider = ({ Courses }) => {
  return (
    <div>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{clickable:true}}
          modules={[Autoplay,Pagination,Navigation]}
          className='mySwiper w-[98%]'
          autoplay={{ delay: 2500,
          disableOnInteraction:false,
          }}
          navigation={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            }
          }}
          style={{
            '--swiper-pagination-color': '#ffffff',
            '--swiper-pagination-bullet-inactive-color': '#ffffff', 
        }}
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <Course_Card course={course} Height="lg:h-[300px] sm:h-[250px] sm:w-[330px] md:w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  );
};
