import React, { useState, useEffect } from 'react';

const About = () => {
	const [data, setData] = useState('');

	useEffect(() => {
	  fetch('data/DataHome.txt')
		.then(response => response.text())
		.then(data => setData(data));
	}, []);

  return (
	<div className="mb-6">
		<div className="w-full h-36 md:h-64 bg-center bg-[url('https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg')]">
		</div>
		<div className="-top-20 relative bottom-0 w-full flex flex-col items-center">
			<img className="border-4 w-32 h-32 rounded-lg" src="images/dev.jpg" alt="profile"/>
			<h2 className="text-3xl font-bold text-gray-700">Fitri HY</h2>
			<p>@fitri-hy</p>
			<p className="text-center w-full mt-4">
			Hello, my name is Fitri HY. I am a Front End Developer. This is Basic React Hook project  and React Routes using Tailwind CSS Framework.
				<ul className="grid grid-cols-3 gap-4 mt-3">
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://hy-tech.my.id/">My Portfolio</a></li>
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://reactjs.org/">React JS</a></li>
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a></li>
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://reactrouter.com/">React Routes</a></li>
					<li className="bg-indigo-600 py-2 rounded-md font-bold text-gray-200 hover:bg-indigo-700"><a href="https://github.com/fitri-hy/react-hook">Github</a></li>
				</ul>
			</p>
			<pre class="p-4 mt-4 w-full bg-gray-800 text-gray-200 rounded-md" style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
			<div className="w-full flex text-gray-600 flex-col items-center mt-12">
				<p className="font-bold text-sm">Don't be shy !</p>
				<h2 className="font-bold text-2xl">Get in Touch</h2>
				<p className="py-4 text-center">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas <br/>or opportunities to be part of your visions.</p>
			</div>
			<div className="w-full grid text-gray-600 grid-cols-2 gap-5 py-6">
				<div className="flex flex-col bg-slate-300 items-center rounded-md p-4">
					<h2 className="font-bold text-2xl">Email</h2>
					<p className="text-center mt-4">
						<a href="mailto:support@hy-tech.my.id">support@hy-tech.my.id</a>
					</p>
				</div>
				<div className="flex flex-col bg-slate-300 items-center rounded-md p-4">
					<h2 className="font-bold text-2xl">Phone</h2>
					<p className="text-center mt-4">
						<a href="tel:6281525977595">+62 815-2597-7595</a>
					</p>
				</div>
			</div>
		</div>
	</div>
  );
};

export default About;
