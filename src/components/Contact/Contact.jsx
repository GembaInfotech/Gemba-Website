import React from "react";
import img14 from "../../assets/img14.jpg";
import connectimg from "../../assets/connectimg.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-24">
    
    <div className="bg-gray-200 top-0 "> {/* Light Gray background */}
  <div
    className="relative top-0 h-[50vh] sm:h-[60vh] md:h-[65vh]"
    style={{
       backgroundImage: `url(${connectimg})`,
       backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
         }}
  >
    <div className="py-20 md:py-24 bg-black bg-opacity-50 h-full "> {/* Lighter Gray overlay */}
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-6 lg:mx-16 my-6 sm:my-10 lg:my-4 text-center py-4 sm:py-6 lg:py-8 bg-gray-100 bg-opacity-50 rounded-tl-2xl rounded-br-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Welcome!</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 mx-6 sm:mx-10 md:mx-14 flex">
          <h3 className="animate-slideInLeft">Connect with Us -</h3>
          <h4 className="animate-slideInRight">Your Voice Matters</h4>
        </p>
        <a
          href="/contact"
          className="bg-green-500 text-gray-800 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-3xl shadow-lg hover:bg-green-600 transition duration-300"
        >
          Send a Message
        </a>
      </div>
    </div>
  </div>

  {/* Contact Information Section */}
  <div className="py-12 sm:px-6">
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div>
        <FaMapMarkerAlt className="text-green-500 text-4xl mx-auto mb-4" /> {/* Green instead of Yellow */}
        <h3 className="text-xl font-semibold text-gray-800">OUR MAIN OFFICE</h3>
        <p className="text-gray-500 mt-2">
          Gemba Infotech, Quark Atrium,
          <br />
          Phase 8B, Mohali, India
        </p>
      </div>
      <div>
        <FaMapMarkerAlt className="text-green-500 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">OUR BRANCH</h3>
        <p className="text-gray-500 mt-2">
          SCO 224, Level 1&2, Sector 37C,
          <br />
          Chandigarh CH 160036 INDIA
        </p>
      </div>
      <div>
        <FaPhoneAlt className="text-green-500 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">PHONE NUMBER</h3>
        <p className="text-gray-500 mt-2"> +91-172-4659657</p>
      </div>
      <div>
        <FaEnvelope className="text-green-500 text-4xl mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">EMAIL</h3>
        <p className="text-gray-500 mt-2">
          <a href="mailto: sales-team@gembainfotech.com" className="underline">
            sales-team@gembainfotech.com
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* Support Section */}
  <div className="bg-gray-300 px-6 py-8 sm:py-12"> {/* Light Gray background */}
  <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Left Side Content */}
    <div className="md:text-center px-6 ">
      <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold mt-8 sm:mt-16">
        We're here to support
      </h2>
      <h3 className="text-gray-800 text-base sm:text-lg my-4">
        Your Dream, Our Expertise - Fill in Your Details, and Let's Get Started!
      </h3>
      
      {/* Opening Times Card */}
      <div className="bg-gray-100 rounded-tl-2xl rounded-br-2xl my-8 sm:my-16 mx-auto sm:mx-12 md:mx-20 lg:mx-8 p-8 
      sm:p-12 text-center">
        <p className="text-gray-800 text-md sm:text-lg">
          <span className="text-lg sm:text-xl font-bold">Opening Times:</span>
          <br />
          <br />
          Mon - Fri: 09:30am - 06:30pm
          <br />
          Sat - Sun: Closed
        </p>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="px-6 ">
      <h1 className="text-2xl sm:text-3xl font-bold my-4 text-gray-800">
        Send Us a Message - Let's Get in Touch
      </h1>
      
      {/* Form Section */}
      <div className="bg-gray-100 p-6 sm:p-8 rounded-tl-2xl rounded-br-2xl">
        <div className="relative mb-4">
          <select className="block w-full bg-gray-200 border-b-2 border-gray-300 p-2 rounded focus:outline-none">
            <option value="" disabled selected>Select</option>
            <option value="1">SAP</option>
            <option value="2">Oracle</option>
            <option value="3">App & Web Development</option>
            <option value="4">Web Design</option>
            <option value="5">Server Handling</option>
            <option value="6">Custom ERP</option>
            <option value="7">POS Application</option>
            <option value="8">OS Upgrade</option>
            <option value="9">Digital Marketing</option>
            <option value="10">Quality Assurance</option>
            <option value="11">Enterprise Automation</option>
            <option value="12">Graphic Design</option>
            <option value="13">Data Analytics</option>
          </select>
        </div>
        
        {/* Form Fields */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value.trim();
            const email = e.target.email.value.trim();
            
            if (!name || !email) {
              alert("Please fill out both the Name and Email fields.");
              return;
            } else {
              alert("Form Submitted!");
            }
          }}
        >
          <div className="my-4">
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none"
              placeholder="Enter your Name*"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none"
              placeholder="Enter a valid Email address*"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="url"
              placeholder="Your Website"
              className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 rounded bg-gray-200 text-black focus:outline-none"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-gray-800 font-bold p-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 w-full sm:w-40"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

</div>


<div
  className="h-[50vh] md:h-[60vh] lg:h-[65vh]  relative"  // Adjust height based on screen size
  style={{
    backgroundImage: `url(${img14})`,
    backgroundSize: "cover",      // Ensure the image covers the full area
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
    backgroundPosition: "center",  // Center the image
  }}
>
  {/* Overlay Section */}
  <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center lg:justify-end    text-end lg:text-right">
    <div className="px-4 py-20 sm:px-6 md:px-12 md:py-40">  {/* Adjust padding based on screen size */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Stay Connected,
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">
        Stay Informed
      </h2>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;
