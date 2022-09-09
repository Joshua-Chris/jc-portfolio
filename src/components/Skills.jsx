import React from 'react';

import HTML from '../assets/html-5.png';
import CSS from '../assets/css-3.png';
import SASS from '../assets/sass.png';
import JavaScript from '../assets/js.png';
import GitHub from '../assets/github.png';
import ReactImg from '../assets/reactjs.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills</p>
              <p className='py-4'>A list of the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SASS} alt="SASS icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c1669] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>React JS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;