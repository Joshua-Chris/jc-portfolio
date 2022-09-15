import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-[100vh] pt-[100px] bg-gray-900'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className='text-blue-600'>Hi, my name is</p>
          <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Joshua Chris</h1>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-700px'>I specialize in building exceptionally outstanding client side 
            interfaces and experiences, using JavaScript and ReactJs
          </p>
          <p className='text-[#8892b0] py-4 max-w-700px text-sm'>
          During my first internship, I realized I loved coding. Sitting in front of my computer for several hours coding, debugging, developing, testing, and learning new things always felt like breathing in a remarkably fulfilling way. From then, I knew software development was for me. I delight in hitting and surpassing set goals!
          </p>
          <div>
            <Link to="projects" smooth={true} duration={200}>
              <button className='group text-white rounded-lg border-2 border-[#8892b0] px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
                View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-4' /></span>
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home