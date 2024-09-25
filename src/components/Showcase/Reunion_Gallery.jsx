import React from 'react'
import img4 from '../../assets/pictures/15August.jpeg';
import img2 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.03.jpeg';
import img3 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.06 (1).jpeg';
import img1 from '../../assets/pictures/WhatsApp Image 2024-09-10 at 12.42.06 (2).jpeg';


const images = [
    { id: 1, src: img1, title: 'Image 8' },
    { id: 2, src: img2, title: 'Image 9' },
    { id: 3, src: img3, title: 'Image 10' },
    { id: 4, src: img4, title: 'Image 11' },
];

const Reunion_Gallery = () => {
  return (
    <div className='items-center justify-center text-center bg-gradient-to-r from-gray-300 to-gray-200 pt-32 pb-24'>
      <h1 className='text-gray-700 text-center text-6xl font-semibold hover:underline'>Reunion Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 my-14 mx-24">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-[60vh] h-auto bg-white shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reunion_Gallery