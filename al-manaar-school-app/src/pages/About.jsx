// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/schoolLogo.png";
import image1 from "../assets/image1.png";

const About = () => {
  const visionPoints = [
    "Academic excellence",
    "Strong Islamic identity",
    "Fluent Arabic proficiency",
    "Complete and structured Qur’an memorization",
    "Raising future scholars, leaders, and responsible citizens",
  ];

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-28 px-6 md:px-16 text-center flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Bigger Logo */}
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-32 w-32 md:h-40 md:w-40 mb-8"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to Al-Manaar Tahfeez School (ATS)
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-white">
            Assalaamu 'Alaykum warahmatullaahi wabarakaatuhu! We are delighted
            to welcome our future scholars and their parents to Al-Manaar Tahfeez
            School (ATS) for the 2025/2026 academic session. At ATS, we are
            committed to providing an enriched learning environment where Muslim
            children can memorize the Qur’an, learn Arabic, study Islamic studies,
            and receive a sound Western education.
          </p>

          <Link
            to="/academics"
            className="bg-amber-800 text-white px-10 py-4 rounded-full text-lg font-semibold
                       hover:bg-yellow-400 hover:text-amber-900
                       transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            View Academics
          </Link>

        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-16 px-6 md:px-16 bg-yellow-100 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 border-b-4 border-amber-300 pb-2">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
          Our mission is to develop the whole child, equipping them with academic
          excellence, strong moral conduct, healthy attitudes, and self-discipline.
          With the support of our competent and dedicated educators, pupils will
          be prepared to complete upper primary education with full Qur’an
          memorization, Arabic, Islamic studies, and readiness for Common Entrance exams.
        </p>

      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="py-16 px-6 md:px-16 bg-yellow-50 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
          Our Vision
        </h2>

        <ul className="max-w-3xl space-y-3 text-lg md:text-xl">
          {visionPoints.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-2 group transform transition hover:scale-105"
            >
              <span className="h-3 w-3 bg-amber-700 rounded-full group-hover:bg-yellow-400 transition"></span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mt-6 leading-relaxed">
          By the will of Allah, we aim to build a generation that upholds truth,
          integrity, and service to the Ummah.
        </p>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-amber-900 text-white py-10 w-full mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-6">
          {/* Logo */}
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-14 w-14"
          />

          {/* Copyright */}
          <p className="text-center md:text-left text-base md:text-lg">
            &copy; {new Date().getFullYear()} Al-Manaar Tahfeez School. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default About;