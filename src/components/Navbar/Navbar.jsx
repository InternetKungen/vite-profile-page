import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>

      <Link to="/about" className="navLink">
        <button className="nav-button--about"> About </button>
      </Link>
      

      
      <Link to="/projects" className="navLink">
        <button className="nav-button--projects"> Projects </button>
      </Link>
      
      
      <Link to="/contact" className="navLink">
        <button className="nav-button--contact"> Contact </button>
      </Link>
      
    </nav>
  );
}

export default Navbar;