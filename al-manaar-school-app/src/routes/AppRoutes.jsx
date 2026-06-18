import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";
import Academics from "../pages/Academics";
import Announcements from "../pages/Announcements";

function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/announcements" element={<Announcements />} />

    </Routes>
  );
}

export default AppRoutes;