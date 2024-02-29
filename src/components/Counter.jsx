import { useState } from "react"; //Hook
import ReactDOM from "react-dom";
import InfoCounter from "./infomations/InfoCounter"; //Components

const Counter = () => {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col py-6 items-center w-full h-auto">
      <h1 className="font-bold text-gray-600 text-2xl mb-6">COUNTER</h1>
	  <span className="mb-4 mt-2 bg-indigo-500 text-gray-100 p-4 rounded-md shadow-sm text-2xl font-bold">{count}</span>
	  <div className="flex">
		<button className="mx-2 bg-rose-400 px-4 text-2xl pb-1.5 text-gray-200 rounded-md" onClick={handleDecrement}>-</button>
		<button className="mx-2 bg-green-400 px-4 text-2xl pb-1.5 text-gray-200 rounded-md" onClick={handleIncrement}>+</button>
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
          <InfoCounter />
      </div>,
        document.body
      )}
    </div>
  );
};

export default Counter;
