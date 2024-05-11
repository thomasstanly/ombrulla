import React from 'react'
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SquareIcon from '@mui/icons-material/Square';
import safety from '../../Assets/images/safetyr.6f7bac17_2OxpR.webp'
import reuse from '../../Assets/images/envsafety.45f1043e_Z8wyMD.webp'

const Tracking = () => {
   return (
      <>
         <div className='mx-10 my-20 gap-10 flex flex-col md:flex-row '>
            <div className='flex-1 flex flex-col'>
               <p className=' my-12 font-sans font-semibold'> <SquareIcon className='text-sm text-blue-900'
                  style={{ fontSize: '10px' }} />&nbsp;&nbsp;&nbsp;<span className='text-sm'>PRODUCTS</span></p>
               <p className='mb-12 text-4xl font-semibold'>Tracking Tools</p>
               <p className='mb-12 text-gray-500'>
                  AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers'
                  movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing
                  energy usage, improving waste management, and promoting resource efficiency.
               </p>
            </div>
            <div className='flex-1 flex flex-col bg-gray-100 rounded-2xl p-8'>
               <p className='text-2xl font-normal'>RTLS - Workplace Safety</p>
               <p className='text-gray-500 mt-12'>
                  IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations
                  in real-time for proactive hazard detection.
               </p>
               <div className="flex justify-center">
                  <img className='w-2/4 mt-12' src={safety} alt="safety" />
               </div>
               <Link className='ml-10 mt-12'>Read more <ArrowOutwardIcon className='text-blue-500' /> </Link>
            </div>
            <div className='flex-1 flex flex-col bg-gray-100 rounded-2xl p-8'>
               <p className='text-2xl font-normal'>Environmental Sustainability</p>
               <p className='text-gray-500 mt-12'>
                  AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management,
                  and promoting resource efficiency.
               </p>
               <div className="flex justify-center">
                  <img className='w-2/4 mt-12' src={reuse} alt="reuse" />
               </div>
               <Link className='ml-10 mt-12'>Read more <ArrowOutwardIcon className='text-blue-500' /> </Link>
            </div>
         </div >
      </>
   )
}
export default Tracking