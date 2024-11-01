import React from 'react'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <>
       <Navbar/>
    <div className='bg-white pl-20'>
      <div >
        <h1 className='text-2xl font-bold underline  text-blue-600  py-10'>About</h1>
        <p className='text-black mt-5 font-semibold'>I'm Danish Khan, a software developer specializing in full-stack web development. I build efficient, user-friendly applications using JavaScript, React, and Node.js. Passionate about problem-solving and clean code, I strive to create impactful digital solutions that enhance user experience.
</p>
      </div>
      <div className='mt-5 '>
        <h1 className='text-2xl font-bold underline  text-blue-600'>Education</h1>
        <p className='text-black font-semibold mt-2'>•	Bachelor of Technology (B.Tech) Artificial Intelligence & Data Science 
        School of Management Sciences, Lucknow|  2025
        CGPA: 7.5  </p><br />
        <p className='text-black font-semibold mt-2'>•	Class XII       
        Amirudduala Islamia Inter College, Lucknow| 2021
        Percentage: 69% </p> <br/>
        <p className='text-black font-semibold mt-2'>•	Class X
        R.P.T Inter College, Lucknow | 2018
        Percentage: 68%.
         </p>
      </div>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold underline  text-blue-600'>Skill </h1>
        <ul className='mt-5'>
          <li className='font-bold text-black '>•	Front-End:<span className='font-semibold'>HTML, CSS, JavaScript, React.js</span></li>
          <li className='font-bold text-black mt-2'>•	Back-End: <span className='font-semibold'>Node.js, Express.js</span></li>
          <li className='font-bold text-black mt-2'>•	Database:<span className='font-semibold'>MongoDB, MySQL</span></li>
          <li className='font-bold text-black mt-2'>•	Version Control: <span className='font-semibold'>: Git, GitHub</span></li>
          <li className='font-bold text-black mt-2'>•	Tools & Technologies<span className='font-semibold'>Postman, VSCode, REST APIs</span></li>
          <li className='font-bold text-black mt-2'>•	Programming Languages<span className='font-semibold'>JavaScript, Java, Python</span></li>
        </ul>
      </div>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold underline  text-blue-600'>Internship</h1>
         <h1 className='text-black  font-bold text-xl'>•	Intern, Full-Stack Development</h1> 
         <p className='text-black font-semibold '>Coding Block Indira Nagar Lucknow | July 2024 –September 2024</p>
        <p className='text-black font-semibold mt-5'> •	Developed and maintained web applications using the MERN stack  <br />
        •	Collaborated with a team to enhance project efficiency and user experience <br />
        •	Implemented RESTful APIs to connect the front-end and back-end seamlessly.
        </p>

      </div>
      <div></div>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold underline  text-blue-600 '> Certificate</h1>
        <ul>
          <li className='text-black font-semibold mt-5'>•	Full-Stack Web Development with MERN – Coding Block Lucknow.</li>
          <li  className='text-black font-semibold mt-2'>•	Java Programming – Logic Pro</li>
          <li className='text-black font-semibold mt-2'>•	Data Structures and Algorithms – GeeksforGeeks</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h1 className='text-2xl font-bold underline  text-blue-600'>Mission</h1>
      <p className='text-black font-semibold'>
      "My mission is to leverage technology to create impactful, user-centered solutions that simplify lives and enhance experiences. I aim to build innovative, reliable software while continuously learning and evolving to meet the demands of the ever-changing tech landscape. Through clean code, collaboration, and a commitment to excellence, I strive to make a positive difference in every project I undertake."
      </p>
      </div>
    </div>
    <div className='place-content-center mt-10 ml-20 '>
      <Link to='/'>
      <button className="btn btn-primary">Home</button>
      
      </Link>
      <Link to ='/portfolio'>
      <button className="btn btn-secondary ml-2">Portfolio</button>
      </Link>
      </div>
    </>
  )
}

export default About
