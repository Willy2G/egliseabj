
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import video1 from '../../assets/bg/bg1.mp4';
import video2 from '../../assets/bg/bg2.mp4';
import video3 from '../../assets/bg/bg3.mp4';

// const VideoCarousel = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div classNameName="relative z-0">
//       <Slider {...settings}>
//         {videos.map((video, index) => (
//           <div key={index}>
//             <video autoPlay muted loop classNameName="min-w-full min-h-full object-cover">
//               <source src={video} type="video/mp4" />
//             </video>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };


 
const VideoCarousel = () => {

  const videos = [video1, video2, video3];

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    fade: true, // Activez l'effet de fondu
    autoplaySpeed: 10000,
    lazyLoad: true,
  };
  
  
  return (
    <div className="relative lg:h-[680px] overflow-hidden">
      <Slider {...settings} className='brightness-50'>
        {videos.map((video, index) => (
          <div key={index} className="h-full">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src={video}
              type="video/mp4"
            />
          </div>
        ))}
      </Slider>
      <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.p 
         
        className="text-white font-bold lg:text-6xl text-md lg:leading-[3.8rem]	 text-center">
        Et voici, Je viens bientôt
        Heureux celui qui garde les 
        paroles de la prophétie de ce Livre !
        </motion.p>
      </div>
    </div>
  );
}

export default VideoCarousel;