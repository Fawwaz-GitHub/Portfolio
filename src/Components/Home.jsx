import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#1d1d26]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-400'>Hey, Myself</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Mohammed Fawwaz</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm A Full Stack Developer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>An Efficient Full Stack Developer With Experience In Application Layer, 
        Presentation Layer & Databases. And Also A Collabrative Team Player With Excellent Technical Abilities.</p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black'> 
            <Link className='flex items-center' to="projects" smooth={true} duration={500} offset={-20}>
              View Work  &nbsp; <HiArrowNarrowRight/>
            </Link> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home