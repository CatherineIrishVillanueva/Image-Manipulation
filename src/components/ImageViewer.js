import React from 'react';

const ImageViewer = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="border border-black p-2 hover:scale-110">
          <img src={image} alt={`Uploaded ${index}`} className="w-100 h-100 object-cover" style={{ width: '300px', height: '300px' }} />
          <a href={image} download={`image_${index}`} className="block text-center mt-2 text-gray-600 hover:font-extrabold hover:text-black">Download</a>
        </div>
      ))}
    </div>
  );
};

export default ImageViewer;
