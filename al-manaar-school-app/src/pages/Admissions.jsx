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

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "pending", 
      });

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <section className="relative bg-[#08172C] text-yellow-400 py-20 px-6 md:px-16 text-center overflow-hidden">
        <img
          src="/src/assets/schoolLogo.png"
          alt="background logo"
          className="absolute opacity-5 w-[300px] md:w-[400px] lg:w-[500px] right-10 top-10 pointer-events-none"
        />

        <h1 className="relative z-10 text-5xl md:text-6xl font-bold mb-6">
          Apply for Admission
        </h1>

        <p className="relative z-10 text-lg md:text-xl max-w-3xl mx-auto">
          Fill out the form below to start your child’s journey at Al-Manaar Tahfeez Schools.
        </p>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 md:px-16 flex-grow">

        {success && (
          <p className="text-green-600 font-semibold text-center mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Parent Info */}
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08172C] mb-4 border-b-2 border-yellow-400 pb-2">
              Parent Information
            </h2>

            <div className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Student Info */}
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08172C] mb-4 border-b-2 border-yellow-400 pb-2">
              Student Information
            </h2>

            <div className="space-y-4">
              <input
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Child Full Name"
                required
                className="w-full p-3 border rounded-lg"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                placeholder="State of Origin"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                name="classApplying"
                value={formData.classApplying}
                onChange={handleChange}
                placeholder="Class Applying For"
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#08172C] text-yellow-400 px-8 py-3 rounded-full font-semibold disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </section>

      {/* ================= FOOTER ================= */} 
      <footer className="bg-[#08172C] text-white py-6 text-center mt-auto">
         <p>16, New Jerusalem street, Off Alhaji Olaniyan avenue, Olaoluwa bus stop, Ikola, Alaso.</p> 
         <p>09033435812 | 08087288739 | 07073852187</p> <p>almanaartahfeez@gmail.com</p> 
         <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Al-Manaar Tahfeez Schools</p> 
      </footer>
    </div>
  );
};

export default Admissions;