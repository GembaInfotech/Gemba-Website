/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


const ContactForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
    // Form submission logic goes here
  };

  return (
    <div className='px-4 sm:px-6 py-8 sm:py-12 bg-gray-100'>
    <div className="flex flex-col lg:flex-row lg:space-x-8  min-h-screen">
      {/* Left section */}
      <div className="lg:w-1/4 mb-8 lg:mb-0 mr-6 lg:mr-0">
        <h2 className="text-xl font-bold mb-1">Personalized approach</h2>
        <p className="text-gray-600 mb-4">You will engage directly with specialists who are experienced in your domain.</p>
        <h2 className="text-xl font-bold mb-1">No obligations</h2>
        <p className="text-gray-600 mb-4">We're here to listen, provide guidance, and answer your questions — whenever you're ready to take the next step.</p>
      </div>
      
      {/* Form section */}
      <div className="lg:w-1/2 bg-white mr-2 lg:mr-0 p-6 lg:p-6 rounded-l-lg  lg:bg-gradient-to-r from-blue-100 to-transparent">
        <h3 className="text-2xl font-bold mb-4">Let's Get In Touch</h3>
        <p className="text-gray-600 mb-6">
          Do you have a question for our specialists, want to discuss your project, or learn more about our expertise? 
          Feel free to send your request using the form below!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Kindly describe your request."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <div>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
          <div className='flex flex-col lg:flex-row gap-4'>
          <input
            type="text"
            placeholder="Enter your Full name"
            className="lg:w-[48%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Enter your Company"
            className="lg:w-[49%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          </div>
          <div className='flex flex-col lg:flex-row gap-4'>
          <input
            type="email"
            placeholder="Enter your Email address"
            className="lg:w-[48%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            className="lg:w-[49%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          </div>

<div className="relative mb-4">
          <select className="block w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400">
            <option value="" disabled selected>
             Please select from the dropdown
            </option>
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

          <button
            type="submit"
            className="w-1/3 lg:w-1/4 p-3 text-gray-800 font-semibold rounded-md bg-[#EA5256]  mt-4 hover:bg-[#e77b7f] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right section */}
      <div className="lg:w-1/4 mt-6 lg:mt-0 lg:bg-gradient-to-l from-blue-100 to-transparent rounded-r-lg lg:pt-6">
        <h3 className=" text-xl font-bold mb-1">Our contacts</h3>
        <div className="flex flex-col">
        <a href="tel:+91-172-4659657" className="text-gray-600 mb-2 "><span role="img" aria-label="Phone">📞</span> +91-172-4659657</a>
        <a href="mailto:sales-team@gembainfotech.com" className="text-gray-600 mb-4 "><span role="img" aria-label="Email">✉️</span> sales-team@gembainfotech.com</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
