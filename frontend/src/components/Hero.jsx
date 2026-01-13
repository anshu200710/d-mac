import React from "react";
import { assets } from "../assets/assets"; // Make sure to have your hero background or use a URL

const Hero = () => {
  return (
    <>
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 xl:px-32"
      style={{
        backgroundImage: `url(${assets.bg})`, // Replace with your background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Grow Your Brand with Powerful Marketing
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10">
          High-impact Video Marketing & Result-Driven Digital Marketing Solutions.
        </p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Marketing */}
          <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition hover:scale-105 duration-300">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 7 L10 15 L22 23 V7 Z" /> {/* Video Icon */}
              </svg>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">
              Video Marketing
            </h3>
            <p className="text-white/80 text-sm">
              Create compelling video content that captivates your audience and drives engagement across all platforms.
            </p>
            <button className="mt-4 px-6 py-2 border border-white/60 rounded-full text-white hover:bg-white/20 transition">
              Know More
            </button>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white/10 border border-white/30 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transition hover:scale-105 duration-300">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M12 3v18" /> {/* Digital Marketing Icon */}
              </svg>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">
              Digital Marketing
            </h3>
            <p className="text-white/80 text-sm">
              Strategic digital campaigns that boost visibility, generate leads, and maximize your ROI.
            </p>
            <button className="mt-4 px-6 py-2 border border-white/60 rounded-full text-white hover:bg-white/20 transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
