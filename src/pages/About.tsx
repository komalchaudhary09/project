import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout/Layout";

interface CounterItem {
  number: number;
  label: string;
}

const counters: CounterItem[] = [
  { number: 127, label: "Awards Received" },
  { number: 1505, label: "Cups of Coffee" },
  { number: 109, label: "Project Completed" },
  { number: 102, label: "Happy Client" },
];

const About: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    const intervals = counters.map((item, index) => {
      let frame = 0;
      const increment = item.number / totalFrames;

      const interval = setInterval(() => {
        frame++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(item.number, Math.floor(increment * frame));
          return updated;
        });

        if (frame >= totalFrames) clearInterval(interval);
      }, 1000 / frameRate);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Layout>
      <div
        className="text-center py-10 px-4 sm:px-8"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <p
          className={`sm:mt-30 mt-30 font-bold text-base sm:text-lg text-black transition-all duration-1000
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          HELLO THERE
        </p>

        <h1 className={`font-bold text-white text-4xl sm:text-7xl mt-2
          transition-all duration-1000 sm:mb-10
          ${animate ? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
          We Are Glint
        </h1>

        <div
          className="mx-auto my-3 h-0.5 w-16 sm:w-[600px]"
          style={{ backgroundColor: "var(--secondary-color)" }}
        ></div>

        <p className={`text-black text-justify text-base sm:text-2xl leading-relaxed mt-10 max-w-4xl mx-auto
          transition-all duration-1000 delay-300 ${animate ?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
          Glint is a creative digital agency dedicated to crafting bold, meaningful,
          and visually captivating experiences. We are a team of passionate designers,
          developers, and strategists who believe that every brand deserves to shine —
          to glint — in a crowded digital world. At Glint, we transform ideas into
          powerful stories that connect with people. From branding and design to
          digital marketing and web development, our work blends creativity,
          technology, and strategy to deliver lasting impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-10 flex-wrap">
          {counters.map((item, index) => (
            <div
              key={index}
              className={`text-center w-full sm:w-auto border-b-2 sm:border-b-0 sm:border-r-2 border-white pb-3 sm:pb-0 pr-0 sm:pr-8 mb-10 last:border-none
                 transition-all duration-1000 delay-300
                ${animate ?"opacity-100 transition-y-0": "opacity-0 transition-y-5"}`}
            >
              <h2 className="text-white font-bold text-3xl sm:text-7xl mb-3">
                {counts[index].toLocaleString()}+
              </h2>
              <p className="text-black text-sm sm:text-base font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
