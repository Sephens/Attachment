import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    const [isMobile,setIsMobile] = useState(false);
  return (
    <nav className="navbar">
    <h3 className="logo">MERN</h3>
    <ul className={isMobile? "nav-links-mobile":"nav-links"
    
    }
    onClick={()=>setIsMobile(false)}
    >

    <Link to="/" className="home">
        <li><i className="fas fa-home"></i>Home</li>
    </Link>

    <Link to="/about" className="about">
        <li><i className="fas fa-about"></i>About</li>
    </Link>

    <Link to="/skills" className="skills">
        <li><i className="fas fa-book"></i>Skills</li>
    </Link>

    <Link to="/contacts" className="contacts">
        <li><i className="fas fa-phone"></i>Contacts</li>
    </Link>

    <Link to="/signup" className="signup">
        <li><i className="fas fa-pen"></i>Sign Up</li>
    </Link>

    </ul>
<button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
{isMobile ? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}

</button>
    </nav>
  )
}

export default Navbar