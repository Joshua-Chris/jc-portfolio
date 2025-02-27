import React from 'react';
import author from '../assets/author1.JPG';
import noxyl from '../assets/noxyl1.JPG';
import jomas from '../assets/jomasdentalclinic.png';

const WorkWp = () => {
  return (
    <div
      name="projectswp"
      className="w-full md:h-screen text-gray-300 bg-gray-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="pt-8 text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            WordPress Projects
          </p>
          <p className="py-6">WordPress CMS | Elementor, ETC</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4 sm:pb-8">

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
          
          {/* Grid Item - Jomas Dental Clinic WordPress Website */}
          <div
            style={{ backgroundImage: `url(${jomas})` }}
            className="h-[15rem] bg-no-repeat bg-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-40 group-hover:opacity-100 group-hover:bg-gray-500">
              <div className="bg-gray-800 border-orange-500 border-4 text-center rounded-lg">
                <a href="https://jomasdentalclinic.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit Website
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

export default WorkWp;
