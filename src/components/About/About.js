import React from 'react';
import { Typography } from "@material-tailwind/react";

import { motion } from 'framer-motion';
  
  
  import assemblee from '../../assets/images/assemblee.jpg'
   
const About = () => {
    return (
      <section className="flex items-center py-10 bg-stone-100  font-poppins dark:bg-gray-800 z-0">
        <div className="justify-center flex-1 w-full lg:mx-16 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        <img src={assemblee} alt=""
                            className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                        <div
                            className="absolute z-10 hidden w-full h-full bg-brown-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                        </div>
                        
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="relative">
                        <h1
                            className="absolute -top-10   left-0 text-[20px] lg:text-[60px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 hidden">
                            A PROPOS
                        </h1>
                        <h1 className="pl-2 uppercase text-3xl font-bold border-l-8 border-brown-400 md:text-5xl dark:text-white">
                            A propos
                        </h1>
                    </div>
                    <Typography color="gray" className="mb-8 mt-3 font-normal">
                       Dix ans que le précédent site a été mis en ligne, permettant à tous ceux qui ont soif de la Parole de Dieu, d'avoir accès au Message divin dans notre temps... 
                       Le temps a coulé, et la technologie obligeant, nous avons été contraints de remanier le site pour le moderniser.
                    </Typography>
                    
                    <Typography color="gray" className="mb-8 mt-3 font-normal">
                        Sans prétention aucune, ce site se veut une courroie, un canal, un véhicule pour prolonger ce que Dieu fait par 
                        Ses serviteurs sur terre dans notre temps...
                    </Typography>
                    
                    <Typography color="gray" className="mb-8 mt-3 font-normal">
                        Cette version n'est pas achevée. Elle sera complètée au fil du temps pour vous offrir l'ensemble des services que la version précédente vous proposait...  
                        Tout y est gratuit car... ce que vous avez reçu gratuitement, donnez-le gratuitement.
                    </Typography>
                    
                    <a href="#"
                        className="px-4 py-3 text-white transition-all transform bg-brown-600 rounded-[80px] hover:bg-brown-900 dark:hover:text-gray-100 dark:text-gray-100 ">
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default About;