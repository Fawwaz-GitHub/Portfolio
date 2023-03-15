import React,{ useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
// import {BsFillPersonLinesFill} from "react-icons/bs"
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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!sidebar ? <FaBars/> : <FaTimes/> }
        </div>

        {/* Mobile View */}
        <ul className={!sidebar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1d1d26] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Projects</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* Side Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li> */}
            </ul>
        </div>

    </div>
  )
}

export default Navbar