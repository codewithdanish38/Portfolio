import React from 'react';
import profileAbout from '../../public/profileAbout.png';
import { BiLogoFacebookSquare, BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaYoutube, FaTelegramPlane,FaGithub } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { ReactTyped } from "react-typed";
const Banner = () => {
 
  return (
    <>
    <div className="flex flex-col md:flex-row bg-white p-4 md:p-8 ">
      <div className="w-full md:w-1/2 flex flex-col space-y-4 text-black ml-10">
        <span className="text-lg md:text-xl font-semibold mt-4 md:mt-10">
          Welcome To My Feed
        </span>
        <h1 className="text-xl md:text-5xl font-bold mt-4 md:mt-10">
          Hello, I'm A{' '}
          {/* <span className="text-xl md:text-5xl text-yellow-400 ml-1">Developer</span> */}
          <ReactTyped className='text-xl md:text-5xl text-yellow-400 ml-1'
         
          strings={['Devepoler','Programmer','Codder']}
          typeSpeed={50}
          loop={true}
        />
        </h1>
        <p className="text-base md:text-lg leading-relaxed pt-4 md:pt-10 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia fugiat
          dolores vitae, ab incidunt natus delectus pariatur praesentium aliquid, totam
          dolorem distinctio odit porro rem perferendis facere qui nemo.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-between items-start mt-10 py-5">
          {/* Left-aligned Social Media Section */}
          <div>
            <h1 className="font-bold text-xl underline">Available On</h1>
            <div className="flex space-x-4 pt-4">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <BiLogoFacebookSquare className="text-blue-600 text-5xl hover:text-blue-800" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <IoLogoLinkedin className="text-blue-700 text-5xl hover:text-blue-900" />
  </a>
 
  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
    <FaTelegramPlane className="text-blue-500 text-5xl hover:text-blue-700" />
  </a>
  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-black-500 text-5xl hover:text-blue-700" />
  </a>
  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
    <BiLogoGmail className="text-red-600 text-5xl hover:text-blue-700" />
  </a>
</div>

          </div>

          {/* Right-aligned Social Media Section */}
          <div className="text-right">
            <h1 className="font-bold text-xl underline ">Currently Working On</h1>
          
            <div className="flex space-x-4 pt-4 ">
              <a href="https://W3school.com">
              
              <BiLogoMongodb className="text-blue-600 text-5xl hover:text-blue-800" />  
              </a>
              <SiExpress className="text-blue-700 text-5xl hover:text-blue-900" />
              <FaReact className="text-red-600 text-5xl hover:text-red-800" />
              <TbBrandJavascript className="text-blue-500 text-5xl hover:text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 hover:scale-110 duration-300">
        <img
          src={profileAbout}
          alt="profile"
          className="rounded-full w-32 h-32 md:w-96 md:h-96"
        />
      </div>
    </div>
    <div>
    <div className='h-full'>
      <h1 className='font-bold text-black text-xl underline p-10 '>Goals</h1>
        <h1 className='text-md font-font-medium semibold text-black space-x-1 p-10 py-10'>"Welcome to my digital space! I'm a passionate developer driven by a curiosity to solve complex problems and bring meaningful ideas to life through code. My journey in tech is fueled by a commitment to lifelong learning, creativity, and the desire to create user-focused applications that blend functionality with design. With each project, I strive to build seamless, impactful solutions that empower and inspire others. My goal is to grow continuously, innovate responsibly, and contribute to an ever-evolving industry that shapes the future. Thank you for stopping by—I’m excited to share my work and vision with you!"</h1>
      </div>
    </div>
    </>
  );
};

export default Banner;
