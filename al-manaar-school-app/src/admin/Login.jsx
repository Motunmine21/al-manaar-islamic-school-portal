import { useState } from "react";
import { useNavigate } from "react-router-dom";
import schoolLogo from "../assets/schoolLogo.png";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary login
    localStorage.setItem("adminAuth", "true");

    // Redirect to dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-gold-light flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="w-24 h-24 object-contain mb-4"
          />

          <h1 className="text-2xl font-bold text-deep-wine text-center">
            Admin Login
          </h1>

          <p className="text-gray-600 text-center mt-2">
            Sign in to access the school administration dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-navy-dark">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-navy-dark">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-deep-wine text-white py-3 rounded-lg font-semibold hover:bg-navy-dark transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;