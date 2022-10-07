import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    const [isMobile,setIsMobile] = useState(false);
  return (
    <nav className="navbar">
    <h3 className="logo">Logo</h3>
    <ul className="nav-links">

    <Link to="/" className="home">
        <li>Home</li>
    </Link>

    <Link to="/about" className="about">
        <li>About</li>
    </Link>

    <Link to="/skills" className="skills">
        <li>Skills</li>
    </Link>

    <Link to="/contacts" className="contacts">
        <li>Contacts</li>
    </Link>

    <Link to="/signup" className="signup">
        <li>Sign Up</li>
    </Link>

    </ul>
<button className="mobile-menu-icon">
{isMobile ? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}

</button>
    </nav>
  )
}

export default Navbar