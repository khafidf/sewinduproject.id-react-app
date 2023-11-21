import React from "react";
import { FaInstagram } from "react-icons/fa6";

export const AboutUs = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto">
				<div className="relative px-2 mx-auto w-[360px] sm:w-[420px] lg:w-[528px] py-4 h-[504px]">
					<div className="absolute w-[200px] rounded-lg h-[120px] shadow-sm bg-gray-900">
						<h1 className="absolute text-base font-bold text-blue-gray-50 left-8 top-12 md:text-lg lg:text-xl">
							~ About Us
						</h1>
					</div>
					<div className="absolute w-[270px] top-24 p-4 end-2 rounded-lg h-[224px] lg:w-[360px] md:w-[320px] bg-gray-100 shadow-md">
						<p className="px-2 py-8 text-sm md:text-base md:py-6 text-blue-gray-900">
							Sewindu Project is a leading provider of photography and
							videography services, offering a wide range of services including
							weddings, pre-weddings, yearbooks, couple sessions, and
							graduations.
						</p>
					</div>
					<div className="absolute w-[240px] lg:w-[254px] bottom-24 p-4 rounded-lg h-[108px] bg-gray-900 shadow-md">
						<p className="absolute p-2 text-sm md:text-base top-8 text-blue-gray-50">
							Based in Mojokerto
						</p>
					</div>
					<div className="absolute w-[60px] bottom-12 left-1/2 -translate-x-1/2 p-4 rounded-lg h-[60px] bg-gray-100 shadow-md">
						<a href="https://www.instagram.com/sewinduproject.id">
							<FaInstagram
								size={36}
								className="absolute left-3 top-3 text-blue-gray-900"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
