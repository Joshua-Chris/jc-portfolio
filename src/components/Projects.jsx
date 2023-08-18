import React from 'react';
import Project1 from '../assets/project1.PNG';
import Project2 from '../assets/REA.png';
import dignity from '../assets/dignity.JPG';
import author from '../assets/author.JPG';
import noxyl from '../assets/noxyl.JPG';
import bartek from '../assets/bartek.JPG';

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-gray-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-8 pb-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Projects
          </p>
          <p className="py-6">A list of some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">

          {/* Grid Item - dignity-project */}
          <div
            style={{ backgroundImage: `url(${dignity})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://dignityandrespects.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item - author-project */}
          <div
            style={{ backgroundImage: `url(${author})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://authorenergy.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item - noxyl-project */}
          <div
            style={{ backgroundImage: `url(${noxyl})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://noxylprimegloballimited.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item - bartek-project */}
          <div
            style={{ backgroundImage: `url(${bartek})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://bartekglobalenergyservices.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://codex-github-io.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Joshua-Chris/codex.github.io.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://ccode-realestateapp.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Joshua-Chris/ccode_realestateapp.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
