 import React from 'react'
 import reviews from "./data";
 import Testimonial from './Components/Testimonial'

const App = () => {
  return (
    <div className=" flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-slate-400">
      <div className=" text-center">
       
        <h1 className=" text-4xl font-bold  mb-10">Our Testimonials</h1>

        <div className="bg-violet-900 h-[4px] w-1/6 mx-auto"></div>

        <Testimonial reviews={reviews}></Testimonial>
      </div>
      
    </div>
  )
}

export default App
