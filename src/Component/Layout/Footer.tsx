import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // optional, or you can use any SVG

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-5 sm:px-8 md:px-20 py-10">
      {/* Main Content */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-green-500 font-bold text-2xl mb-2">Glint.</h2>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            Glint is a modern, creative agency dedicated to transforming ideas into impactful digital experiences. We specialize in branding, design, and development, helping businesses stand out with a clean, minimal, and professional identity. At Glint, we believe that simplicity shines brightest — our work combines creativity, precision, and innovation to bring your vision to life. Whether it’s crafting stunning websites, designing memorable logos, or developing user-friendly interfaces, Glint ensures every detail glows with excellence.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-white font-bold text-lg mb-2">Get Notified</h3>
          <p className="text-sm leading-relaxed mb-2">
            A notification is a formal announcement or a message sent to inform someone about something, such as an official notice, an alert on a device, or a reminder.
          </p>

          {/* Email subscription */}
          <div className="flex items-center gap-2">
            <MailOutlineIcon className="w-5 h-5 text-white" />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-black text-white px-3 py-2 rounded focus:outline-none border border-white/30"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-white">
        &copy; Copyright Glint 2025 | Site Template by{" "}
        <a
          href="https://colorlib.com/"
          className="font-bold text-white hover:text-green-500 transition-colors"
        >
          Colorlib
        </a>
      </div>
    </footer>
  );
};

export default Footer;
