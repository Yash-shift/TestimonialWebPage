import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';


const Card = (props) => {

    let reviews= props.reviews
  return (
    <div className="flex flex-col md:relative">


      <div  className='absolute top-7 mx-auto z-[10]'>
        {/* <img className="aspect-square rounded-full h-1 w-2 z-25"
         src={reviews.image}/> */}

      </div>

      <div className='text-center mt-8 mb-8'>
        <p className='font-bold  text-4xl capitalize'>{reviews.name}</p>
      </div> 
      
      <div className='text-center mt-7'>
        <p className=' font-bold text-sm uppercase'>{reviews.job}</p>
      </div> 


       <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft/></div>

       <div className='text-center mt-4 text-slate-500'>
        <p>{reviews.text}</p>
       </div> 

       <div className='text-violet-400 mx-auto mt-5 text-center'><FaQuoteRight/></div>

      
  
    </div>
  )
}

export default Card
