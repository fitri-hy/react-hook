import { useState } from "react"; //Hook
import ReactDOM from "react-dom";
import InfoWordCount from "./infomations/InfoWordCount"; //Components

const WordCount = () => {
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const handleChange = (e) => {
    setWordCount(e.target.value.split(" ").length);
    setCharacterCount(e.target.value.replace(/\s/g, "").length);
	setSpaceCount(e.target.value.split(" ").length - 1);
	setParagraphCount(e.target.value.split("\n").length);
  };
  
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col py-6 items-center w-full h-auto">
      <h1 className="font-bold text-2xl mb-6 text-gray-600">WORD COUNT</h1>
	  <div className="flex flex-col w-full">
        <textarea className="border-2 border-slate-200 h-64 p-4 rounded-md focus:outline-none w-full" placeholder="Enter your text here" onChange={handleChange}></textarea>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
			<div className="flex flex-col items-center bg-indigo-600 rounded-md p-2">
				<span className="text-gray-100 font-bold text-xl mb-1">WORD</span>
				<span className="text-gray-600 bg-slate-200 w-full p-2 text-center font-bold rounded-sm">{wordCount}</span>
			</div>
			<div className="flex flex-col items-center bg-indigo-600 rounded-md p-2">
				<span className="text-gray-100 font-bold text-xl mb-1">CHAR</span>
				<span className="text-gray-600 bg-slate-200 w-full p-2 text-center font-bold rounded-sm">{characterCount}</span>
			</div>
			<div className="flex flex-col items-center bg-indigo-600 rounded-md p-2">
				<span className="text-gray-100 font-bold text-xl mb-1">SPACE</span>
				<span className="text-gray-600 bg-slate-200 w-full p-2 text-center font-bold rounded-sm">{spaceCount}</span>
			</div>
			<div className="flex flex-col items-center bg-indigo-600 rounded-md p-2">
				<span className="text-gray-100 font-bold text-xl mb-1">PARA</span>
				<span className="text-gray-600 bg-slate-200 w-full p-2 text-center font-bold rounded-sm">{paragraphCount}</span>
			</div>
		</div>
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
			<InfoWordCount />
		</div>,
        document.body
      )}
    </div>
  );
};

export default WordCount;
