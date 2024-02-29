import { useState, useRef } from "react"; // Hook
import QRCode from "qrcode"; // Module
import ReactDOM from "react-dom";
import InfoQrCode from "./infomations/InfoQrCode"; //Components

const QrCode = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  const generateQrCode = () => {
    QRCode.toDataURL(text, {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.9,
      margin: 4,
      borderWidth: 2,
    })

      .then((data) => {
        setImage(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const downloadQrCode = () => {
    const image = imageRef.current;
    if (image) {
      const link = document.createElement("a");
      link.href = image.src;
      link.download = "qr-code.jpg";
      link.click();
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div className="flex flex-col py-6 items-center w-full h-screen">
		<h1 className="font-bold text-2xl mb-6 text-gray-600">QR-CODE GENERATOR</h1>
		<div className="flex">
		  <input
			type="text"
			className="border border-gray-300 rounded-md p-2 me-2"
			placeholder="Enter text or url .."
			value={text}
			onChange={(e) => setText(e.target.value)}
		  />
		  <button className="bg-indigo-600 rounded-md p-2 text-gray-100" onClick={generateQrCode}>
			Generate
		  </button>
	  </div>
	  <div className="mt-12 flex flex-col items-center">
		  {image && (
			<>
			  <img ref={imageRef} src={image} alt="QR code" className="w-[200px] border-2" />
			  <button className="bg-green-500 rounded-md p-2 mt-2 text-gray-100" onClick={downloadQrCode}>
				Download
			  </button>
			</>
		  )}
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
        <InfoQrCode />
    </div>,
        document.body
      )}
    </div>
  );
};

export default QrCode;
