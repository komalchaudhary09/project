import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout/Layout";
import Slider from "react-slick";
import type { Settings } from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import AppleIcon from "@mui/icons-material/Apple";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AssistantNavigationIcon from "@mui/icons-material/AssistantNavigation";

import { MenuList } from "../Data/data";

const Clients: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const clientSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const clientIcons = [
    { key: "apple", icon: <AppleIcon sx={{ fontSize: { xs: 60, sm: 100 }, color: "gray" }} /> },
    { key: "whatshot", icon: <WhatshotIcon sx={{ fontSize: { xs: 60, sm: 100 }, color: "gray" }} /> },
    { key: "blur", icon: <BlurOnIcon sx={{ fontSize: { xs: 60, sm: 100 }, color: "gray" }} /> },
    { key: "viewinar", icon: <ViewInArIcon sx={{ fontSize: { xs: 60, sm: 100 }, color: "gray" }} /> },
    { key: "assistant", icon: <AssistantNavigationIcon sx={{ fontSize: { xs: 60, sm: 100 }, color: "gray" }} /> },
  ];

  return (
    <Layout>
      <div
        className="bg-gray-50 py-10 px-4 sm:px-20"
        style={{ backgroundColor: "var(--secondary-color)" }}
      >
        <p
          className={`mt-10 sm:mt-30 font-bold text-center text-lg sm:text-xl mb-5 transition-all duration-1000 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ color: "var(--primary-color)" }}
        >
          OUR CLIENTS
        </p>

        <h2 className={`text-2xl sm:text-4xl font-bold text-center mb-8
          transition-all duration-1000 delay-300
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          Glint has been honored to partner <br /> with these clients
        </h2>

      
        <Slider {...clientSettings}>
          {clientIcons.map((item) => (
            <div key={item.key} className="flex justify-center py-1" tabIndex={-1}>
              <div className={`bg-[--secondary-color] p-6 sm:p-8 flex items-center justify-center hover:scale-105 
                transition-all duration-1000 delay-300
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                {item.icon}
              </div>
            </div>
          ))}
        </Slider>

        <hr className="border-gray-400 w-72 sm:w-96 mx-auto my-10" />

      
        <ReviewSlider animate={animate} />
      </div>
    </Layout>
  );   
};

export default Clients;


const ReviewSlider: React.FC<{ animate: boolean }> = ({ animate }) => {
  const reviewSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="px-4 sm:px-20">
      <Slider {...reviewSettings}>
        {MenuList.map((item, idx) => (
          <div
            key={idx}
            className="bg-[--secondary-color] rounded-xl p-4 sm:p-6 min-h-[280px] text-center mx-2 sm:mx-4"
            tabIndex={-1}
          >
            <p className={`text-gray-800 italic text-base sm:text-lg leading-relaxed
              transition-all duration-1000 delay-300
              ${animate ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
              “{item.description}”
            </p>

            <img
              src={item.image}
              alt={item.name}
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto my-4 sm:my-5 object-cover
                transition-all duration-1000 delay-300
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            />

            <p className={`font-bold text-gray-900 text-base sm:text-lg
              transition-all duration-1000 delay-300
              ${animate ? " opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>{item.name}</p>
            <p className={`text-gray-600 text-sm sm:text-base
              transition-all duration-1000 delay-300
              ${animate?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>{item.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
