import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image 1 (1).png';

const Navbar = () => {
  return (
    <header
      style={{ position: "sticky", top: 0 }}
      className="bg-black flex justify-between items-center text-white w-full z-10 h-[80px] px-[40px] bg-[#141414B2] opacity-70"
    >
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-full" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-[20px]">
          <li><Link to="/college">About Us</Link></li>
          <li><Link to="/rose">Services</Link></li>
          <li><Link to="/white">Aircraft Guide</Link></li>
          <li><Link to="/hero">Contact Us</Link></li>
          <li><Link to="/section">Reviews</Link></li>
          <li><Link to="/sidebar">Eng</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
