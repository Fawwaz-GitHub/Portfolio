import React from 'react'
import { projects } from '../Data/projects'

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-200 bg-[#1d1d26]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-200'>Projects</p>
          <p className='py-6 text-gray-400'>// Here Are Some Of My Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-3'>
        { projects && projects.map((e, i) => (
          <div key={i} style={{ backgroundImage: `url(${e.image})`}} 
          className='group container rounded-md flex justify-center items-center mx-auto for-content'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                {e.name}
              </span>
                <div className='py-4 text-center'>
                  <a href={e.host} rel="noreferrer" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href={e.github} rel="noreferrer" target="_blank"> 
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              <span className='flex justify-center'>
                {e.subtitle}
              </span>
                { 
                  e.responsive === "N" && 
                  <span className='flex justify-center'>
                    Non Responsive
                  </span>
                }  
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects