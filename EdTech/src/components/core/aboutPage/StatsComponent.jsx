import React from 'react'

const stats=[
  {count:"5K", label:"Active Students"},
  {count:"10+", label:"Mentors"},
  {count:"200+", label:"Courses"},
  {count:"50+", label:"Awards"},

];
export const StatsComponent= () => {
  return (
    <section>
      <div>
        <div className='flex lg:flex-row sm:flex-col gap-x-32 sm:gap-y-8'>
          {
            stats.map((data,index)=>{
                return (
                  <div key={index} className='text-center'>
                    <h1 className='text-xl font-bold'>{data.count}</h1>
                    <h2 className='text-l text-richblack-300 font-medium'>{data.label}</h2>
                  </div>
                )
            }
          )}
        </div>
      </div>
    </section>
  )
}
