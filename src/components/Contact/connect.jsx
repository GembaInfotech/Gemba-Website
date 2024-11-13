
// {/* <div
//   className="h-[50vh] md:h-[60vh] lg:h-[65vh]  relative"  // Adjust height based on screen size
//   style={{
//     backgroundImage: `url(${img14})`,
//     backgroundSize: "cover",      // Ensure the image covers the full area
//     backgroundRepeat: "no-repeat", // Prevent the image from repeating
//     backgroundPosition: "center",  // Center the image
//   }}
// >
//   {/* Overlay Section */}
//   <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center lg:justify-end    text-end lg:text-right">
//     <div className="px-4 py-20 sm:px-6 md:px-12 md:py-40">  {/* Adjust padding based on screen size */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//         Stay Connected,
//       </h1>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">
//         Stay Informed
//       </h2>
//     </div>
//   </div>
// </div> */}



import React from 'react'

const contactForm = () => {
  return (
   <>
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 lg:p-12 bg-blue-50 rounded-lg shadow-lg">
      {/* Form Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Need a Consultation?</h2>
        <p className="mb-6 text-gray-700">Drop us a line! We are here to answer your questions 24/7.</p>
        
        <form className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="How can we help you?"
            rows="4"
          ></textarea>
          
          <div className="flex items-center space-x-2 text-blue-600 cursor-pointer">
            <span>📁</span>
            <label className="cursor-pointer">
              Drag and drop or browse to upload your file(s)
              <input type="file" className="hidden" />
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="p-3 bg-gray-100">+91</span>
              <input
                type="tel"
                placeholder="00000 00000"
                className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-3 rounded-md mt-4 hover:bg-yellow-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
      
      {/* Contact Section */}
      <div className="w-full lg:w-1/3 lg:ml-12">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Get in touch instantly</h3>
            <p className="space-y-2 mt-2 text-blue-600 flex flex-col">
              <a href='tel:+91-172-4659657'>📞 Call us</a>
              <a href='mailto: sales-team@gembainfotech.com'>✉️ Email us</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Join our team</h3>
            <p className="mt-2 text-blue-600">📄 Upload your CV</p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default contactForm