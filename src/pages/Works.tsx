import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout/Layout";
import camera from "../assets/Image/camera.jpeg";
import chair from "../assets/Image/chair.jpeg";
import car from "../assets/Image/car.jpeg";
import long from "../assets/Image/long.jpeg";
import guitar from "../assets/Image/guitar.jpeg";
import leaves from "../assets/Image/leaves.jpeg";

interface ImageItem {
  src: string;
  title: string;
  category: string;
}

const images: ImageItem[] = [
  { src: camera, title: "SHUTTERBUG", category: "Branding" },
  { src: chair, title: "WOODEN CARFT", category: "Web Design" },
  { src: car, title: "THE BEETLE", category: "Web Development" },
  { src: long, title: "GROWN GRASS", category: "Branding" },
  { src: guitar, title: "GUITARIST", category: "Web Design" },
  { src: leaves, title: "PALMERA", category: "Web Design" },
];

const Works: React.FC = () => {
    const[animate , setAnimate]= useState(false);
    useEffect(() => {
        const timer = setTimeout(() =>{
            setAnimate(true);
        },200);
        return () => clearTimeout(timer);
        },[]);
    
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(prev => (prev === src ? null : src));
  };

  return (
    <Layout>
     
      {!selectedImage && (
        <div className="bg-black text-white text-center flex flex-col justify-center items-center h-[220px] sm:h-[290px]">
          <p className={`tracking-widest text-lg mt-10 sm:mt-20 sm:text-xl font-bold
          transition-all duration-1000 delay-300
          ${animate ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}
          style={{color: "var(--primary-color)"}}>
            RECENT WORKS
          </p>
          <h2 className={`font-bold text-2xl sm:text-4xl mt-1 sm:mt-5 
            transition-all duration-1000 delay-300
            ${animate ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
            We love what we do, check out <br />
            some of our latest works
          </h2>
        </div>
      )}

      
      {!selectedImage && (
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto my-10 sm:mb-20 sm:mt-20 
        transition-all duration-1000 delay-300
        ${animate ?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer overflow-hidden rounded-md"
              onClick={() => handleImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-400">
                <h3 className="font-bold text-lg">{img.title}</h3>
                <p className="text-sm text-gray-300">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex justify-center items-center cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg transition-transform duration-300"
          />
        </div>
      )}
    </Layout>
  );
};

export default Works;
