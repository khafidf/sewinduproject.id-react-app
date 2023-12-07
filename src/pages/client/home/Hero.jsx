import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div className="w-full text-blue-gray-900">
			<div
				className="top-0 w-full h-[466px] absolute bg-no-repeat bg-cover bg-bottom -z-20 lg:h-[555px] opacity-[0.9] xl:h-[614px]"
				style={{ backgroundImage: "url(bg.webp" }}
			>
				{/* <img src="./bg.jpg" className="w-full " /> */}
			</div>
			<div className="container flex justify-center items-center  mx-auto h-[408px] lg:h-[480px] xl:h-[540px] mt-2">
				<div className="flex flex-col gap-2 p-2 md:gap-3 lg:gap-4 lg:px-16">
					<div className="text-center cursor-default text-blue-gray-50">
						<Typography className="text-xs md:text-sm lg:text-base">
							Capture life&apos;s precious moments with our professional
							photography service.
						</Typography>
						<Typography className="font-bold text-2xl/snug md:text-3xl/snug lg:text-4xl/snug">
							Book now for stunning, timeless photos that will cherish memories
							forever
						</Typography>
					</div>
					<Button className="mx-auto duration-300 rounded-none shadow-md bg-gray-50 text-blue-gray-900 w-fit hover:shadow-gray-800 hover:text-blue-gray-50 hover:bg-gray-900">
						<Link to={"/gallery"}>Our Gallery</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
