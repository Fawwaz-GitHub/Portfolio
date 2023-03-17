import React from 'react'
import html from "../Assets/html.png"
import css from "../Assets/css.png"
import javascript from "../Assets/javascript.png"
import mysql from "../Assets/mysql.png"
import mongodb from "../Assets/mongo.png"
import nestjs from "../Assets/nest.png"
import react from "../Assets/react.png"
import node from "../Assets/node.png"
import github from "../Assets/github.png"
import redux from "../Assets/redux.png"
import postman from "../Assets/postman.png"
import figma from "../Assets/figma.png"

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#1d1d26] text-gray-200'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-200'>Skills</p>
                <p className='py-4 text-gray-400'>// These Are Technologies I've Worked With</p>
            </div>
            {/* Skills Container */}
            <div className='w-full grid grid-cols-3 sm:grid-cols-6 gap-3 text-center py-8'>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="html" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="html" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongodb} alt="html" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="html" />
                    <p className='my-4'>NodeJs</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="html" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 sm:block hidden'>
                    <img className='w-20 mx-auto' src={nestjs} alt="html" />
                    <p className='my-4'>NestJs</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mysql} alt="html" />
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 sm:block hidden'>
                    <img className='w-20 mx-auto' src={redux} alt="html" />
                    <p className='my-4'>Redux</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500 sm:block hidden'>
                    <img className='w-20 mx-auto' src={postman} alt="html" />
                    <p className='my-4'>Postman</p>
                </div>
                <div className='shadow-md hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={figma} alt="html" />
                    <p className='my-4'>Figma</p>
                </div>                                
            </div>
        </div>
    </div>
  )
}

export default Skills