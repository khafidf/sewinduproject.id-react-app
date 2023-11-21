import React from "react";
import { Button } from "@material-tailwind/react";

export const Hero = () => {
	return (
		<div className="w-full bg-[url('./background-home.png')] bg-no-repeat bg-contain bg-center text-blue-gray-900">
			<div className="container flex justify-center items-center mx-auto h-[408px] lg:h-[480px] xl:h-[540px] mt-2">
				<div className="flex flex-col gap-2 p-2 md:gap-3 lg:gap-4 lg:px-16">
					<div className="text-center cursor-default">
						<p className="text-xs md:text-sm lg:text-base">
							Capture life&apos;s precious moments with our professional
							photography service.
						</p>
						<h1 className="font-bold text-2xl/snug md:text-3xl/snug lg:text-4xl/snug">
							Book now for stunning, timeless photos that will cherish memories
							forever
						</h1>
					</div>
					<Button className="mx-auto duration-300 bg-gray-900 rounded-none shadow-md text-blue-gray-50 w-fit hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-100">
						Our Gallery
					</Button>
				</div>
			</div>
		</div>
	);
};

{
	/* <div className="flex flex-col sm:flex-row gap-10 py-4 px-2 sm:py-6 sm:px-4 lg:justify-evenly items-center justify-center w-full md:h-[calc(100vh-40vh)] lg:h-[calc(100vh-20vh)] h-[calc(100vh-20vh)] max-h-[678px] lg:max-w-7xl lg:mx-auto">
			<div className="group relative w-[260px] h-[260px] sm:w-screen md:w-[500px] sm:h-[400px] lg:w-[400px]">
				<img
					className="absolute z-10 duration-700 sm:top-16 sm:group-hover:-rotate-3 lg:top-8 group-hover:origin-bottom group-hover:-rotate-6 lg:group-hover:-rotate-6 xl:top-0"
					src="1.jpg"
					alt="Gallery photo"
				/>
				<img
					className="absolute z-20 sm:top-16 lg:top-8 xl:top-0"
					src="2.jpg"
					alt="Gallery photo"
				/>
				<img
					className="absolute z-30 duration-500 sm:top-16 sm:group-hover:rotate-3 lg:top-8 group-hover:origin-bottom group-hover:rotate-6 lg:group-hover:rotate-6 xl:top-0"
					src="3.jpg"
					alt="Gallery photo"
				/>
			</div>
			<div className="flex flex-col gap-4 mx-auto lg:mx-0 lg:max-w-md">
				<div>
					<h2 className="text-lg font-bold lg:text-3xl">
						Welcome to our gallery!
					</h2>
					<p className="text-md lg:text-lg">
						We are dedicated to capturing and showcasing the beauty of life
						through the art of photography.
					</p>
				</div>
				<Button className="flex gap-2 px-6 py-2 text-white duration-100 bg-black rounded-full shadow-md w-fit hover:shadow-gray-400 hover:text-black hover:bg-gray-100">
					<a className="flex m-auto text-xs md:text-sm" href="/gallery">
						Let&apos;s explore
					</a>
					<FaArrowRight className="flex my-auto" size={20} />
				</Button>
			</div>
		</div> */
}
