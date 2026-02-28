// src/pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/schoolLogo.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-amber-900 text-white px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="font-bold text-lg hidden sm:block">
            Al-Manaar Tahfeez Schools
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/academics" className="hover:text-yellow-300">Academics</Link>
          <Link to="/admissions" className="hover:text-yellow-300">Admissions</Link>
          <Link to="/announcements" className="hover:text-yellow-300">Announcements</Link>

          <Link
            to="/admissions"
            className="bg-amber-700 px-4 py-2 rounded-md hover:bg-amber-800 transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-amber-900 flex flex-col items-center gap-6 pt-28 md:hidden z-50">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              About
            </Link>
            <Link 
              to="/academics" 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              Academics
            </Link>
            <Link 
              to="/admissions" 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              Admissions
            </Link>
            <Link 
              to="/announcements" 
              onClick={() => setIsOpen(false)} 
              className="text-white text-lg hover:text-yellow-300 transition"
            >
              Announcements
            </Link>
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-400 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-900 hover:text-white transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-start overflow-hidden">
        
        {/* Faint Logo Background */}
        <img
          src={schoolLogo}
          alt="background logo"
          className="absolute opacity-5 w-[450px] right-10 top-10 pointer-events-none"
        />

        {/* Left Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            AL-MANAAR TAHFEEZ SCHOOLS (ATS)
          </h2>

          <p className="text-lg md:text-xl italic text-gray-700 mb-4">
            Building a milestone for the future generation
          </p>

          <p className="text-base md:text-lg text-gray-800 mb-8">
            Providing quality Islamic and Western education from Crèche to Primary level
            in a safe, nurturing and academically excellent environment.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/admissions"
              className="bg-amber-800 text-white px-8 py-3 rounded-full 
                         hover:bg-yellow-400 hover:text-amber-900 
                         transition-all duration-300 
                         font-semibold shadow-md hover:shadow-lg 
                         hover:-translate-y-1"
            >
              Apply For Admission
            </Link>

            <Link
              to="/academics"
              className="border-2 border-amber-900 text-amber-900 
                         px-8 py-3 rounded-full 
                         hover:bg-amber-900 hover:text-white 
                         transition-all duration-300 
                         font-semibold hover:-translate-y-1"
            >
              View Academics
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image1}
              alt="School 1"
              className="rounded-xl shadow-md object-cover w-full h-40"
            />
            <img
              src={image2}
              alt="School 2"
              className="rounded-xl shadow-md object-cover w-full h-40"
            />
            <img
              src={image3}
              alt="School 3"
              className="rounded-xl shadow-md col-span-2 object-cover w-full h-52"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="bg-yellow-100 py-16 px-6 md:px-16 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
          About Our School
        </h3>

        <p className="text-gray-800 max-w-3xl mx-auto mb-8 text-lg">
          Al-Manaar Tahfeez Schools (ATS) is committed to raising confident,
          morally upright and academically sound children. We combine strong
          Islamic values with quality Western education to prepare our pupils
          for excellence in this life and the hereafter.
        </p>

        <Link
          to="/about"
          className="bg-amber-800 text-white px-8 py-3 rounded-full 
                     hover:bg-yellow-400 hover:text-amber-900 
                     transition-all duration-300 
                     font-semibold shadow-md hover:shadow-lg 
                     hover:-translate-y-1"
        >
          Read More
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-amber-900 text-white py-10 w-full mt-auto">
        <div className="text-center space-y-3 px-6">
          <p>16, New Jerusalem street, Off Alhaji Olaniyan avenue, Olaoluwa bus stop, Ikola, Alaso.</p>
          <p>09033435812 | 08087288739 | 07073852187</p>
          <p>almanaartahfeez@gmail.com</p>
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} Al-Manaar Tahfeez Schools. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;