import React from 'react';
import {data} from './Data'


function Trusted() {
  return (
    <>
    <div className='py-10 my-10'>
        
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mx-16 '>
            {data.map((d, index) => (
               <div key={index} className='bg-gray-200 hover:bg-gray-100 hover:shadow-sm p-6'>
                  <img className='w-14 mx-auto mb-4' src={d.image} alt="" />
               </div>
            ))}
         </div>
      </div>
    </>
  )
}

export default Trusted