import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/"></Link> 
      <Link to="/about"></Link> 
      <Link to="/academics"></Link> 
      <Link to="/contact"></Link> 
      <Link to="/admissions"></Link>
    </nav>
  );
}

export default Navbar;