import React, { useState, useEffect } from "react";
import Layout from "../Component/Layout/Layout";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Link } from "react-router-dom"

import Banner from "../assets/Image/banner.jpeg";

const Home: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Layout>
      <div
        className="min-h-screen w-full bg-cover bg-center relative overflow-x-hidden"
        style={{ backgroundImage: `url(${Banner})` }}
      >
       
        <div className="absolute inset-0 bg-black/40"></div>

       
        <div className="relative z-10 min-h-screen w-full flex flex-col justify-start md:justify-center  md:items-center  lg:mt-1 items-start text-white px-4 sm:px-8 md:px-20 pt-16 sm:pt-20 md:pt-24">

        
          <p
            className={`text-gray-300   font-semibold text-lg sm:text-xl md:text-3xl
              mt-30 sm:mt-8  lg:mt-1
              transition-all duration-1000
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            Welcome to Glint
          </p>
   
          
          <h1
            className={`text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-snug mt-2 sm:mt-6 md:mt-8 mb-6
              transition-all duration-1000 delay-300
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            We are a creative group <br />
            of people who design <br />
            influential brands and <br />
            digital experiences.
          </h1>

         
          <div className="flex flex-col md:flex-row gap-3 w-full md:justify-center mt-4">
           <Link
             to="/contact"
             className="border-[0.5px] sm:border border-white px-5 py-1 sm:py-2 
             text-lg sm:text-xl w-2xs md:w-auto hover:bg-white 
             hover:text-black transition rounded text-center">                          
             START A PROJECT
             </Link>

             <Link
             to="/about"
             className="border-[0.5px] sm:border border-white px-5 py-1 sm:py-2 
             text-lg sm:text-xl w-2xs md:w-auto hover:bg-white 
             hover:text-black transition rounded text-center">
             MORE  ABOUT US 
             </Link>

          </div>
        </div>

      
        <div className="hidden sm:flex fixed top-1/3 right-4 flex-col gap-4 text-white z-10">
          <a href="https://www.facebook.com/"><FacebookOutlinedIcon /></a>
          <a href="https://x.com/"><TwitterIcon /></a>
          <a href="https://www.instagram.com/"><InstagramIcon /></a>
          <a href="https://www.whatsapp.com/?lang=en"><WhatsAppIcon /></a>
          <a href="https://dribbble.com/"><SportsBasketballIcon /></a>
        </div>

      
        <div className="sm:hidden absolute top-1/4 right-4 flex flex-col gap-4 text-white z-10">
          <a href="https://www.facebook.com/"><FacebookOutlinedIcon fontSize="small" /></a>
          <a href="https://x.com/"><TwitterIcon fontSize="small" /></a>
          <a href="https://www.instagram.com/"><InstagramIcon fontSize="small" /></a>
          <a href="https://www.whatsapp.com/?lang=en"><WhatsAppIcon fontSize="small" /></a>
          <a href="https://dribbble.com/"><SportsBasketballIcon fontSize="small" /></a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
