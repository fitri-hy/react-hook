import { useState } from "react"; //Hook
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //Routing
import About from "../pages/About"; //Pages
import Counter from "../components/Counter"; //Components
import QrCode from "../components/QrCode"; //Components
import ToDoList from "../components/ToDoList"; //Components
import WordCount from "../components/WordCount"; //Components
import PhotoSize from "../components/PhotoSize"; //Components
import '../assets/css/App.css'; //CSS

function App() {
	const [isOpen, setIsOpen] = useState(false); //Hook toggle sidebar
	const [active, setActive] = useState('/'); //Hook active menu
	
  return (
    <Router>
		<div className="flex">
			<div className={isOpen ? "block fixed z-50 mt-0 md:mt-10" : "hidden"}>
				<div className="z-50 bg-indigo-700 md:pt-4 w-full md:static md:h-screen border px-4 py-2 flex-column space-y space-y-4 md:space-y-0 text-sm font-medium text-gray-500">
					<ul class="mt-12 md:mt-0">
						<li className="mb-2">
							<Link to="/" onClick={() => {setIsOpen(!isOpen); setActive('/');}} className={active === '/' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
								Home
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/counter" onClick={() => {setIsOpen(!isOpen); setActive('/counter');}} className={active === '/counter' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/counter' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
								Counter
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/qrcode" onClick={() => {setIsOpen(!isOpen); setActive('/qrcode');}} className={active === '/qrcode' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/qrcode' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
								QrCode
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/todolist" onClick={() => {setIsOpen(!isOpen); setActive('/todolist');}} className={active === '/todolist' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/todolist' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
								ToDo
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/wordcount" onClick={() => {setIsOpen(!isOpen); setActive('/wordcount');}} className={active === '/wordcount' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/wordcount' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
								Word
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/photosize" onClick={() => {setIsOpen(!isOpen); setActive('/photosize');}} className={active === '/photosize' ? "inline-flex items-center px-4 py-2 text-white bg-indigo-500 rounded-md active w-full" : "inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 w-full"}>
								<svg className={active === '/photosize' ? "w-4 h-4 me-2 text-white" : "w-4 h-4 me-2 text-gray-600"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
								Photo
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white text-medium text-gray-500 rounded-lg w-full">
				<nav className="z-50 fixed w-full py-2 px-4 flex justify-between text-gray-100 bg-indigo-600 shadow-md">
					<div className="flex">
						<button onClick={() => setIsOpen(!isOpen)}>
						  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
						</button>
						<h2 className="ms-2 mb-0.5 font-bold text-md">REACT HOOK TOOLS</h2>
					</div>
					<a href="https://github.com/fitri-hy">
						<img className="w-6 h-6" src="images/github.png" alt="github"/>
					</a>
				</nav>
				<div className="px-2 md:px-4 mt-14">
					<Routes>
					  <Route exact path="/" element={<About />} />
					  <Route exact path="/counter" element={<Counter />} />
					  <Route exact path="/qrcode" element={<QrCode />} />
					  <Route exact path="/todolist" element={<ToDoList />} />
					  <Route exact path="/wordcount" element={<WordCount />} />
					  <Route exact path="/photosize" element={<PhotoSize />} />
					</Routes>
				</div>
			</div>
		</div>
    </Router>
  );
}

export default App;
