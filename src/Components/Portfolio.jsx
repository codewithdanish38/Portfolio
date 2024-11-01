import React from 'react';
import Cards from './Cards';
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Portfolio = () => {
  return (
    <>
       <Navbar/>
    <div className='bg-white '>
      <div className='max-w-screen-2xl container px-4 md:px-20 py-10'>
        <div>
          <h1 className='text-2xl font-bold text-blue-600 py-10 underline '>Portfolio</h1>
          <span className='text-black font-bold py-20 underline mt-10 md-20 uppercase text-xl'>Feature Project</span>
        </div>
        <div className='flex flex-wrap w-full '>
          {/* MongoDB */}
          <div className='w-full md:w-1/3 p-4 pl-10 hover:scale-110 duration-300'>
            <Cards
              img="https://www.bleepstatic.com/content/hl-images/2023/12/16/mongodb-header-o.jpg"
              name='MongoDB'
              title='A NoSQL database for modern applications'
              video='Watch Video'
              source='View Code'
            />
          </div>

          {/* React.js */}
          <div className='w-full md:w-1/3 p-4 hover:scale-110 duration-300'>
            <Cards
              img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              name='React.js'
              title='A JavaScript library for building user interfaces'
              video='Watch Video'
              source='View Code'
            />
          </div>

          {/* Express.js */}
          <div className='w-full md:w-1/3 p-4 hover:scale-110 duration-300'>
            <Cards
              img="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              name='Express.js'
              title='A web application framework for Node.js'
              video='Watch Video'
              source='View Code'
            />
          </div>

          {/* JavaScript */}
          <div className='w-full md:w-1/3 p-4 hover:scale-110 duration-300'>
            <Cards
              img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              name='JavaScript'
              title='A high-level, versatile programming language'
              video='Watch Video'
              source='View Code'
            />
          </div>

          {/* Python */}
          <div className='w-full md:w-1/3 p-4 hover:scale-110 duration-300'>
            <Cards
              img="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              name='Python'
              title='A powerful programming language for web, data science, and more'
              video='Watch Video'
              source='View Code'
            />
          </div>

          {/* Java */}
          <div className='w-full md:w-1/3 p-4 hover:scale-110 duration-300'>
            <Cards
              img="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
              name='Java'
              title='A high-level, object-oriented programming language'
              video='Watch Video'
              source='View Code'
            />
          </div>
        </div>
      </div>
     
     
    </div>
    <div className='place-content-center mt-10 ml-20 '>
      <Link to='/about'>
      <button className="btn btn-primary">About</button>
      
      </Link>
      <Link to ='/skills'>
      <button className="btn btn-secondary ml-2">Skills</button>
      </Link>
      </div>
    </>
  );
}

export default Portfolio;
