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
    <div className="bg-gold-light min-h-screen flex flex-col">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-navy-blue text-white px-6 py-4 flex justify-between items-center relative">
        
        <div className="flex items-center gap-3">
          <img src={schoolLogo} alt="School Logo" className="h-12 w-12 object-contain" />
          <h1 className="font-bold text-lg hidden sm:block">
            Al-Manaar Tahfeez Schools
          </h1>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-gold">Home</Link>
          <Link to="/about" className="hover:text-gold">About</Link>
          <Link to="/academics" className="hover:text-gold">Academics</Link>
          <Link to="/admissions" className="hover:text-gold">Admissions</Link>
          <Link to="/announcements" className="hover:text-gold">Announcements</Link>

          <Link
            to="/admissions"
            className="bg-gold text-navy-blue px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Apply Now
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-navy-blue flex flex-col items-center gap-6 pt-28 md:hidden z-50">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gold">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gold">About</Link>
            <Link to="/academics" onClick={() => setIsOpen(false)} className="hover:text-gold">Academics</Link>
            <Link to="/admissions" onClick={() => setIsOpen(false)} className="hover:text-gold">Admissions</Link>
            <Link to="/announcements" onClick={() => setIsOpen(false)} className="hover:text-gold">Announcements</Link>

            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-navy-blue px-6 py-2 rounded-full font-semibold hover:bg-yellow-300"
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center bg-navy-blue overflow-hidden">

        {/* ⭐ BACKGROUND LOGO WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={schoolLogo}
            alt="background logo"
            className="w-[500px] md:w-[650px] opacity-5"
          />
        </div>

        {/* Left Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 leading-tight">
            AL-MANAAR TAHFEEZ SCHOOLS (ATS)
          </h2>

          <p className="text-lg md:text-xl italic text-gold-light mb-4">
            Building a milestone for the future generation
          </p>

          <p className="text-base md:text-lg text-gray-200 mb-8">
            Providing quality Islamic and Western education from Crèche to Primary level
            in a safe, nurturing and academically excellent environment.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/admissions"
              className="bg-gold text-navy-blue px-8 py-3 rounded-full 
                         hover:bg-yellow-300 
                         transition-all duration-300 
                         font-semibold shadow-md hover:shadow-lg 
                         hover:-translate-y-1"
            >
              Apply For Admission
            </Link>

            <Link
              to="/academics"
              className="border-2 border-gold text-gold px-8 py-3 rounded-full 
                         hover:bg-gold hover:text-navy-blue 
                         transition-all duration-300 
                         font-semibold hover:-translate-y-1"
            >
              View Academics
            </Link>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <img src={image1} className="rounded-xl h-40 w-full object-cover" />
            <img src={image2} className="rounded-xl h-40 w-full object-cover" />
            <img src={image3} className="rounded-xl h-52 w-full col-span-2 object-cover" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-gold-light py-16 px-6 md:px-16 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
          About Our School
        </h3>

        <p className="text-gray-800 max-w-3xl mx-auto mb-8 text-lg">
          Al-Manaar Tahfeez Schools (ATS) is committed to raising confident,
          morally upright and academically sound children.
        </p>

        <Link
          to="/about"
          className="bg-navy-blue text-white px-8 py-3 rounded-full 
                     hover:bg-blue-900 transition-all duration-300 font-semibold"
        >
          Read More
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-navy-blue text-white py-10 mt-auto text-center">
      
        <div className="text-center flex flex-col gap-3 px-6">
          <span>16, New Jerusalem street, Off Alhaji Olaniyan avenue, Ikola, Alaso.</span>
          <span>09033435812 | 08087288739 | 07073852187</span>
          <span>almanaartahfeez@gmail.com</span>
          <span className="text-sm mt-4">
            &copy; {new Date().getFullYear()} Al-Manaar Tahfeez Schools. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
  );
};

export default Home;