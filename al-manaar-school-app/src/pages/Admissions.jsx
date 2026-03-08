// src/pages/Admissions.jsx
import { useState } from "react";
import { db } from "../firebase/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    childName: "",
    gender: "",
    dateOfBirth: "",
    stateOfOrigin: "",
    classApplying: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
              await addDoc(collection(db, "applications"), {
          ...formData,
          createdAt: serverTimestamp(),
        });

        // popup alert
        alert("Application submitted successfully!");

        // success text on page
        setSuccess("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        childName: "",
        gender: "",
        dateOfBirth: "",
        stateOfOrigin: "",
        classApplying: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#08172C] text-yellow-400 py-20 px-6 md:px-16 text-center overflow-hidden">
        {/* Faint Logo Background */}
        <img
          src="/src/assets/schoolLogo.png"
          alt="background logo"
          className="absolute opacity-5 w-[300px] md:w-[400px] lg:w-[500px] right-10 top-10 pointer-events-none"
        />
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold mb-6">
          Apply for Admission
        </h1>
        <p className="relative z-10 text-lg md:text-xl max-w-3xl mx-auto">
          Fill out the form below to start your child’s journey at Al-Manaar
          Tahfeez Schools. We welcome children from Crèche to Primary levels
          with a balanced Islamic and Western education.
        </p>
      </section>

      {/* ================= ADMISSION FORM ================= */}
      <section className="py-16 px-6 md:px-16 flex-grow">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Parent Information */}
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08172C] mb-4 border-b-2 border-yellow-400 pb-2">
              Parent Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Student Information */}
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08172C] mb-4 border-b-2 border-yellow-400 pb-2">
              Student Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Child’s Full Name</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">State of Origin</label>
                <select
                  name="stateOfOrigin"
                  value={formData.stateOfOrigin}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="">Select State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">FCT</option>
                  <option value="Kano">Kano</option>
                 
                </select>
              </div>
              <div>
                <label className="block font-semibold text-[#08172C] mb-1">Class Applying</label>
                <input
                  type="text"
                  name="classApplying"
                  value={formData.classApplying}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#08172C] text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#08172C] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#08172C] text-white py-6 text-center mt-auto">
        <p>16, New Jerusalem street, Off Alhaji Olaniyan avenue, Olaoluwa bus stop, Ikola, Alaso.</p>
        <p>09033435812 | 08087288739 | 07073852187</p>
        <p>almanaartahfeez@gmail.com</p>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Al-Manaar Tahfeez Schools</p>
      </footer>
    </div>
  );
};

export default Admissions;