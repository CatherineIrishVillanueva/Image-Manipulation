import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import cloudIcon from './Images/cloud.png';

const ImageUploader = ({ onUpload }) => {
  const onDrop = useCallback(acceptedFiles => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/png, image/jpeg',
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        {...getRootProps()}
        className={`w-72 h-72 border-4 border-dashed rounded-lg flex flex-col items-center justify-center
          ${isDragActive ? (isDragAccept ? 'border-blue-500' : 'border-red-500') : 'border-gray-300'} 
          bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out hover:scale-110`}
        style={{
          boxShadow: isDragActive ? '0px 0px 20px rgba(0, 0, 255, 0.5)' : '0px 0px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <input {...getInputProps()} />
        <img src={cloudIcon} className='hover:scale-125' style={{ width: '45px', height: '45px', opacity: 0.85 }} alt="Cloud Icon" />
        <p className={`text-gray-500 text-center border-dashed text-lg ${isDragActive ? 'text-blue-500' : ''}`}>
          {isDragActive ? (isDragReject ? 'File type not supported!' : 'Drop here!') : 'Drag & drop images here or click to upload'}
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
