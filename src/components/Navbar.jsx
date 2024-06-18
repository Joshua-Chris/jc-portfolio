import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300'>
        <div>
            <Link to="home" className='cursor-pointer' smooth={true} duration={500}><img src={Logo} alt="Logo"/></Link>
        </div>
        {/* Main menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>About</Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-100">
            {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-20 w-full h-screen md:hidden bg-gray-900 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/joshua-chris-ofurunna/" target="_blank" rel="noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 rounded-r-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Joshua-Chris" target="_blank" rel="noreferrer">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 rounded-r-2xl'>
                    <Link to="contact" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </Link>
                </li>
                <li className='w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-r-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/file/d/1IE_j1pLtU2uB3otfxAvT48G66VoE1lzG/view?usp=drive_link" target="_blank" rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
