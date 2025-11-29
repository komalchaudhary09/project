import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout/Layout";

import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CampaignIcon from '@mui/icons-material/Campaign';
import PublicIcon from '@mui/icons-material/Public';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

interface ServiceItem {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    title: "Brand Identity",
    description:
      "Brand identity is the collection of visual and verbal elements that represent a brand. It defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: FormatPaintIcon,
  },
  {
    title: "Illustration",
    description:
      "A creative visualization made by an artist to communicate ideas clearly through drawings, photos, or mixed media defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: CropFreeIcon,
  },
  {
    title: "Marketing",
    description:
      "Marketing involves promoting products or services through advertising, branding, and digital strategies to reach the right audience defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: CampaignIcon,
  },
  {
    title: "Web Design",
    description:
      "Web design focuses on creating visually appealing, responsive, and user-friendly websites for a strong online presence defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: PublicIcon,
  },
  {
    title: "Packaging Design",
    description:
      "The process of creating safe, functional, and attractive packaging that protects products and enhances customer experience defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: ViewInArIcon,
  },
  {
    title: "Web Development",
    description:
      "Building and maintaining websites and web applications using front-end and back-end technologies defines how a company looks, sounds, and feels, helping it stand out and stay memorabledefines how a company looks, sounds, and feels, helping it stand out and stay memorable.",
    Icon: WorkOutlineIcon,
  },
];

const Services: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <Layout>
      <div className="text-center px-4 sm:px-8 sm:mt-10 md:px-20 py-10">
        <p
          className={`font-bold text-lg sm:text-xl mt-10
            transition-all duration-1000 delay-10
            ${animate? "opacity-100 translate-y-0":"opacity-0  translate-y-5"}`}
          style={{ color: "var(--primary-color)" }}
        >
          WHAT WE DO
        </p>

        <h2 className={`font-bold text-2xl sm:text-5xl sm:mb-10 mt-2
          transition-all duration-1000 delay-10
          ${animate ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
          We've got everything you need <br />
          to launch and grow your business
        </h2>

        <div className={`mx-auto my-4 w-48 sm:mb-10 sm:w-96 border-b-2 border-gray-300
          transition-all duration-1000 delay-300
          ${animate ? "opacity-100 translate-y-0":
            "opacity-0 translate-y-5"
          }`}></div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {services.map((service, idx) => {
            const IconComponent = service.Icon;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start gap-4 sm:mb-5 sm:w-[45%] w-full p-4 ${
                  animate ? "opacity-100 translate-y-0 transition-all duration-1000 delay-10" : "opacity-0 translate-y-10"
                }`}
              >
                <IconComponent
                  className="text-3xl"
                  style={{ color: "var(--primary-color)" }}
                />

                <div className="text-left">
                  <h3 className="font-bold text-xl sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-base sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
