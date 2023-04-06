import React,{ useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Link } from "react-scroll"
import Mf from "../Assets/mf.png"

const Navbar = () => {

    const [ sidebar, setSidebar ] = useState(false)
    const handleClick = () => setSidebar(!sidebar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d1d26] text-gray-300'>
        <div>
            <img src={Mf} alt="Fawwaz Logo" style={{ width: "60px"}}/>
        </div>

        {/* Desktop View */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500} offset={-20}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500} offset={-50}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!sidebar ? <FaBars/> : <FaTimes/> }
        </div>

        {/* Mobile View */}
        <ul className={!sidebar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1d1d26] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-20}>
                    Skills
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="projects" smooth={true} duration={500} offset={-90}>
                    Projects
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-20}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Side Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/mbfawwaz-575390227" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="https://github.com/Fawwaz-GitHub" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="mailto: mbfawwaz@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="https://flowcv.com/resume/k9ned9tk7e" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
