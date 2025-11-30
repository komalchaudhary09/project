import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Centered container with fixed width */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-green-500 text font-bold text-2xl mb-3">Glint.</h2>
            <p className="text-sm sm:text-base  text-justify leading-relaxed">
              Glint is a modern, creative agency dedicated to transforming ideas
              into impactful digital experiences. We specialize in branding,
              design, and development, helping businesses stand out with a clean,
              minimal, and professional identity. At Glint, we believe that
              simplicity shines brightest — our work combines creativity,
              precision, and innovation to bring your vision to life.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Get Notified</h3>
            <p className="text-sm leading-relaxed mb-4">
              A notification is a formal announcement or a message sent to inform
              someone about important updates, alerts, or reminders.
            </p>

            {/* EMAIL INPUT */}
            <div className="flex items-center gap-2">
              <MailOutlineIcon className="w-5 h-5 text-white" />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-black text-white px-3 py-2 rounded border border-white/30 focus:outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-12 text-center text-xs text-white">
          © Copyright Glint 2025 | Site Template by{" "}
          <a
            href="https://colorlib.com/"
            className="font-bold hover:text-green-500 transition-colors"
          >
            Colorlib
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
