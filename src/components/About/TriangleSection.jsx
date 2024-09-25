import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";
import { RxRocket } from "react-icons/rx";
import ReadMore from './MissionReadMore';


const TriangleSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-48 rounded-lg">
      <div className="relative w-full max-w-4xl  mx-auto rounded-lg shadow-lg  mt-16">

      <div className="absolute top-0 left-0 -mt-28 sm:-mt-32 md:lg:-mt-24">
          <div className="text-green-500 border-l-2 border-green-500 pl-2 m-1 w-52">
            <h2 className="font-bold text-lg lg:text-xl">OUR VALUES</h2>
            <p className="text-gray-600 text-sm lg:text-base ">
           We at Gemba InfoTech are committed to delivering maximum value to our clients helping them succeed in a constantly changing and challenging world.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 -mt-60 sm:-mt-44 md:lg:-mt-48">
          <div className="text-blue-500 border-l-2 border-blue-500 pl-2 m-1 w-52">
            <h2 className="font-bold text-lg lg:text-xl">OUR VISION</h2>
            <p className="text-gray-600 text-sm lg:text-base ">
            To deliver faster time-to-market quality solutions that render high ROI to our clients leveraging cutting-edge technologies.
            </p>
          </div>
        </div>

       <div className="translate-y-28 sm:translate-y-12 md:translate-y-7 lg:translate-y-6 ">
       {/* Vision Section */}
<div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 sm:-translate-y-28 md:-translate-y-40 lg:-translate-y-48 ring-1 ring-blue-500 ring-offset-2 sm:ring-offset-4 lg:ring-offset-8 rounded-full transition duration-500 ease-in-out hover:scale-105">
  <div className="flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60  bg-blue-400 rounded-full shadow-lg">
    <FaRegEye className="text-3xl sm:text-4xl md:text-5xl text-white" />
    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">Vision</h2>
  </div>
</div>

{/* Values Section */}
<div className="absolute left-16 sm:left-48 md:left-60 lg:left-56 top-4 sm:top-6 md:top-4 lg:top-0 rounded-full ring-1 ring-green-500 ring-offset-2 sm:ring-offset-4 lg:ring-offset-8 transition duration-500 ease-in-out hover:scale-105">
  <div className="flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-green-400 rounded-full shadow-lg">
    <IoDiamondOutline className="text-3xl sm:text-4xl md:text-5xl text-white" />
    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">Values</h2>
  </div>
</div>

{/* Mission Section */}
<div className="absolute right-16 sm:right-48 md:right-60 lg:right-56 top-4 sm:top-6 md:top-4 lg:top-0 rounded-full ring-1 ring-red-500 ring-offset-2 sm:ring-offset-4 lg:ring-offset-8 transition duration-500 ease-in-out hover:scale-105">
  <div className="flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-red-400 rounded-full shadow-lg">
    <RxRocket className="text-3xl sm:text-4xl md:text-5xl text-white" />
    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">Mission</h2>
  </div>
</div>

</div>

         </div>
         <div className="mt-64 pb-16 pt-6">
      <div className="text-red-500 border-l-2 border-red-500 pl-2 ml-2 w-56">
        <h2 className="font-bold text-lg lg:text-xl">OUR MISSION</h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Gemba Infotech fundamental company values enable us to perform our mission in the best way possible by means of:
          <ReadMore />
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default TriangleSection;
