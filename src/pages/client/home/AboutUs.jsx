import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const AboutUs = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto xl:pt-16 xl:pb-8">
				<div className="relative px-2 mx-auto w-[360px] sm:w-[420px] lg:w-[528px] py-8 xl:py-0 h-[504px]">
					<div className="absolute w-[200px] rounded-none h-[120px] shadow-sm bg-gray-900">
						<Typography className="absolute text-base font-bold text-blue-gray-50 left-8 top-12 md:text-lg lg:text-xl">
							~ About Us
						</Typography>
					</div>
					<div className="absolute w-[270px] top-28 p-4 end-2 rounded-none h-[224px] lg:w-[360px] xl:h-[260px] xl:top-20 md:w-[320px] bg-gray-50 shadow-md">
						<Typography className="px-2 py-8 text-sm md:text-base xl:py-14 md:py-6 text-blue-gray-900">
							Sewindu Project is a leading provider of photography and
							videography services, offering a wide range of services including
							weddings, pre-weddings, yearbooks, couple sessions, and
							graduations.
						</Typography>
					</div>
					<div className="absolute w-[240px] lg:w-[254px] bottom-20 p-4 rounded-none h-[108px] bg-gray-900 shadow-md">
						<Typography className="absolute p-2 text-sm md:text-base top-8 text-blue-gray-50">
							Based in Mojokerto
						</Typography>
					</div>
					<div className="absolute w-[60px] bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-none h-[60px] bg-gray-50 shadow-md">
						<Link href="https://www.instagram.com/sewinduproject.id">
							<FaInstagram
								size={36}
								className="absolute left-3 top-3 text-blue-gray-900"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
