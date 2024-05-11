import React from 'react'
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SquareIcon from '@mui/icons-material/Square';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ai_food from '../../Assets/images/ai-food2.7e761c87_TNwbv.webp'
import drone from '../../Assets/images/bridge.828c5106_Z2mJkOa.webp'
import petran from '../../Assets/images/petran-logo.99970d82_p9MFD.webp'
import connection from '../../Assets/images/asset-performance-management-software.82e2a11d_164sPU.webp'
import './Crafting.css'

const Crafting = () => {
   return (
      <>
         <div className='bgImage flex justify-center'>
            <div className='mx-6 md:mx-5 my-16 flex flex-col justify-evenly '>
               <div>
                  <p className=' mt-2 font-sans font-semibold'> <SquareIcon className='text-sm text-blue-900'
                     style={{ fontSize: '10px' }} />&nbsp;&nbsp;&nbsp;Leader in AI visual inspection</p>
               </div>
               <div>
                  <p className='mt-2 text-xl md:text-6xl font-sans font-semibold'> Crafting Tomorrow's <br /> World with <span className='font-normal text-blue-700'>AI Excellence</span> </p>
               </div>
               <div>
                  <p className='text-gray-500  mt-2'>
                     Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting <br /> valuable information from various sources like photos, videos, and data lakes.
                     Our AI visual <br /> inspection system enables businesses to enhance their bottom line through precise defect <br /> detection and actionable insights.
                  </p>
               </div>
               <div className='flex items-center my-2'>
                  <button className='button md:ml-6 bg-blue-700 w-7 h-7 md:w-14 md:h-14 rounded-full hover:bg-white group'>
                     <PlayArrowIcon className='text-white group-hover:text-blue-700' />
                  </button>
                  <span className='ml-6 hover:text-blue-700 font-semibold cursor-pointer '>watch now</span>
               </div>
            </div>
         </div>

         <div className='mx-6 md:ml-20 md:mr-28 my-24 flex gap-5 justify-between'>
            <div className='md:w-2/4'>
               <p className='font-sans font-semibold'> <SquareIcon className='text-sm text-blue-900'
                  style={{ fontSize: '10px' }} />&nbsp;&nbsp;&nbsp;AI VISUAL INSPECTION </p>
               <p className='mt-5 text-xl md:text-3xl font-sans'> Enhancing quality through AI-based <br /> visual inspection </p>
               <p className='mt-5 text-sm text-gray-500'>
                  Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.
               </p>
               <ul className='mt-5 ml-9 list-disc text-sm text-gray-500'>
                  <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
                  <li>It boosts throughput and cuts down on labour expenses</li>
                  <li>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
                  <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
               </ul >
               <button className='mt-7 button bg-blue-700 text-sm py-1 px-3 md:text-md md:py-3.5 md:px-8 rounded-full hover:bg-white group'   >
                  <span className='text-white font-semibold group-hover:text-blue-700'>
                     Schedule call
                  </span>
               </button>
               <Link className='ml-10'>Read more <ArrowOutwardIcon className='text-blue-500' /> </Link>
            </div>
            <div className='hidden md:block'>
               <img className='ai_foods rounded-xl' src={ai_food} alt="AI food" />
            </div>
         </div>

         <div className='mx-6 md:ml-20 md:mr-28 my-24 flex gap-5 justify-between'>
            <div className='hidden md:block '>
               <img className='ai_foods rounded-xl' src={drone} alt="AI food" />
            </div>
            <div className='md:w-2/4'>
               <p className='font-sans font-semibold'> <SquareIcon className='text-sm text-blue-900'
                  style={{ fontSize: '10px' }} />&nbsp;&nbsp;&nbsp;AI INFRASTRUCTURE INSPECTION</p>
               <p className='mt-5 text-xl md:text-3xl font-sans'> Enhances Efficiency, Safety, and Cost-Effectiveness </p>
               <p className='mt-5 text-sm text-gray-500'>
                  Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.
               </p>
               <ul className='mt-5 ml-9 list-disc text-sm text-gray-500'>
                  <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
                  <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
                  <li>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
                  <li>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
               </ul >
               <button className='mt-7 button bg-blue-700 text-sm py-1 px-3 md:text-md md:py-3.5 md:px-8 rounded-full hover:bg-white group'   >
                  <span className='text-white font-semibold group-hover:text-blue-700'>
                     Schedule call
                  </span>
               </button>
               <Link className='ml-10'>Read more <ArrowOutwardIcon className='text-blue-500' /> </Link>
            </div>
         </div>

         <div className='bgImage2 pt-3 md:pt-24'>
            <div className= 'mx-6 md:ml-20 md:mr-28 flex flex-col gap-5 md:flex-row justify-between'>
               <div className='md:w-2/4'>
                  <img className='h-5' src={petran} alt="petran" />
                  <p className='text-white'>
                     <span className='font-bold'>PE</span>rformance -
                     <span className='font-bold'>TR</span>acking -
                     <span className='font-bold'>AN</span>alytics
                  </p>
                  <p className='mt-5 text-3xl font-sans text-white'> AIoT Enabled Asset <br /> Performance Management Software</p>
                  <p className='mt-5 text-sm text-white'>
                     PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT)
                     to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness
                  </p>

                  <button className='mt-4 button text-sm py-1 px-3 md:text-md md:py-3.5 md:px-8 rounded-full bg-white hover:bg-transparent group'   >
                     <span className='font-semibold text-blue-700 group-hover:text-white'>
                        Schedule call
                     </span>
                  </button>
                  <Link className='ml-10'>Read more <ArrowOutwardIcon className='text-blue-500' /> </Link>
               </div>
               <div className=''>
                  <img className='node rounded-xl' src={connection} alt="AI food" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Crafting