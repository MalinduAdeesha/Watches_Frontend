import React, { useRef } from 'react';
import icon from '../Assets/icon1.png';

function ImageUploader() {
  const imageAreaRef = useRef();

  const handleImageClick = () => {
    const inputFile = document.getElementById('input-file');
    inputFile.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        imageAreaRef.current.style.backgroundImage = `url(${event.target.result})`;
        imageAreaRef.current.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    imageAreaRef.current.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    imageAreaRef.current.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    imageAreaRef.current.classList.remove('drag-over');

    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        //set bg
        imageAreaRef.current.style.backgroundImage = `url(${event.target.result})`;
        imageAreaRef.current.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=''>
      <label
        htmlFor='input-file'
        className='w-[250px] h-[200px] bg-white p-5 text-center rounded-xl flex flex-col justify-center'
        id='drop-area'
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input type="file" accept='image/*' id='input-file' className='hidden' onChange={handleFileChange} />
        <div
          className='flex flex-col items-center justify-center w-[100%] h-[100%] border-dashed border-orange-500 border-2 rounded-lg image-area '
          ref={imageAreaRef}
          onClick={handleImageClick}
          id='img-view'
        >
          <img src={icon} alt="" className='z-0 w-20' />
          <p className='text-sm'>Drag and drop or click to upload image</p>
        </div>
      </label>
    </div>
  );
}

export default ImageUploader;
