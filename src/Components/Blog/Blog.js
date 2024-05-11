import React from 'react'
import { data } from './Data'
import profile from '../../Assets/images/profile.png'

const Blog = () => {
   return (
      <>
         <div className='py-10 my-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mx-8 md:mx-14 '>
               {data.map((d, index) => (
                  <div key={index} className='flex flex-col'>
                     <div className='rounded-xl'>
                        <img className='w-full mx-auto mb-4 rounded-xl' src={d.image} alt="" />
                     </div>
                     <p className='font-bold mb-4'>{d.title}</p>
                     <p className='mb-4'>{d.content}</p>
                     <div className='flex my-6'>
                        <div>
                           <img className='w-12 rounded-full' src={profile} alt="" />
                        </div>
                        <p className='ml-2'>
                           <span className='text-xs font-semibold'>{d.profile}</span><br />
                           <span className='text-xs text-gray-500 font-semibold'>{d.date}</span>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default Blog