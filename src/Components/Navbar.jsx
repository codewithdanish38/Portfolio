import React from 'react';
import profileAbout from '../../public/profileAbout.png';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="navbar max-w-7xl mx-auto  justify-between px-2 md:px-8">
        {/* Left Section: Profile Image Dropdown */}
        <div className="flex items-center space-x-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src={profileAbout} />
            </div>
          </div>
          <a className="btn btn-ghost flex flex-col text-left">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              DANISH <span className="text-blue-500">KHAN</span>
            </h1>
            <p className="text-sm md:text-base text-blue-600">Web Developer</p>
          </a>
        </div>

        {/* Center Section: Navbar Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6 font-poppins font-bold text-black">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Mobile Dropdown Menu */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">Experience</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
