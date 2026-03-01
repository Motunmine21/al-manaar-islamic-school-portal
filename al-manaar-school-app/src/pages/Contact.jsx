// src/pages/Contact.jsx
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import logo from "../assets/schoolLogo.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: new Date(),
      });
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative"
      style={{
        backgroundColor: "#0B1F3A",
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "500px",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1F3A] opacity-90"></div>

      <div className="relative bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg z-10">
        <h2 className="text-2xl font-bold text-center text-[#0B1F3A] mb-2">
          Contact Al-Manaar Tahfeez School
        </h2>

        <p className="text-center text-gray-500 mb-6">
          We would love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C8A951]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1F3A] text-white py-3 rounded-lg hover:bg-[#08172C] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center mt-3">
              Message sent successfully!
            </p>
          )}

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Apply Button */}
          <Link
            to="/admissions"
            className="block text-center w-full border-2 border-[#0B1F3A] text-[#0B1F3A] py-3 rounded-lg hover:bg-[#0B1F3A] hover:text-white transition"
          >
            Begin Admission Process
          </Link>
        </form>
      </div>
    </div>
  );
}