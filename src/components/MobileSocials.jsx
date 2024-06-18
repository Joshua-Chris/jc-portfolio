import React from 'react'
import { useState } from 'react';
import { BiAnalyse } from "react-icons/bi";
import {FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';


const MobileSocials = () => {
  const [socials, setSocials] = useState(false)
  const MobileSocials = () => setSocials(!socials)

  return (
    <div className='flex md:hidden bg-gray-900 text-white'>
        {/* Mobile Social Icons */}
        <div onClick={MobileSocials} className="ease-in-out duration-500 cursor-pointer flex flex-col justify-center items-center lg:hidden z-9 p-2 fixed bottom-10 right-5 bg-gray-900 rounded-xl shadow-xl shadow-gray-500">
            <h1 className='text-blue-600 animate-pulse text-[10px]'>Connect</h1>
            {!socials ? <BiAnalyse size={30} /> : <FaTimes size={30}/>}
        </div>
        {/* Social Icons */}
        <div className={!socials ? 'hidden' : "w-[45px] mr-6 rounded-lg flex lg:hidden fixed flex-col bottom-[130px] right-0 bg-gray-900 bg-opacity-80 ease-linear duration-300"}>
            <ul>
                <li className='w-[45px] h-[50px] flex justify-center items-center mr-7 hover:my-2 duration-300 bg-blue-600 rounded-xl my-1'>
                    <a className='flex flex-col text-[9px] font-bold justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/joshua-chris-ofurunna/" target="_blank" rel="noreferrer">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[45px] h-[50px] flex justify-center items-center mr-7 hover:my-2 duration-300 bg-slate-900 rounded-xl my-1'>
                    <a className='flex flex-col text-[9px] font-bold justify-between items-center w-full text-gray-300'
                    href="https://github.com/Joshua-Chris" target="_blank" rel="noreferrer">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[45px] h-[50px] flex justify-center items-center mr-7 hover:my-2 duration-300 bg-red-600 rounded-xl my-1'>
                    <Link to="contact" className='flex flex-col text-[9px] font-bold justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </Link>
                </li>
                <li className='w-[45px] h-[50px] flex justify-center items-center mr-7 hover:my-2 duration-300 bg-gray-500 rounded-xl my-1'>
                    <a className='flex flex-col text-[9px] font-bold justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/file/d/1IE_j1pLtU2uB3otfxAvT48G66VoE1lzG/view?usp=drive_link" target="_blank" rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileSocials
