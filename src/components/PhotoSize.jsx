import React, { useState, useRef } from "react"; //Hook
import { useImage } from "react-image"; //Hook
import ReactDOM from "react-dom";
import InfoPhotoSize from "./infomations/InfoPhotoSize"; //Components

const PhotoSize = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  
	const handleImageChange = (e) => {
	  const file = e.target.files[0];
	  if (file) {
		const reader = new FileReader();
		reader.onload = () => {
		  const image = new Image();
		  image.onload = () => {
			setImage(image);
		  };
		  image.src = reader.result;
		};
		reader.readAsDataURL(file);
	  }
	};

  const handleEdit = () => {
    if (image && width > 0 && height > 0) {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, width, height);
      const dataURL = canvas.toDataURL("image/jpeg");
      setEditedImage(dataURL);
    }
  };
  
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div className="flex flex-col py-6 items-center w-full h-auto">
      <h1 className="font-bold text-2xl mb-6">Photo Size</h1>
	  
	  <div className="flex flex-col mb-6">
		<div class="flex items-center justify-center w-full mb-4">
			<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
				<div class="flex flex-col items-center justify-center pt-5 pb-6">
					<svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
					</svg>
					<p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
				</div>
				<input id="dropzone-file" type="file" ref={inputRef} onChange={handleImageChange} class="hidden" />
			</label>
		</div> 
		<div className="flex mb-4 gap-4">
			<div class="relative h-10 w-full min-w-[200px]">
				<input type="number" placeholder="250" class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" value={width} onChange={(e) => setWidth(parseInt(e.target.value))}/>
				<label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
				  Width
				</label>
			</div>
			<div class="relative h-10 w-full min-w-[200px]">
				<input type="number" placeholder="250" class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" value={height} onChange={(e) => setHeight(parseInt(e.target.value))}/>
				<label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
				  Height
				</label>
			</div>
        </div>
		<button className="bg-indigo-500 text-white font-bold py-2 rounded-md" onClick={handleEdit}>Convert</button>
      </div>
      <div>
		{editedImage && <img className="w-full max-h-[600px]" src={editedImage} alt="Edited Image" />}
	  </div>
	  <button onClick={handleOpenModal} className="flex flex-col items-center absolute bottom-5 right-5 bg-indigo-600 rounded-full p-4 shadow-sm">
		<svg className="w-7 h-7 text-gray-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
		</svg>
	  </button>
      {modalIsOpen && ReactDOM.createPortal(
      <div className="absolute w-full inset-0 z-50 rounded-lg bg-white">
		<div className="flex justify-between items-center p-4">
		  <h1 className="text-2xl font-bold">INFORMATION</h1>
		  <button className="bg-rose-500 h-9 w-9 rounded-md text-white" onClick={handleCloseModal}>X</button>
		</div>
		<InfoPhotoSize />
	  </div>,
        document.body
      )}
    </div>
  );
};

export default PhotoSize;
