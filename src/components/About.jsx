import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Joshua Chris, it's great to have you here!</p>
            </div>
            <div>
              <p>During my first internship, I realized I loved coding. Sitting in front of my computer for several hours coding, debugging, developing, testing, and learning new things always felt like breathing in a remarkably fulfilling way. From then, I knew software development was for me. A month after I'd begun working as an intern, I got fully employed as a full-time staff doing web development. 
                Hi! I'm a Christian who loves to code, create, and win! I'm a Front End Developer - JavaScript | React JS. I'm currently actively open to entry/mid-level Front-end JS/React Developer roles. I'm an exceptionally passionate front-end web developer with more than three years of experience, and I delight in hitting and surpassing set goals!
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;