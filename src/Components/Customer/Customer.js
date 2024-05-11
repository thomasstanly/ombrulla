import React,{useEffect,useState} from 'react';
import Slider from "react-slick";
import { data } from './Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Customer.css'

const Customer = () => {
   const [slidesToShow, setSlidesToShow] = useState(5);

   useEffect(() => {
      const handleResize = () => {
         setSlidesToShow(window.innerWidth < 850 ? 3 : 5);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);
   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };
   return (

      <>
         <div className='running my-16 w-8/12 m-auto'>
            <div className='sideone w-20 md:w-32 h-32'></div>
            <Slider {...settings}>
               {data.map((d, index) => (
                  <div>
                     <img className='w-20' key={index} src={d.image} alt={`Image ${index + 1}`}
                     />
                  </div>
               ))
               }
            </Slider>
            <div className='sidetwo w-20 md:w-32 h-32'></div>
         </div>
      </>
   )
};

export default Customer
