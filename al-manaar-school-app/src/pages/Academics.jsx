// src/pages/Academics.jsx
import React from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/schoolLogo.png";
import { FaFacebook } from "react-icons/fa";

const Academics = () => {
  const nurserySubjects = [
    "Numeracy", "Literacy", "Phonics", "Social Habits",
    "Health Habits", "Basic Science", "Quantitative and Verbal",
    "Creative Writing", "ICT", "Colouring",
    "Rhymes", "Story-Telling", "Scribbling"
  ];

  const primarySubjects = [
    "Mathematics", "English Comprehension", "English Grammar",
    "Creative Writing", "Basic Science",
    "Phonics and Diction", "Social Studies",
    "ICT (Practical)", "Quantitative and Verbal Reasoning",
    "Yoruba", "Literature"
  ];

  const arabicSubjects = [
    "Qur'an Memorization", "Qur'an Revision",
    "Arabic Expression", "Arabic Reading",
    "Fiqh", "Tawheed", "Hadeeth", "Khatt (Calligraphy)"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6f0]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#5C0F0F] text-yellow-100 py-20 px-6 md:px-16 text-center overflow-hidden">
        
        {/* Faint Logo */}
        <img
          src={schoolLogo}
          alt="background logo"
          className="absolute opacity-5 w-[300px] md:w-[400px] lg:w-[500px] right-10 top-10 pointer-events-none"
        />

        <h1 className="relative z-10 text-5xl md:text-6xl font-bold mb-6">
          Our Academic Programs
        </h1>

        <p className="relative z-10 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          At Al-Manaar Tahfeez Schools, we provide a balanced curriculum combining strong Islamic values and Western education to prepare our pupils for excellence in both this life and the hereafter.
        </p>

        <div className="relative z-10 flex justify-center gap-6 flex-wrap">
          <Link
            to="/admissions"
            className="bg-yellow-400 text-[#5C0F0F] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Apply For Admission
          </Link>

          <Link
            to="/contact"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#5C0F0F] hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ================= NURSERY ================= */}
      <section className="py-16 px-6 md:px-16 text-center bg-white">
        <h2 className="text-4xl font-bold text-[#5C0F0F] mb-8">
          Nursery Subjects
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {nurserySubjects.map((subj, idx) => (
            <span
              key={idx}
              className="bg-yellow-100 text-[#5C0F0F] px-4 py-2 rounded-full font-medium shadow hover:bg-yellow-200 transition"
            >
              {subj}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PRIMARY ================= */}
      <section className="py-16 px-6 md:px-16 text-center bg-[#faf6f0]">
        <h2 className="text-4xl font-bold text-[#5C0F0F] mb-8">
          Primary Subjects
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {primarySubjects.map((subj, idx) => (
            <span
              key={idx}
              className="bg-yellow-100 text-[#5C0F0F] px-4 py-2 rounded-full font-medium shadow hover:bg-yellow-200 transition"
            >
              {subj}
            </span>
          ))}
        </div>
      </section>

      {/* ================= ARABIC & ISLAMIYYAH ================= */}
      <section className="py-16 px-6 md:px-16 text-center bg-white">
        <h2 className="text-4xl font-bold text-[#5C0F0F] mb-8">
          Arabic & Islamiyyah
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {arabicSubjects.map((subj, idx) => (
            <span
              key={idx}
              className="bg-yellow-100 text-[#5C0F0F] px-4 py-2 rounded-full font-medium shadow hover:bg-yellow-200 transition"
            >
              {subj}
            </span>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#5C0F0F] text-yellow-100 py-10 mt-auto">
        <div className="text-center flex flex-col gap-3 px-6">
          <span>16, New Jerusalem street, Off Alhaji Olaniyan avenue, Ikola, Alaso.</span>
          <span>09033435812 | 08087288739 | 07073852187</span>
          <span>almanaartahfeez@gmail.com</span>
          <span className="text-sm mt-4">
            &copy; {new Date().getFullYear()} Al-Manaar Tahfeez Schools. All rights reserved.
          </span>
        </div>
          <div className="mt-4 flex justify-center">
                  <a
                    href="https://facebook.com/SchoolPage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gold hover:text-white transition"
                  >
                    <FaFacebook size={29} />
                    <span>Facebook (coming soon)</span>
                  </a>
          </div>
      </footer>

    </div>
  );
};

export default Academics;