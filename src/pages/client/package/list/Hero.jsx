import React from "react";
import { Typography } from "@material-tailwind/react";

export const Hero = () => {
	return (
		<div className="w-full">
			<div className="container flex justify-center items-center mt-6 mx-auto h-[160px] lg:h-[240px] xl:h-[280px]">
				<div className="px-2">
					<div className="cursor-default">
						<Typography
							color="blue-gray"
							className="text-2xl font-bold text-right md:text-3xl lg:text-4xl"
						>
							Discover Our Exclusive Packages
						</Typography>
						<Typography
							color="blue-gray"
							className="mt-1 text-xs text-right opacity-75 md:text-sm lg:text-base"
						>
							Explore Our Exclusive Service Packages
						</Typography>
						<Typography color="blue-gray" className="text-xs opacity-40">
							by Sewindu Project.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};
