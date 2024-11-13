import React from 'react';
import UploadCV from './UploadCV';
import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';

const contactForm = () => {
  // const [phone, setPhone] = useState('');

  return ( 
    <div className="pt-24">
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly pt-32 pb-20 p-6 lg:px-8 bg-blue-50 rounded-lg shadow-lg">
      {/* Form Section */}
      <div className="w-full lg:w-[52%] bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Let's Work Together!</h2>
        <p className="mb-6 text-gray-600">Drop us a line! We are here to answer your questions 24/7.</p>
        
        <form className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="How can we help you?"
            rows="4"
          ></textarea>
          
        
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
           <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
            {/* <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        inputClass="w-full py-6 px-2 lg:p-6 focus:outline-none focus:ring-1 focus:ring-blue-400"
        dropdownClass="custom-dropdown"
        className=" "
      /> */}
            </div>
         
          
          <button
            type="submit"
            className="w-1/3 lg:w-1/4 p-3 rounded-md bg-[#EA5256] text-white mt-4 hover:bg-[#e77b7f] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      
      {/* Contact Section */}
      <div className="w-full lg:w-[30%] lg:ml-12">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Get in touch instantly</h3>
            <p className="space-y-2 mt-2 text-gray-600 flex flex-col">
              <a href='tel:+91-172-4659657'>📞 Call us</a>
              <a href='mailto: sales-team@gembainfotech.com'>✉️ Email us</a>
            </p>
          </div>
          <h3 className="text-xl font-bold mb-1">Join our team</h3>
        <UploadCV/>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default contactForm