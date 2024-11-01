import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='bg-white'>
        <Navbar/>
        <Banner/>
       
       
        
    </div>
    <div>
      <Link to ='/about'>
         <button className="btn btn-secondary ml-10">Check About </button> /</Link> </div>

    </>
  )
}

export default Home
