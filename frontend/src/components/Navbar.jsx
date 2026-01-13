import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const PRIMARY = "#3f9bcd";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) setShow(false);
      else setShow(true);

      setScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4">
        {/* Logo */}
        <a href="/">
          <img
            className="h-9 transition-all duration-300"
            src={scrolled ? assets.bluelogo : assets.logowhite}
            alt="Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 bg-current transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ backgroundColor: scrolled ? PRIMARY : "#fff" }}
          ></span>
          <span
            className={`block h-0.5 bg-current transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: scrolled ? PRIMARY : "#fff" }}
          ></span>
          <span
            className={`block h-0.5 bg-current transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ backgroundColor: scrolled ? PRIMARY : "#fff" }}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-3 px-5 text-sm transition-transform duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <Link to='/' className="w-full hover:text-[#3f9bcd]">Home</Link>
          <Link to='/video-marketing' className="w-full hover:text-[#3f9bcd]">Video Marketing</Link>
          <Link to='/digital-marketing' className="w-full hover:text-[#3f9bcd]">Digital Marketing</Link>
          <button
          onClick={()=> navigate('/login')}
            className="px-6 py-2 mt-2 bg-[#3f9bcd] text-white rounded-full w-full text-center hover:bg-[#338bb8] transition"
          >
            Login
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to='/'  className={`hover:text-[#3f9bcd] ${scrolled ? "text-gray-800" : "text-white"}`}>Home</Link>
          <Link to='/video-marketing' className={`hover:text-[#3f9bcd] ${scrolled ? "text-gray-800" : "text-white"}`}>Video Marketing</Link>
          <Link to='/digital-marketing' className={`hover:text-[#3f9bcd] ${scrolled ? "text-gray-800" : "text-white"}`}>Digital Marketing</Link>


          {/* Login Button */}
          <button
          onClick={()=> navigate('/login')}
            style={{ backgroundColor: PRIMARY }}
            className="px-8 py-2 text-white rounded-full hover:opacity-90 transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
