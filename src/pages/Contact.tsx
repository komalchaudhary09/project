import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout/Layout";
import background from "../assets/Image/background.jpeg";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const[animate, setAnimate]= useState(false);
  useEffect(() => {
    const timer =setTimeout(() =>{
      setAnimate(true);
    },200);
    return() => clearTimeout(timer);
  },[]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
   
  };


  return (
    <Layout>
      <div
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${background})` }}
      >
     
        <div className={`text-center mt-10 sm:mt-20`}>
          <p className={` text-lg sm:text-xl  font-bold mb-2 tracking-widest
          transition-all duration-100 delay-300
          ${animate ? "opacity-100  translate-y-0":"opacity-0 translate-y-5"}`
          } style={{color:"var(--primary-color)"}}>
            CONTACT US
          </p>
          <h2 className={`text-2xl sm:text-6xl  mb-10 sm:mb-20 sm:mt-10 text-white font-bold
            transition-all duration-100 delay-300
            ${animate ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
            Reach out for a new project or just <br />
            say hello
          </h2>
        </div>

     
        <div className={`max-w-6xl mx-auto bg-black bg-opacity-20 backdrop-blur-md rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-lg
        transition-all duration-100 delay-300
        ${animate ? "opacity-100 translate-y-0":"opacity-0 translate-y-5"}`
        }>
          
          <div className="flex-1">
            <h3 className="text-white font-bold  sm:mb-20 text-lg mb-6 tracking-wide">
              SEND US A MESSAGE
            </h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 text-white py-2 focus:border-green-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 text-white py-2 focus:border-green-500 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-500 text-white py-2 focus:border-green-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-transparent border-b border-gray-500 text-white py-2 focus:border-green-500 outline-none resize-none"
              />
              <button
                type="submit"
                className={` text-white font-bold py-2 mt-4 tracking-wider rounded`}
                style={{background:"var(--primary-color)"}}
              >
                SUBMIT
              </button>
            </form>
          </div>

          
          <div className="hidden md:block w-px bg-gray-600"></div>

          
          <div className="flex-1 text-white">
            <h3 className="font-bold text-lg mb-6 tracking-wide">CONTACT INFO</h3>

            <div className="mb-6">
              <p className="text-green-500 font-bold mb-1">Where to Find Us</p>
              <p className="text-gray-300">
                1600 Amphitheatre Parkway <br />
                Mountain View, CA <br />
                94043 US
              </p>
            </div>

            <div className="mb-6">
              <p className="text-green-500 font-bold mb-1">Email Us At</p>
              <p className="text-gray-300">
                contact@glintsite.com <br />
                info@glintsite.com
              </p>
            </div>

            <div className="mb-6">
              <p className="text-green-500 font-bold mb-1">Call Us At</p>
              <p className="text-gray-300">
                Phone: (+63) 555 1212 <br />
                Mobile: (+63) 555 0100 <br />
                Fax: (+63) 555 0101
              </p>
            </div>

            
            <div className="flex gap-4 text-white text-xl mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-green-500">
                <FaFacebookF />
              </a>
              <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer" className="hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-green-500">
                <FaInstagram />
              </a>
              <a href="https://github.com/komalchaudhary09" target="_blank" rel="noreferrer" className="hover:text-green-500">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
