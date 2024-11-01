import React from 'react';
import {Link} from 'react-router-dom'
import { FaHtml5, FaNodeJs, FaReact,FaPython , FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress,SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import Navbar from '../Components/Navbar'
const Skill = () => {
  return (
    <div div className='bg-white'>
      <Navbar/>
    <div className='text-4xl text-blue-600 font-bold pl-20 underline word-space-2'>Skills & Knowledge</div>
    <div className="grid grid-cols-4 gap-5 w-full justify-center bg-white pl-40">
      <div><FaHtml5 className="w-40 h-96 text-yellow-400" /></div>
      <div><IoLogoCss3 className="w-40 h-96 text-blue-600" /></div>
      <div><FaNodeJs className="w-40 h-96 text-yellow-400" /></div>
      <div><FaReact className="w-40 h-96 text-blue-600" /></div>
      <div><SiExpress className="w-40 h-96 text-black" /></div>
      <div><SiMongodb  className="w-40 h-96 text-green-400" /></div>
      <div><RiTailwindCssLine className="w-40 h-96 text-blue-400" /></div>
      <div><FaPython className="w-40 h-96 text-yellow-400" /></div>
      <div><FaJava className="w-40 h-96 text-red-400" /></div>
      <div><FaGithub className="w-40 h-96 text-black" /></div>
    </div>
    <div className='place-content-center mt-10 ml-20 '>
      <Link to='/portfolio'>
      <button className="btn btn-primary">Portfolio</button>
      
      </Link>
      <Link to ='/contact'>
      <button className="btn btn-secondary ml-2">Contact</button>
      </Link>
      </div>
    </div>
  );
};

export default Skill;
