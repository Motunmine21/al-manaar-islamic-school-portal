// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/schoolLogo.png";

const About = () => {
  return (
    <div className="bg-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-16 text-center flex flex-col items-center">
        <img src={schoolLogo} alt="School Logo" className="h-24 w-24 mb-6" />

        <h1 className="text-5xl md:text-6xl font-bold text-blue-950 mb-6">
          Welcome to Al-Manaar Tahfeez School (ATS)
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-center">
          Assalaamu 'Alaykum warahmatullaahi wabarakaatuhu! We are delighted
          to welcome our future scholars and their parents to Al-Manaar Tahfeez
          School (ATS) for the 2025/2026 academic session. At ATS, we are
          committed to providing an enriched learning environment where Muslim
          children can memorize the Qur’an, learn Arabic, study Islamic studies,
          and receive a sound Western education.
        </p>

        <Link
          to="/academics"
          className="bg-yellow-400 text-blue-950 font-bold px-10 py-4 rounded-full text-lg md:text-xl transform transition hover:bg-yellow-500 hover:text-white hover:scale-105"
        >
          View Academics
        </Link>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 border-b-4 border-yellow-400 pb-2">
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

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-100 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          Our Vision
        </h2>

        <ul className="max-w-3xl space-y-3 text-lg md:text-xl">
          {[
            "Academic excellence",
            "Strong Islamic identity",
            "Fluent Arabic proficiency",
            "Complete and structured Qur’an memorization",
            "Raising future scholars, leaders, and responsible citizens"
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-2 group transform transition hover:scale-105"
            >
              <span className="h-3 w-3 bg-brown-600 rounded-full group-hover:bg-yellow-400 transition"></span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mt-6 leading-relaxed">
          By the will of Allah, we aim to build a generation that upholds truth,
          integrity, and service to the Ummah.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <img src={schoolLogo} alt="School Logo" className="h-12 w-12 mb-4 md:mb-0" />
        <p className="text-center md:text-left text-lg md:text-xl">
          &copy; {new Date().getFullYear()} Al-Manaar Tahfeez School. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;