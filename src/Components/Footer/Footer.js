import React from 'react'
import './Footer.css'

const Footer = () => {
   return (
      <>
         <div className='footer px-8 md:px-28 py-16 flex flex-col md:flex-row gap-8 justify-center'>
            <div className='flex-1'>
               <p  className='text-white mb-5 font-bold'>About Us</p>
               <p className='text-justify text-blue-200'>
                  Ombrulla is an AI-driven company providing specialized services like AI Visual Inspection,
                  AI People Tracking, AI Defect Detection, AI Infrastructure Inspection, and AI Data Analytics.
                  Our tailored solutions empower businesses with data-driven decisions, automation, and improved bottom lines.
                  PETRAN, our cutting-edge tracking solution, utilizes AI and IoT to monitor assets, machinery, equipment, people,
                  and facilities, enabling comprehensive performance management and environmental sustainability.
               </p>
            </div>
            <div className='flex-1'>
               <p className='text-white mb-5 font-bold'>Our Service</p>
               <p className='text-blue-200'>AI Infrastructure Inspection</p>
               <p className='text-blue-200'>AI Visual Inspection</p>
               <p className='text-blue-200'>AI Data Analytics</p>
               <p className='text-blue-200'>AI People Tracking</p>
            </div>
            <div className='flex-1'>
               <p className='text-white mb-5 font-bold'>Our Solutions</p>
               <p className='text-blue-200'>Asset Performance Management</p>
               <p className='text-blue-200'>RTLS - Workplace Safety</p>
               <p className='text-blue-200'>Environmental Sustainability</p>
            </div>
            <div className='flex-1'>
               <p className='text-white mb-5 font-bold'>Reach Us</p>
               <p className='text-blue-200'>United Kingdom,7 <br /> Bell Yard London, <br />WC2A 2JR +44 7879 993892</p>
               <p className='text-blue-200 my-4'>Germany, <br />Schützenstraße 51A Lübeck,<br /> 23558 +49 179 512 5812</p>
               <p className='text-blue-200'>India, No. 154/20,<br /> Royal SpaceThird Floor TI,<br />  HSR Layout, Bangalore, Karnataka 560102 +91 85900 56435</p>
            </div>
         </div>
      </>
   )
}

export default Footer