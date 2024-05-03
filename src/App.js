import React, { useState } from 'react';
import Header from './components/Header';
import { ReactTyped } from "react-typed";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cuteGirl from './components/Images/cuteGirl.png';
import ImageUploader from './components/ImageUploader';
import ImageViewer from './components/ImageViewer';
import '@fontsource/poppins';

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUpload = (files) => {
    const invalidFiles = files.filter(file => !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type));
    if (invalidFiles.length > 0) {
      toast.error('Please select only PNG or JPEG image files.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const urls = files.map(file => URL.createObjectURL(file));
    setUploadedImages([...uploadedImages, ...urls]);

    toast.success('Image(s) uploaded successfully.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto" style={{ fontFamily: 'Poppins', marginTop: -45, paddingTop: 0 }}>
        <div className="grid grid-cols-2 gap-4 ml-5">
          <div className='text-3xl font-bold mb-4 flex items-center'>
            <div>
              <img src={cuteGirl} alt="Cute Girl" className="mr-2 mb-5 hover:scale-110" />
              <ReactTyped
                strings={["Drag &amp; Drop Images", 'View Uploaded Images', 'Download Images']}
                typeSpeed={120}
                backSpeed={140}
                loop
                style={{ alignContent: 'Center', marginLeft: '85px' }}
              />
              <h4 className='text-gray-500 justify-center text-center text-lg ml-5 mt-2'>100% Easy to use and Free</h4>
            </div>
          </div>
          <div>
            <ImageUploader onUpload={handleUpload} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-center border-t border-gray-400 p-5">Past Uploaded Images</h2>
          {uploadedImages.length > 0 ? (
            <ImageViewer images={uploadedImages} />
          ) : (
            <p className='text-center'>No images uploaded yet.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
