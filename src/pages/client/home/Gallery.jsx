import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Gallery = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 lg:justify-evenly items-center justify-center w-full h-[calc(100vh-70px)] max-h-[678px] mt-[66px] lg:max-w-7xl lg:mx-auto">
			<div className="group relative w-[260px] h-[260px] sm:w-screen md:w-[500px] sm:h-[400px] lg:w-[400px]">
				<img
					className="absolute sm:top-16 sm:group-hover:-rotate-3 lg:top-8 z-10 duration-700 group-hover:origin-bottom group-hover:-rotate-6
                    lg:group-hover:-rotate-6
					xl:top-0"
					src="1.jpg"
					alt="Gallery photo"
				/>
				<img
					className="absolute sm:top-16 lg:top-8 xl:top-0 z-20"
					src="2.jpg"
					alt="Gallery photo"
				/>
				<img
					className="absolute sm:top-16  sm:group-hover:rotate-3 lg:top-8  z-30 duration-500 group-hover:origin-bottom group-hover:rotate-6 lg:group-hover:rotate-6 xl:top-0"
					src="3.jpg"
					alt="Gallery photo"
				/>
			</div>
			<div className="flex mx-auto lg:mx-0 flex-col gap-4 lg:max-w-md">
				<div>
					<h2 className="font-bold text-lg lg:text-3xl">
						Welcome to our gallery!
					</h2>
					<p className="text-md lg:text-lg">
						We are dedicated to capturing and showcasing the beauty of life
						through the art of photography.
					</p>
				</div>
				<button className="w-1/2 lg:w-1/3 rounded p-2 flex gap-2 duration-100 bg-black shadow-md text-white hover:shadow-gray-400 hover:text-black hover:bg-gray-100">
					<a className="flex mx-auto text-xs md:text-sm" href="/gallery">
						Let&apos;s explore
					</a>
					<FaArrowRight className="flex my-auto" size={20} />
				</button>
			</div>
		</div>
	);
};
